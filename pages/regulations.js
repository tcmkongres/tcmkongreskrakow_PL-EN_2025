import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return router.locale === "pl" ? (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 mb-4 text-indigo-600">
          <Link
            href="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Powrót do strony głównej
          </Link>
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          REGULAMIN TCM KONGRES KRAKÓW 2025
        </h1>

        <div className="mt-10">
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">1.</strong>{" "}
                Niniejszy regulamin określa warunki, na jakich odbywa się TCM
                Kongres Kraków 2025 w dniach 10-12 października 2025r., zwany
                dalej Kongresem.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">2.</strong>{" "}
                Organizatorem Kongresu jest: Polskie Towarzystwo Tradycyjnej
                Medycyny Chińskiej ul. Warszawska 1; 31-155 Kraków (w siedzibie
                Centrum Medycyny Chińskiej) REGON: 121055094; NIP: 676-240-83-17
                ; KRS: 0000331282 e-mail: biuro@pttmc.org.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">3.</strong>{" "}
                Biuro Organizacyjne Kongresu ma siedzibę w lokalu Centrum
                Medycyny Chińskiej w Krakowie, ul. Warszawska 1, 31-155 Kraków.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">4.</strong>{" "}
                Kongres jest organizowany: – na terenie Qubus Hotel Kraków, ul.
                Nadwiślańska 6, Podgórze, 30-527 Kraków, Polska
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">5.</strong>{" "}
                Uczestnikiem Spotkania może być każdy, kto kupi bilet poprzez
                stronę www.tcmkongres.pl.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">6.</strong>{" "}
                Istnieje mozliwość zakupu biletu na mijescu w kasie Kongresu w
                dniach wydarzenia 10-12 października 2025r.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">7.</strong>{" "}
                Kupując bilet Uczestnik zgadza się na umieszczenie danych
                osobowych w bazie Polskiego Towarzystwa Medycyny Chińskiej, w
                celu przeprowadzenia TCM Kongres Kraków 2025, osobowych zgodnie
                z ustawą z dnia 14 grudnia 2018 r. o ochronie danych osobowych.
                Podanie danych osobowych ma charakter dobrowolny, a podającemu
                przysługuje prawo wglądu do tych danych, jak i możliwość ich
                modyfikacji oraz usunięcia po zakończeniu Kongresu.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">8.</strong>{" "}
                Kupującemu przysługuje 14 - dniowy termin na zwrot zakupionego
                biletu. Po tym okresie nie ma możliwości zwrotu zakupionego
                biletu.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">9.</strong>{" "}
                Oficjalne zakończenie sprzedaży biletów następuje dnia
                12.10.2025 r.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">10.</strong>{" "}
                Koszt udziału w Kongresie obejmuje : a) w przypadku wyboru opcji
                Bilet 1 – dniowy lub Bilet 3 - dniowy – opłatę rejestracyjną, –
                opłatę za materiały kongresowe, – udział w sesji plenarnej,
                wykładach, panelach dyskusyjnych w przerwach, wykładach
                otwartych, na które wykupiony został bilet. b) w przypadku
                wybrania opcji „Bankiet” – udział w bankiecie oraz party
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">11.</strong>{" "}
                Opłata rejestracyjna nie obejmuje kosztów podróży, noclegu oraz
                wyżywienia.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">12.</strong> Za
                pokrycie szkody oraz pozostałych kosztów powstałych z winy
                Uczestnika nie objętych ceną i nieuregulowanych do dnia
                zakończenia Kongresu odpowiada Uczestnik, bądź delegująca go
                firma/instytucja/urząd. W przypadku nie uiszczenia płatności
                przez Uczestnika, o których mowa w zdaniu pierwszym, Organizator
                wystawi fakturę i prześle ją na adres wskazany podczas
                rejestracji online. Uczestnik lub delegująca go
                firma/instytucja/urząd jest zobowiązany uregulować należności w
                terminie wskazanym na fakturze.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">13.</strong> Za
                W przypadku uiszczenia zniżkowej opłaty za Kongres w przypadku
                członka Stowarzyszenia PTTMC lub ETCMA bez opłaconej składki
                członkowskiej, Organizator ma prawo skreślić z listy uczestników
                Kongresu.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">14.</strong>{" "}
                Organizator zastrzega sobie prawo do odwołania lub zmiany części
                programu Spotkania, bez obowiązku uprzedzenia i bez obowiązku
                wypłacenia rekompensaty lub odszkodowania wobec jakichkolwiek
                osób, w zależności od osobistego uznania Organizatora, bez
                obowiązku zwrotu części lub całkowitej sumy na jaką opiewa
                opłata uczestnictwa. W przypadku odwołania całości Spotkania
                Organizator zwraca całość kwoty wpłaconej przez uczestnika
                przelewem na konto bankowe z jakiego dokonana została wpłata za
                Bilet i Bankiet.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">15.</strong>{" "}
                Regulamin Kongresu dostępny jest na stronie internetowej, w
                siedzibie Organizatora oraz w Recepcji w trakcie trwania
                Kongresu.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">16.</strong>{" "}
                Organizator nie ponosi odpowiedzialności za rzeczy pozostawione
                przez uczestnika Kongresu
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">17.</strong> W
                sprawach nieuregulowanych niniejszym Regulaminem zastosowanie
                znajdą odpowiednie przepisy Kodeksu Cywilnego.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 mb-4 text-indigo-600">
          <Link
            href="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Return to Homepage
          </Link>
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          TERMS AND CONDITIONS OF TCM CONGRESS KRAKOW 2025
        </h1>

        <div className="mt-10">
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">1.</strong>{" "}
                These terms and conditions define the conditions under which the
                TCM Congress Krakow 2025, hereinafter referred to as the
                Congress, will take place on October 10-12, 2025.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">2.</strong> The
                organizer of the Congress is the Polish Society of Traditional
                Chinese Medicine, ul. Warszawska 1; 31-155 Krakow (at the Center
                of Chinese Medicine) REGON: 121055094; NIP: 676-240-83-17; KRS:
                0000331282 email: biuro@pttmc.org.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">3.</strong> The
                Organizational Office of the Congress is located at the premises
                of the Center of Chinese Medicine in Krakow, ul. Warszawska 1,
                31-155 Krakow.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">4.</strong> The
                Congress is organized at the Qubus Hotel Kraków, ul.
                Nadwiślańska 6, Podgórze, 30-527 Kraków, Polska.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">5.</strong> Any
                person who purchases a ticket through the website
                www.tcmkongres.pl can participate in the event.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">6.</strong> It
                is possible to purchase a ticket on-site at the Congress ticket
                office during the event on October 10-12, 2025.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">7.</strong> By
                purchasing a ticket, the Participant agrees to the processing of
                personal data by the Polish Society of Traditional Chinese
                Medicine for the purpose of conducting the TCM Congress Krakow
                2025, in accordance with the Act of December 14, 2018, on the
                protection of personal data. Providing personal data is
                voluntary, and the data subject has the right to access, modify,
                and delete the data after the Congress ends.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">8.</strong> The
                buyer is entitled to a 14-day refund period for the purchased
                ticket. After this period, there is no possibility of refunding
                the purchased ticket.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">9.</strong> The
                official end of ticket sales is on October 12, 2025.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">10.</strong> The
                cost of participating in the Congress includes: a) in the case
                of choosing the 1-day Ticket or the 3-day Ticket: registration
                fee, congress materials fee, participation in plenary sessions,
                lectures, panel discussions during breaks, open lectures for
                which a ticket has been purchased; b) in the case of choosing
                the &quot;Banquet&quot; option: participation in the banquet and
                party.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">11.</strong> The
                registration fee does not cover travel, accommodation, and meals
                costs.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">12.</strong> The
                Participant is responsible for any damages and other costs
                incurred by the Participant that are not covered by the
                participation fee and remain unpaid by the end of the Congress.
                In case of non-payment by the Participant, the Organizer will
                issue an invoice and send it to the address provided during
                online registration. The Participant or the delegating
                company/institution/authority is obliged to settle the payments
                within the deadline indicated on the invoice.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">13.</strong> In
                the case of discounted Congress fees for PTTMC or ETCMA members
                without paid membership fees, the Organizer has the right to
                strike them off the list of Congress participants.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">14.</strong> The
                Organizer reserves the right to cancel or change parts of the
                Meeting&apos;s program, without prior notice and without
                obligation to provide compensation or indemnity to any persons,
                at the Organizer&apos;s sole discretion, without refunding a
                portion or the entire amount of the participation fee. In case
                of the cancellation of the entire Meeting, the Organizer will
                refund the full amount paid by the participant via bank transfer
                to the account from which the Ticket and Banquet payment was
                made.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">15.</strong> The
                Congress regulations are available on the website, at the
                Organizer&apos;s premises, and at the Reception during the
                Congress.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">16.</strong> The
                Organizer is not responsible for any items left by the Congress
                participant.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">17.</strong> In
                matters not regulated by these Regulations, the relevant
                provisions of the Civil Code shall apply.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
