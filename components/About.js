import Image from "next/image";
import kongres from "@/public/images/kongres.jpg";
import { useTranslation } from "next-i18next";
export default function About() {
  const { t } = useTranslation("about");
  return (
    <div className="relative bg-white">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t("tytul1")}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">{t("opis1")}</p>

            <p className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-xl">
              {t("tytul2")}
            </p>
            <p className="mt-6 text-base leading-8 text-gray-600">
              {t("opis2")}
            </p>
            <p className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-xl">
              {t("tytul3")}
            </p>
            <p className="mt-6 text-base leading-8 text-gray-600">
              {t("opis3")}
            </p>
          </div>
        </div>
      </div>
      <Image
        className="h-full w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
        src={kongres}
        alt=""
      />
    </div>
  );
}
