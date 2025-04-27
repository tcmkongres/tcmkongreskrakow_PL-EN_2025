import { useTranslation } from "next-i18next";

export default function Organizers() {
  const { t } = useTranslation("common");
  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("tytul_Organizers")}
          </h2>
          <p className="mx-auto mt-6 text-lg leading-8 text-gray-600">
            {t("opis_Organizers")}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="http://www.pttmc.org"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {t("link_Organizers")} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
