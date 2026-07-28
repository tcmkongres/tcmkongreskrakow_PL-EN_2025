# Panel statystyk

Prosty panel z logowaniem (`/admin`) pokazujacy statystyki strony: odslony,
unikalni odwiedzajacy, kliki w "kup bilet" oraz ranking klikniec w wykladowcow.

## Jak dziala

- Zdarzenia zbiera helper `lib/track.js` i zapisuje endpoint `pages/api/track.js` do bazy Neon.
- Nie zapisujemy IP ani danych osobowych. `session_id` to losowy identyfikator trzymany
  w `sessionStorage` (znika po zamknieciu karty) — dlatego nie jest potrzebny cookie banner.
- Panel `/admin` jest chroniony logowaniem (NextAuth). Sa dwie role:
  - **admin** — widzi wszystko (dodatkowo: najpopularniejsze strony, zrodla ruchu, wykres 14 dni),
  - **viewer** (konto "z haslem") — tylko zagregowane liczby i rankingi.
- Gdy panel nie jest skonfigurowany (brak zmiennych/bazy) albo ktos nie jest zalogowany,
  `/admin` zwraca zwykle **404** — nigdzie nie pokazujemy, ze cos jest nieskonfigurowane.

## Uruchomienie lokalne (test przed wypchnieciem)

1. `cp .env.local.example .env.local`
2. Uzupelnij `.env.local`:
   ```bash
   openssl rand -base64 32                 # -> NEXTAUTH_SECRET
   node scripts/change-password.js admin   # ustawia ADMIN_PASSWORD_HASH w .env.local
   node scripts/change-password.js viewer  # ustawia VIEWER_PASSWORD_HASH
   ```
3. Zeby zobaczyc dane, potrzebujesz bazy — utworz darmowy projekt na neon.tech
   (albo dodaj Neon w Vercelu i `vercel env pull .env.local`), uruchom `db/schema.sql`,
   a connection string wpisz do `DATABASE_URL`.
4. `npm run dev` -> otworz http://localhost:3000/admin -> zaloguj.
   Poklikaj po stronie (bilet, wykladowcy) i odswiez panel — liczby powinny rosnac.

## Konfiguracja (jednorazowo)

### 1. Baza Neon
1. W panelu Vercel: **Storage -> Create Database -> Neon** i podlacz do projektu.
   Vercel sam doda zmienna `DATABASE_URL`.
2. W konsoli SQL Neon uruchom zawartosc pliku `db/schema.sql` (tworzy tabele `events`).

### 2. Zmienne srodowiskowe
Ustaw w Vercel (**Settings -> Environment Variables**) oraz lokalnie w `.env.local`
(wzor: `.env.local.example`):

| Zmienna | Opis |
|---|---|
| `DATABASE_URL` | dodane automatycznie przez integracje Neon |
| `NEXTAUTH_SECRET` | `openssl rand -base64 32` |
| `NEXTAUTH_URL` | adres produkcyjny (np. `https://tcmkongreskrakow.pl`) |
| `ADMIN_USER` / `ADMIN_PASSWORD_HASH` | login i hash hasla admina |
| `VIEWER_USER` / `VIEWER_PASSWORD_HASH` | login i hash hasla podgladu |

### 3. Hasla
Hasel nie trzymamy jawnie — tylko hash bcrypt (zakodowany w base64). Ustaw skryptem:

```bash
node scripts/change-password.js admin
node scripts/change-password.js viewer
```

Skrypt podmieni `.env.local` i wypisze te sama wartosc do wklejenia na Vercel.
Szczegoly nizej w "Zmiana / reset hasla".

## Zmiana / reset hasla

Najprosciej skryptem — sam podmienia hash w `.env.local` (z escapowaniem `$`)
i wypisuje surowy hash do wklejenia na Vercel:

```bash
node scripts/change-password.js admin          # zapyta o haslo bez echa (nie trafia do historii)
node scripts/change-password.js viewer "haslo" # albo haslo z argumentu
# alias: npm run change-password -- admin
```

Hash jest zapisywany w base64 (bez znaku `$`), wiec **ta sama wartosc dziala lokalnie
i na Vercel** — zaden `\` ani escapowanie nie jest potrzebne. Potem:
- lokalnie: zrestartuj `npm run dev`,
- na Vercel: wklej te sama wartosc (skrypt ja wypisuje) w Settings -> Environment Variables i zrob redeploy.

Login (nazwe konta) zmieniasz recznie w `ADMIN_USER` / `VIEWER_USER`.

## Gdzie sa mierzone zdarzenia
- `pageview` — automatycznie przy kazdej zmianie strony (`pages/_app.js`), poza `/admin`.
- `buy_ticket_click` — przyciski "kup bilet" w `components/sections/Shopping.js`.
- `speaker_click` — karty wykladowcow w `components/sections/Speakers.js`.

Aby dodac nowe zdarzenie: zaimportuj `track` z `@/lib/track` i wywolaj
`track("speaker_click", { speaker_slug: slug })` w `onClick`.
