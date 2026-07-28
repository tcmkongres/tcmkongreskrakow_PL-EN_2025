-- Schemat statystyk. Uruchom raz w konsoli SQL Neon (Vercel -> Storage -> Neon -> SQL Editor).
-- Bez danych osobowych: brak IP, brak nazwisk. session_id to losowy identyfikator sesji przegladarki.

create table if not exists events (
  id           bigint generated always as identity primary key,
  type         text        not null,          -- pageview | buy_ticket_click | speaker_click
  path         text,                          -- sciezka strony, np. /speaker/john-doe
  speaker_slug text,                          -- slug wykladowcy (tylko dla speaker_click)
  label        text,                           -- dodatkowa etykieta, np. rodzaj biletu (Bilet | Bankiet)
  locale       text,                          -- pl | en
  referrer     text,                          -- domena zrodla ruchu (bez query stringow)
  session_id   text,                          -- losowy id sesji (nie jest dana osobowa)
  created_at   timestamptz not null default now()
);

create index if not exists events_type_created_idx on events (type, created_at);
create index if not exists events_speaker_idx on events (speaker_slug) where speaker_slug is not null;
create index if not exists events_path_idx on events (path) where path is not null;
