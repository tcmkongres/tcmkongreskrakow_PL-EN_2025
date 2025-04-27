import { useTranslation } from "next-i18next";

export default function Contact() {
  const { t } = useTranslation("common");
  return (
    <div className="bg-white py-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("tytul_Contact")}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t("opis_Contact")} 🍀
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
              {t("adres_Contact")}
            </h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <p>{t("ulica1_Contact")}</p>
              <p> {t("ulica2_Contact")}</p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
              {t("telefon_Contact")}
            </h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <p>+ 48 785 807 081</p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
              {t("email_Contact")}
            </h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <a
                href="mailto:tcmkongres.kontakt@gmail.com"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                tcmkongres.kontakt@gmail.com
              </a>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}
