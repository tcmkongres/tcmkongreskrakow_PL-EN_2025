import { getServerSession } from "next-auth/next";
import { signOut } from "next-auth/react";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { sql } from "@/lib/db";
import { people } from "@/lib/speakers";

function speakerName(slug) {
  const p = people.find((person) => person.url.replace("/", "") === slug);
  return p ? p.name : slug;
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="mt-2 text-3xl font-bold text-gray-900">{value}</dd>
    </div>
  );
}

function Table({ title, head, rows, empty }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
      <h2 className="text-base font-semibold text-gray-900">{title}</h2>
      {rows.length === 0 ? (
        <p className="mt-4 text-sm text-gray-400">{empty}</p>
      ) : (
        <table className="mt-4 w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="pb-2 font-medium">{head[0]}</th>
              <th className="pb-2 text-right font-medium">{head[1]}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((r, i) => (
              <tr key={i}>
                <td className="py-2 pr-4 text-gray-800">{r.label}</td>
                <td className="py-2 text-right font-semibold text-gray-900">
                  {r.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default function AdminDashboard({ role, data }) {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-lg font-bold text-gray-900">
              Statystyki — TCM Kongres
            </h1>
            <p className="text-sm text-gray-500">
              Rola: {role === "admin" ? "administrator" : "podglad"}
            </p>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-700"
          >
            Wyloguj
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-8 px-6 py-8">
        <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard label="Odslony stron" value={data.counts.pageviews} />
          <StatCard label="Unikalni odwiedzajacy" value={data.counts.visitors} />
          <StatCard label="Kliki w kup bilet" value={data.counts.buyClicks} />
          <StatCard
            label="Kliki w wykladowcow"
            value={data.counts.speakerClicks}
          />
        </dl>

        <div className="grid gap-6 lg:grid-cols-2">
          <Table
            title="Kliki w kup bilet wg rodzaju"
            head={["Rodzaj", "Kliki"]}
            rows={data.buyBreakdown}
            empty="Brak klikniec."
          />
          <Table
            title="Najczesciej klikani wykladowcy"
            head={["Wykladowca", "Kliki"]}
            rows={data.speakerRanking}
            empty="Brak klikniec."
          />
        </div>

        {role === "admin" && (
          <div className="grid gap-6 lg:grid-cols-2">
            <Table
              title="Najpopularniejsze strony"
              head={["Strona", "Odslony"]}
              rows={data.topPages}
              empty="Brak danych."
            />
            <Table
              title="Zrodla ruchu"
              head={["Domena", "Wejscia"]}
              rows={data.referrers}
              empty="Brak danych (ruch bezposredni)."
            />
            <div className="lg:col-span-2">
              <Table
                title="Odslony wg dnia (caly okres)"
                head={["Dzien", "Odslony"]}
                rows={data.timeseries}
                empty="Brak danych."
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export async function getServerSideProps(context) {
  let session;
  try {
    session = await getServerSession(context.req, context.res, authOptions);
  } catch (err) {
    // Brak NEXTAUTH_SECRET lub inny blad auth — nie zdradzamy tego, pokazujemy 404.
    console.error("auth session failed", err);
    return { notFound: true };
  }

  if (!session) {
    return { redirect: { destination: "/admin/login", permanent: false } };
  }

  const role = session.user?.role || "viewer";

  try {
    const [counts] = await sql`
      select
        count(*) filter (where type = 'pageview')::int as pageviews,
        count(distinct session_id) filter (where type = 'pageview')::int as visitors,
        count(*) filter (where type = 'buy_ticket_click')::int as buy_clicks,
        count(*) filter (where type = 'speaker_click')::int as speaker_clicks
      from events
    `;

    const buyBreakdown = await sql`
      select coalesce(label, '(brak)') as label, count(*)::int as value
      from events where type = 'buy_ticket_click'
      group by label order by value desc
    `;

    const speakerRows = await sql`
      select speaker_slug, count(*)::int as value
      from events where type = 'speaker_click' and speaker_slug is not null
      group by speaker_slug order by value desc limit 30
    `;

    const data = {
      counts: {
        pageviews: counts.pageviews,
        visitors: counts.visitors,
        buyClicks: counts.buy_clicks,
        speakerClicks: counts.speaker_clicks,
      },
      buyBreakdown: buyBreakdown.map((r) => ({ label: r.label, value: r.value })),
      speakerRanking: speakerRows.map((r) => ({
        label: speakerName(r.speaker_slug),
        value: r.value,
      })),
      topPages: [],
      referrers: [],
      timeseries: [],
    };

    if (role === "admin") {
      const topPages = await sql`
        select path as label, count(*)::int as value
        from events where type = 'pageview' and path is not null
        group by path order by value desc limit 15
      `;
      const referrers = await sql`
        select referrer as label, count(*)::int as value
        from events where type = 'pageview' and referrer is not null
        group by referrer order by value desc limit 15
      `;
      const timeseries = await sql`
        select to_char(date_trunc('day', created_at), 'YYYY-MM-DD') as label,
               count(*)::int as value
        from events
        where type = 'pageview'
        group by 1 order by 1 desc
      `;
      data.topPages = topPages;
      data.referrers = referrers;
      data.timeseries = timeseries;
    }

    return { props: { role, data } };
  } catch (err) {
    // Baza niedostepna/niepoprawna — nie zdradzamy tego, pokazujemy 404.
    console.error("admin dashboard query failed", err);
    return { notFound: true };
  }
}
