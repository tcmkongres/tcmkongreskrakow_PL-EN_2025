import { neon } from "@neondatabase/serverless";

// Klient Neon (Postgres) po HTTP — bezpieczny dla funkcji serverless Vercela.
// Tworzony leniwie przy pierwszym zapytaniu, zeby brak DATABASE_URL nie wywracal builda.
let client;

function getClient() {
  if (!client) {
    if (!process.env.DATABASE_URL) {
      throw new Error("Brak zmiennej srodowiskowej DATABASE_URL");
    }
    client = neon(process.env.DATABASE_URL);
  }
  return client;
}

// Uzycie jak zwykly tag: await sql`select ...`
export function sql(strings, ...values) {
  return getClient()(strings, ...values);
}
