import { useTranslation } from "next-i18next";
import Image from "next/image";
import logo1 from "@/public/images/exhibitors/acuart_yb_logo_02.jpg";
import logo2 from "@/public/images/exhibitors/logo-wystawcy.png";
import logo3 from "@/public/images/exhibitors/logo cmc.jpg";
import logo4 from "@/public/images/exhibitors/logoTOMO.jpg";
import logo5 from "@/public/images/exhibitors/logo OP szkola naturalnego NEW-09.jpg";
import logo6 from "@/public/images/exhibitors/Delewin logotyp.png";
import logo7 from "@/public/images/exhibitors/TCM BOHEMIA_PNG.png";
import logo8 from "@/public/images/exhibitors/TCMsklep-logo-czerwone-800x133px.png";

export default function Exhibitors() {
  const { t } = useTranslation("common");
  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("tytul_wystawcy")}
          </h2>
          <p className="mx-auto mt-6 text-lg leading-8 text-gray-600">
            {/*{t("opis_Sponsors")}*/}
          </p>
          <div className="container mx-auto grid grid-cols-1 gap-4">
            <div className="h-[300px] flex items-center justify-center">
              <Image
                className="object-contain h-full"
                src={logo1}
                alt="Logo 1"
              />
            </div>
            <div className="h-[300px] flex items-center justify-center">
              <Image
                className="object-contain h-full"
                src={logo2}
                alt="Logo 2"
              />
            </div>
            <div className="h-[300px] flex items-center justify-center">
              <Image
                className="object-contain h-full"
                src={logo3}
                alt="Logo 3"
              />
            </div>
            <div className="h-[300px] flex items-center justify-center">
              <Image
                className="object-contain h-full"
                src={logo4}
                alt="Logo 4"
              />
            </div>
            <div className="h-[300px] flex items-center justify-center">
              <Image
                className="object-contain h-full"
                src={logo5}
                alt="Logo 5"
              />
            </div>
            <div className="h-[300px] flex items-center justify-center">
              <Image
                className="object-contain h-full"
                src={logo6}
                alt="Logo 6"
              />
            </div>
            <div className="h-[300px] flex items-center justify-center">
              <Image
                className="object-contain h-full"
                src={logo7}
                alt="Logo 7"
              />
            </div>
            <div className="h-[300px] flex items-center justify-center">
              <Image
                className="object-contain h-full"
                src={logo8}
                alt="Logo 8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
