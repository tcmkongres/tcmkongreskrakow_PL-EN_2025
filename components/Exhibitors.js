import { useTranslation } from "next-i18next";
import ExhibitorsSlider from "@/components/ExhibitorsSlider";

export default function Exhibitors() {
  const { t } = useTranslation("common");

  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("tytul_wystawcy")}
          </h2>

          {/*<p className="mx-auto mt-6 text-lg leading-8 text-gray-600">*/}
          {/*  {t("opis_Sponsors")}*/}
          {/*</p>*/}

          <div className="mt-16">
            <div className="h-[75px] sm:h-[150px]">
              <ExhibitorsSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
