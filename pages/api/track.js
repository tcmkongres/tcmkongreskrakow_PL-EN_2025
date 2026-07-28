import { sql } from "@/lib/db";

const ALLOWED_TYPES = ["pageview", "buy_ticket_click", "speaker_click"];

// Przycinanie stringow, zeby do bazy nie trafialy zbyt dlugie wartosci.
function clip(value, max = 512) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, max) : null;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = req.body || {};
  const type = clip(body.type, 32);

  if (!ALLOWED_TYPES.includes(type)) {
    return res.status(400).json({ error: "Invalid type" });
  }

  try {
    await sql`
      insert into events (type, path, speaker_slug, label, locale, referrer, session_id)
      values (
        ${type},
        ${clip(body.path)},
        ${clip(body.speaker_slug, 128)},
        ${clip(body.label, 64)},
        ${clip(body.locale, 8)},
        ${clip(body.referrer, 256)},
        ${clip(body.session_id, 64)}
      )
    `;
    return res.status(204).end();
  } catch (err) {
    console.error("track insert failed", err);
    return res.status(500).json({ error: "Insert failed" });
  }
}
