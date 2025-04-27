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
          Polityka Prywatności określa zasady przetwarzania i ochrony danych
          osobowych, przekazywanych przez Użytkowników serwisu internetowego TCM
          KONGRES KRAKÓW 2023, dalej „Serwis” lub „Serwis internetowy”.
        </h1>

        <div className="mt-10">
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">I. </strong>{" "}
                POSTANOWIENIA OGÓLNE
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">1.</strong>{" "}
                Administratorem danych osobowych, zawartych w Serwisie, jest
                Polskie Towarzystwo Tradycyjnej Medycyny Chińskiej ul.
                Warszawska 1; 31-155 Kraków (w siedzibie Centrum Medycyny
                Chińskiej) REGON: 121055094; NIP: 676-240-83-17 ; KRS:
                0000331282 dalej „Administrator”.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">2.</strong>{" "}
                Użytkownikiem Serwisu jest każda osoba fizyczna odwiedzająca
                stronę internetową www.tcmkongres.pl lub korzystająca z jednej
                lub kilku usług i/lub produktów oferowanych przez
                Administratora.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">3.</strong>{" "}
                Serwis internetowy pozyskuje dane osobowe Użytkowników
                wprowadzane w formularzach na podstawie zgody wyrażonej przez
                nich samych
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">4.</strong>{" "}
                Przez dane osobowe rozumie się wszelkie informacje dotyczące
                zidentyfikowanej lub możliwej do zidentyfikowania żyjącej osoby
                fizycznej, której tożsamość można określić bezpośrednio lub
                pośrednio, w szczególności przez powołanie się na numer
                identyfikacyjny albo jeden lub kilka specyficznych czynników
                określających jej cechy fizyczne, fizjologiczne, umysłowe,
                ekonomiczne, kulturowe lub społeczne. Przez dane osobowe rozumie
                się numer IP urządzenia, dane o lokalizacji, identyfikator
                internetowy oraz informacje gromadzone za pośrednictwem plików
                cookies lub podobnej technologii.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">5.</strong> Dane
                osobowe Użytkowników są przetwarzane zgodnie z Rozporządzeniem
                Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia
                2016 r. w sprawie ochrony osób fizycznych w związku z
                przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
                takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">6.</strong>{" "}
                Administrator dokłada szczególnej staranności w celu ochrony
                interesów osób, których dane dotyczą, a w szczególności
                zapewnia, że zbierane przez niego dane są: a. przetwarzane
                zgodnie z prawem, b. zbierane dla oznaczonych, zgodnych z prawem
                celów i niepoddawane dalszemu przetwarzaniu niezgodnemu z tymi
                celami, c. merytorycznie poprawne i adekwatne w stosunku do
                celów, w jakich są przetwarzane oraz przechowywane w postaci
                umożliwiającej identyfikację osób, których dotyczą, nie dłużej
                niż jest to niezbędne do osiągnięcia celu przetwarzania.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">II.</strong> CEL
                I ZAKRES ZBIERANIA DANYCH
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">1.</strong>{" "}
                Dane, które podaje lub pozostawia Użytkownik podczas zapisywania
                się na świadczone przez Administratora usługi i produkty oraz w
                trakcie korzystania z usług i produktów, wykorzystywane są do:
                a. udostępnienia możliwości korzystania z usług i produktów
                Administratora; b. rejestracji udziału w Kongresie TMC , dalej
                „Kongres”, założenia indywidualnego konta w systemie
                rejestracji, zorganizowania Kongresu i jego przeprowadzenia,
                komunikacji i przekazu informacji dot. udziału w Kongresie; c.
                wykonania obowiązków ciążących na Administratorze w związku z
                organizacją Kongresu, wynikających z obowiązujących przepisów
                prawa; d. celów informacyjnych oraz innych czynności związanych
                z aktywnością Administratora na stronie internetowej
                www.tcm-kongres.pl; e. realizacji umów i procesów handlowych; f.
                celów marketingowych (przesyłanie informacji handlowych drogą
                elektroniczną oraz działania telemarketingowe); g. oceny
                organizacji Kongresu oraz badania satysfakcji z uczestnictwa w
                Kongresie; h. kontaktu, wymiany informacji i danych.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">2.</strong>{" "}
                Administrator przetwarza następujące dane osobowe Użytkowników:
                a. imię, nazwisko, b. adres e-mail, c. nazwa firmy / instytucji
                / organizacji / uczelni, d. numer telefonu, e. miasto, kod
                pocztowy, województwo, ulica, kraj,f. IP.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">3.</strong>{" "}
                Podanie danych osobowych, o których mowa w pkt 2 jest
                dobrowolne, ale niezbędne do świadczenia przez Usługodawcę usług
                drogą elektroniczną za pomocą Serwisu oraz do uczestnictwa w
                Kongresie.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">4.</strong> Dane
                osobowe mogą być ujawniane: a) podmiotom upoważnionym na
                podstawie powszechnie obowiązujących przepisów prawa, w
                szczególności instytucjom uprawnionym do kontroli działalności
                Administratora lub do uzyskania danych osobowych na podstawie
                przepisów prawa; b) Podmiotom, z usług których Administrator
                korzysta w związku z organizacją Kongresu, w tym podmiotom
                obsługującym rejestrację uczestników oraz obsługującym Kongres w
                obszarze PR; c) Partnerom biznesowym w celu dokonywania akcji
                marketingu bezpośredniego oraz świadczenia usług drogą
                elektroniczną d) podmiotom świadczącym na rzecz Administratora
                usługi w zakresie outsourcingu procesów księgowych, audytorom,
                doradcom prawnym lub podatkowym oraz dostawcom usług IT.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">5.</strong> Dane
                osobowe nie będą przekazywane do państwa trzeciego lub
                organizacji międzynarodowej.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">6.</strong> Dane
                osobowe nie będą poddawane zautomatyzowanemu przetwarzaniu i
                profilowaniu.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">III.</strong>{" "}
                PODSTAWA PRZETWARZANIA DANYCH I OKRES
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">1.</strong>{" "}
                Korzystanie z Serwisu internetowego, rejestrowanie się na
                świadczone przez Administratora usługi i produkty oraz
                korzystanie z nich, z czym wiąże się konieczność podania danych
                osobowych, jest całkowicie dobrowolne. Osoba, której dane
                dotyczą, samodzielnie decyduje, czy chce rozpocząć korzystanie z
                usług świadczonych drogą elektroniczną przez Administratora.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">2.</strong>{" "}
                Zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE)
                2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
                fizycznych w związku z przetwarzaniem danych osobowych i w
                sprawie swobodnego przepływu takich danych oraz uchylenia
                dyrektywy 95/46/WE (RODO) dane osobowe przetwarzane będą na
                podstawie art. 6 ust 1 lit. a, b, c, f RODO, czyli : osoba,
                której dane dotyczą, wyrazi na to zgodę, jest niezbędne do
                wykonania umowy, której stroną jest osoba, której dane dotyczą,
                lub do podjęcia działań na żądanie osoby, której dane dotyczą,
                przed zawarciem umowy oraz jest niezbędne do wypełnienia
                obowiązku prawnego ciążącego na administratorze oraz celów
                wynikających z prawnie uzasadnionych interesów realizowanych
                przez administratora.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">3.</strong>{" "}
                Przetwarzanie danych osobowych przez Administratora odbywa się
                zawsze w ramach podstaw dopuszczalności ich przetwarzania
                wymienionych w pkt 2.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">4.</strong> Dane
                osobowe będą przetwarzane przez okres niezbędny do realizacji
                celów przetwarzania. W zakresie realizacji umowy, przez okres do
                jej zakończenia, po tym czasie dane będą przetwarzane przez
                okres wymagany przez prawo lub przez okres niezbędny do
                dochodzenia roszczeń. W zakresie realizacji uzasadnionych
                interesów ADO, dane będą przetwarzane do chwili pozytywnego
                rozpatrzenia wniesionego sprzeciwu wobec przetwarzania danych.
              </span>
            </li>

            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">5.</strong>{" "}
                Administrator dopełnia należytej staranności w celu
                odpowiedniego zabezpieczenia przekazanych danych osobowych, a w
                szczególności przed ich udostępnieniem osobom nieupoważnionym.
              </span>
            </li>

            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">IV.</strong>{" "}
                PRAWO KONTROLI, DOSTĘPU DO TREŚCI SWOICH DANYCH ORAZ ICH
                POPRAWIANIA
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">1.</strong>{" "}
                Użytkownik ma prawo dostępu do treści swoich danych osobowych
                oraz ich poprawiania.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">2.</strong>{" "}
                Każdej osobie przysługuje prawo do kontroli przetwarzania
                danych, które jej dotyczą, zawartych w zbiorze danych
                Administratora, a zwłaszcza prawo do żądania uzupełnienia,
                uaktualnienia, sprostowania danych osobowych, czasowego lub
                stałego wstrzymania ich przetwarzania lub ich usunięcia, jeżeli
                są one niekompletne, nieaktualne, nieprawdziwe lub zostały
                zebrane z naruszeniem prawa albo są już zbędne do realizacji
                celu, dla którego zostały zebrane.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">3.</strong>{" "}
                Każdej osobie przysługuje prawo sprzeciwu wobec przetwarzania
                danych w celach marketingowych lub innych, bez konieczności
                uzasadniania takiego sprzeciwu.
              </span>
            </li>

            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">4.</strong> W
                celu realizacji uprawnień, o których mowa w pkt. 1 i 2 można
                korzystać poprzez przesłanie stosownej wiadomości e-mail na
                adres : biuro@pttmc.org; lub korespondencyjnie na adres wskazany
                w I pkt.1.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">5.</strong>{" "}
                Wnioski Użytkowników dotyczące realizacji wskazanych powyżej
                uprawnień powinny w miarę możliwości precyzyjnie określać czego
                dotyczy żądanie tj. z jakiego uprawnienia i w jakim zakresie
                Użytkownik chce skorzystać.
              </span>
            </li>

            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">6.</strong>{" "}
                Użytkownik ma prawo do wniesienia skargi do organu nadzorczego.
                W Polsce organem takim jest Prezes Urzędu Ochrony Danych
                Osobowych. Pytania dotyczące polityki prywatności należy
                kierować na adres: biuro@pttmc.org. Polityka prywatności jest na
                bieżąco weryfikowana i w razie potrzeby aktualizowana.
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
            Return to the main page
          </Link>
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Privacy Policy defines the rules for processing and protecting
          personal data provided by Users of the TCM KONGRES KRAKÓW 2023
          website, hereinafter referred to as the &quot;Service&quot; or
          &quot;Website.&quot;
        </h1>

        <div className="mt-10">
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">I. </strong>
                GENERAL PROVISIONS
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">1.</strong> The
                Administrator of personal data contained in the Service is the
                Polish Society of Traditional Chinese Medicine, ul. Warszawska
                1; 31-155 Kraków (at the Center for Chinese Medicine) REGON:
                121055094; NIP: 676-240-83-17; KRS: 0000331282, hereinafter
                referred to as the &quot;Administrator.&quot;
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">2.</strong> The
                User of the Service is any individual who visits the website
                www.tcmkongres.pl or uses one or more services and/or products
                offered by the Administrator.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">3.</strong> The
                website collects personal data entered by Users in forms based
                on their consent.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">4.</strong>{" "}
                Personal data refers to any information relating to an
                identified or identifiable natural person, whose identity can be
                directly or indirectly determined, in particular by reference to
                an identification number or one or more specific factors
                determining their physical, physiological, mental, economic,
                cultural, or social identity. Personal data includes the IP
                address of the device, location data, internet identifier, and
                information collected through cookies or similar technology.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">5.</strong>{" "}
                User&apos;s personal data is processed in accordance with the
                Regulation (EU) 2016/679 of the European Parliament and of the
                Council of 27 April 2016 on the protection of natural persons
                with regard to the processing of personal data and on the free
                movement of such data, and repealing Directive 95/46/EC (GDPR).
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">6.</strong> The
                Administrator takes special care to protect the interests of the
                persons whose data is processed, in particular by ensuring that
                the data collected by them are: a. processed lawfully, b.
                collected for specified, lawful purposes and not further
                processed in a manner incompatible with those purposes, c.
                factually correct and adequate in relation to the purposes for
                which they are processed and stored in a form that allows the
                identification of the individuals they concern, for no longer
                than necessary to achieve the purpose of processing.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">II.</strong>{" "}
                PURPOSE AND SCOPE OF DATA COLLECTION
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">1.</strong> The
                data provided or left by the User during the registration for
                services and products provided by the Administrator and during
                the use of services and products are used for: a. providing
                access to the services and products of the Administrator; b.
                registering for participation in the TMC Congress, hereinafter
                referred to as the &quot;Congress,&quot; establishing an
                individual account in the registration system, organizing the
                Congress and conducting it, communicating and transmitting
                information regarding participation in the Congress; c.
                fulfilling the obligations of the Administrator related to the
                organization of the Congress, arising from applicable laws; d.
                informational purposes and other activities related to the
                Administrator&apos;s activities on the website
                www.tcm-kongres.pl; e. performing contracts and commercial
                processes; f. marketing purposes (sending commercial information
                electronically and telemarketing activities); g. evaluating the
                organization of the Congress and conducting satisfaction surveys
                regarding participation in the Congress; h. contact,
                information, and data exchange.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">2.</strong> The
                Administrator processes the following personal data of Users: a.
                first name, last name, b. email address, c. company name /
                institution / organization / university, d. phone number, e.
                city, postal code, voivodeship, street, country, f. IP address.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">3.</strong>{" "}
                Providing the personal data mentioned in point 2 is voluntary
                but necessary to receive electronic services from the Service
                Provider via the Service and to participate in the Congress.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">4.</strong>{" "}
                Personal data may be disclosed to: a) entities authorized under
                generally applicable laws, in particular institutions authorized
                to control the activities of the Administrator or to obtain
                personal data based on legal provisions; b) Entities providing
                services to the Administrator in connection with the
                organization of the Congress, including entities handling
                participant registration and providing PR support for the
                Congress; c) Business partners for direct marketing activities
                and provision of electronic services; d) entities providing
                accounting process outsourcing services, auditors, legal or tax
                advisors, and IT service providers acting on behalf of the
                Administrator.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">5.</strong>{" "}
                Personal data will not be transferred to a third country or
                international organization.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">6.</strong>{" "}
                Personal data will not be subject to automated processing and
                profiling.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">III.</strong>{" "}
                BASIS FOR DATA PROCESSING AND RETENTION PERIOD
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">1.</strong> The
                use of the website, registration for services and products
                provided by the Administrator, and their use, which involves the
                necessity of providing personal data, is completely voluntary.
                The individual whose data is processed independently decides
                whether they want to start using the services provided by the
                Administrator or participate in the Congress. Failure to provide
                personal data will prevent the individual from using the
                services provided by the Administrator or participating in the
                Congress.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">2.</strong>{" "}
                Personal data is processed on the basis of the consent of the
                User, as well as on the basis of the necessity of processing for
                the performance of a contract or taking action at the request of
                the data subject before the conclusion of the contract (Article
                6(1)(a) and (b) of the GDPR).
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">3.</strong> The
                retention period for personal data is determined by the purposes
                for which the data is processed. Personal data will be stored
                for a period necessary to achieve the purposes for which they
                were collected and processed, and after that period, they may be
                stored only for the period and to the extent required by
                applicable laws, in particular those that oblige the
                Administrator to store data for tax and accounting purposes.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
