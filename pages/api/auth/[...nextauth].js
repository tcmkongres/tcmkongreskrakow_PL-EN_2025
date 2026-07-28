import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

// Dwa stale konta trzymane w zmiennych srodowiskowych (bez tabeli uzytkownikow).
// Hash generuj skryptem: `node scripts/change-password.js admin`.
// Wartosc zmiennej to hash bcrypt zakodowany w base64 — dzieki temu nie ma znaku $,
// wiec ta sama wartosc dziala i lokalnie (.env.local), i na Vercel, bez escapowania.
function decodeHash(value) {
  if (!value) return "";
  // Kompatybilnosc wstecz: surowy hash bcrypt zawsze zaczyna sie od "$2".
  if (value.startsWith("$2")) return value;
  try {
    return Buffer.from(value, "base64").toString("utf8");
  } catch {
    return value;
  }
}

function getUsers() {
  return [
    {
      username: process.env.ADMIN_USER,
      hash: decodeHash(process.env.ADMIN_PASSWORD_HASH),
      role: "admin",
    },
    {
      username: process.env.VIEWER_USER,
      hash: decodeHash(process.env.VIEWER_PASSWORD_HASH),
      role: "viewer",
    },
  ].filter((u) => u.username && u.hash);
}

export const authOptions = {
  session: { strategy: "jwt" },
  pages: { signIn: "/admin/login" },
  providers: [
    CredentialsProvider({
      name: "Login",
      credentials: {
        username: { label: "Login", type: "text" },
        password: { label: "Haslo", type: "password" },
      },
      async authorize(credentials) {
        const user = getUsers().find(
          (u) => u.username === credentials?.username,
        );
        if (!user) return null;

        const ok = await bcrypt.compare(credentials?.password || "", user.hash);
        if (!ok) return null;

        return { id: user.username, name: user.username, role: user.role };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session.user) session.user.role = token.role;
      return session;
    },
  },
};

// Lista dozwolonych adresow (local / test / prod). Mozna nadpisac zmienna
// NEXTAUTH_ALLOWED_ORIGINS (adresy po przecinku). Dzieki temu ten sam plik .env
// dziala w kazdym srodowisku — NEXTAUTH_URL nie trzeba zmieniac per srodowisko.
const ALLOWED_ORIGINS = (
  process.env.NEXTAUTH_ALLOWED_ORIGINS ||
  process.env.NEXTAUTH_URL ||
  "http://localhost:3000"
)
  .split(",")
  .map((s) => s.trim().replace(/\/$/, ""))
  .filter(Boolean);

function requestOrigin(req) {
  const host = req.headers["x-forwarded-host"] || req.headers.host || "";
  const proto =
    (req.headers["x-forwarded-proto"] || "").split(",")[0] ||
    (host.startsWith("localhost") || host.startsWith("127.0.0.1")
      ? "http"
      : "https");
  return `${proto}://${host}`;
}

export default async function handler(req, res) {
  // Wybierz adres zgodny z biezacym zadaniem z dozwolonej listy i ustaw go dla NextAuth.
  const origin = requestOrigin(req);
  if (ALLOWED_ORIGINS.includes(origin)) {
    process.env.NEXTAUTH_URL = origin;
  }
  return NextAuth(req, res, authOptions);
}
