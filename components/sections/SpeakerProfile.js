import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

// Widok profilu prelegenta. Treść pochodzi z namespace i18n o nazwie slug:
// opis1 = imię/tytuł (nagłówek), opis2..opisN = kolejne akapity biografii.
export default function SpeakerProfile({ speaker }) {
  const slug = speaker.url.replace("/", "");
  const { t, i18n } = useTranslation(slug);
  const { t: tcommon } = useTranslation("common");

  // Zbieramy akapity opis2, opis3, ... aż do pierwszego brakującego klucza
  const paragraphs = [];
  for (let i = 2; i18n.exists(`opis${i}`, { ns: slug }); i++) {
    paragraphs.push(t(`opis${i}`));
  }

  return (
    <main className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative rounded-3xl sm:px-12 lg:max-w-lg lg:px-8 xl:px-10">
              <Image
                className="rounded-3xl w-full h-auto object-cover object-top"
                src={speaker.imageUrl}
                alt={speaker.name}
                priority
              />
            </div>
          </div>

          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 mb-6 text-indigo-600">
                <Link
                  href="/"
                  className="rounded-md bg-gray-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {tcommon("back")}
                </Link>
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {t("opis1")}
              </h1>
              <div className="max-w-xl">
                {paragraphs.map((text, index) => (
                  <p key={index} className="mt-6">
                    {text}
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-10 border-t border-gray-900/10 pt-10" />
            <div className="mt-10 flex">
              <Link
                href="/details"
                className="text-base font-semibold leading-7 text-indigo-600"
              >
                {tcommon("link_wyklady")} <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
