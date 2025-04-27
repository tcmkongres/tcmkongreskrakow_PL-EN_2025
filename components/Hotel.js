import hotel1 from "@/public/images/hotel1.png";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Hotel() {
  const { t } = useTranslation("common");
  return (
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {t("tytul_Hotel")}
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                {t("adres_Hotel")}
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                {t("opis1_Hotel")}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                    href="https://www.booking.com/Share-V2eIwP"
                    className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {t("rezerwuj_Hotel")} <span aria-hidden="true">&rarr;</span>
                </a>
                <a
                    href="https://www.qubushotel.com/pl/hotel-krakow/"
                    className="rounded-md bg-gray-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                >
                  {t("link_Hotel")} <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Image
                  src={hotel1}
                  alt=""
                  className="w-full max-w-md rounded-2xl bg-gray-50 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
  );
}
