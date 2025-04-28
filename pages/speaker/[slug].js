import { useRouter } from "next/router";
import { people } from "@/components/utils/SpeakersData";
import Image from "next/image";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function SpeakerPage() {
  const router = useRouter();
  const { slug } = router.query;

  const { t } = useTranslation(slug);
  const { t: tcommon } = useTranslation("common");

  const speaker = people.find((p) => p.url.replace("/", "") === slug);

  if (!speaker) {
    return <div>Speaker not found</div>;
  }

  return (
    <div className="py-24 sm:py-32">
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
                <p className="mt-6">{t("opis2")}</p>
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4" />
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
    </div>
  );
}

export async function getStaticPaths({ locales }) {
  const paths = people.flatMap((speaker) =>
    locales.map((locale) => ({
      params: { slug: speaker.url.replace("/", "") },
      locale,
    })),
  );

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", params.slug])),
    },
  };
}
