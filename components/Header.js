import logo from "@/public/images/logo.png";
import hero from "@/public/images/krakow-miasto.jpg";
import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import { buyTicket, buyTicketEN } from "@/components/utils/helpers";

export default function Header() {
  const { t } = useTranslation("header");
  const router = useRouter();

  const ticketUrl = router.locale === "pl" ? buyTicket : buyTicketEN;

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl">
          <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
            <nav
              className="flex items-center justify-between lg:justify-start"
              aria-label="Global"
            >
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">{t("tytul")}</span>
                <Image
                  alt="Polskie Towarzystwo Tradycyjnej Medycyny Chińskiej"
                  className="h-26 w-auto"
                  src={logo}
                />
              </Link>
              <LanguageSwitcher></LanguageSwitcher>
            </nav>
          </div>
        </div>
      </header>
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-40 lg:pr-0">
              <div className="mx-auto  lg:mx-0 ">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  {t("tytul")}
                </h1>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {t("data")}
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {t("opis")}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href={ticketUrl}
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {t("bilet")} <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src={hero}
            alt="Kraków"
          />
        </div>
      </div>
    </div>
  );
}
