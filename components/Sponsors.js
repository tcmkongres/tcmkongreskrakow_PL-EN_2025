import { useTranslation } from "next-i18next";
import Image from "next/image";
import Baner from "@/public/images/BannerPL_kongres.jpg";

export default function Sponsors() {
  const { t } = useTranslation("common");
  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("tytul_Sponsors")}
          </h2>
          <p className="mx-auto mt-6 text-lg leading-8 text-gray-600">
            {/*{t("opis_Sponsors")}*/}
          </p>
          <Image className="" src={Baner} alt="" />
        </div>
      </div>
    </div>
  );
}
