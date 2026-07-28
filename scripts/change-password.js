// Ustawia/zmienia haslo konta panelu statystyk w .env.local.
//
// Uzycie:
//   node scripts/change-password.js admin              (zapyta o haslo bez echa)
//   node scripts/change-password.js viewer "haslo"     (haslo z argumentu)
//
// Konto -> zmienna:
//   admin  -> ADMIN_PASSWORD_HASH
//   viewer -> VIEWER_PASSWORD_HASH
//
// Skrypt aktualizuje TYLKO .env.local (lokalnie). Na Vercel wklej wypisany
// surowy hash w Settings -> Environment Variables i zrob redeploy.

const fs = require("fs");
const path = require("path");
const readline = require("readline");
const bcrypt = require("bcryptjs");

const ACCOUNTS = {
  admin: "ADMIN_PASSWORD_HASH",
  viewer: "VIEWER_PASSWORD_HASH",
  podglad: "VIEWER_PASSWORD_HASH",
};

const envPath = process.env.ENV_FILE || path.join(process.cwd(), ".env.local");

function askHidden(query) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    let muted = false;
    rl._writeToOutput = (str) => {
      if (!muted) rl.output.write(str);
    };
    rl.question(query, (answer) => {
      rl.close();
      process.stdout.write("\n");
      resolve(answer);
    });
    muted = true; // od tej chwili nie wypisujemy wpisywanych znakow
  });
}

// Podmienia (lub dopisuje) linie KLUCZ="wartosc" w tresci pliku .env.
function upsertEnvLine(content, key, value) {
  const line = `${key}="${value}"`;
  const re = new RegExp(`^${key}=.*$`, "m");
  if (re.test(content)) return content.replace(re, line);
  return content.replace(/\s*$/, "") + `\n${line}\n`;
}

async function main() {
  const account = (process.argv[2] || "").toLowerCase();
  const key = ACCOUNTS[account];
  if (!key) {
    console.error('Podaj konto: "admin" albo "viewer".');
    console.error('Przyklad: node scripts/change-password.js admin');
    process.exit(1);
  }

  let password = process.argv[3];
  if (!password) {
    password = await askHidden(`Nowe haslo dla konta "${account}": `);
  }
  if (!password || password.length < 4) {
    console.error("Haslo jest za krotkie (min. 4 znaki).");
    process.exit(1);
  }

  const rawHash = bcrypt.hashSync(password, 10);
  // base64 nie zawiera znaku $, wiec ta sama wartosc dziala lokalnie i na Vercel (bez escapowania).
  const value = Buffer.from(rawHash, "utf8").toString("base64");

  if (!fs.existsSync(envPath)) {
    console.error(`Brak pliku ${envPath}. Skopiuj najpierw .env.local.example.`);
    process.exit(1);
  }

  const content = fs.readFileSync(envPath, "utf8");
  fs.writeFileSync(envPath, upsertEnvLine(content, key, value));

  console.log(`OK — zaktualizowano ${key} w ${path.basename(envPath)}.`);
  console.log("Zrestartuj: npm run dev\n");
  console.log("Ta SAMA wartosc wchodzi na Vercel (Settings -> Environment Variables), potem redeploy:");
  console.log(`${key}=${value}`);
}

main();
