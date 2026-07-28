import Image from "next/image";
import { people } from "@/lib/speakers";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { track } from "@/lib/track";

people.sort((a, b) =>
  a.name.localeCompare(b.name, "pl", { sensitivity: "base" }),
);

export default function Speakers() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("tytul_Speakers1")}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t("tytul_Speakers2")}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {people.map((person) => {
            const slug = person.url.replace("/", "");
            const localizedUrl =
              locale === "en"
                ? `/en/speaker${person.url}`
                : `/speaker${person.url}`;

            return (
              <li key={person.name}>
                <a
                  href={localizedUrl}
                  onClick={() =>
                    track("speaker_click", { speaker_slug: slug })
                  }
                >
                  <Image
                    className="aspect-[4/5] w-full rounded-2xl object-cover"
                    src={person.imageUrl}
                    alt={person.name}
                  />
                  <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-center text-gray-900">
                    {person.name}
                  </h3>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
