import { useTranslation } from "next-i18next";

export default function Timeline() {
  const { t } = useTranslation("timeline");
  return (
    <div className="bg-white pb-24 sm:pb-32">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {t("opis1")}
        </h2>
      </div>
      <div className="mx-auto max-w-7xl mt-16 px-6 lg:px-8 sm:mt-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div>
            <time
              dateTime="14-16.10.2016"
              className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
            >
              <svg
                viewBox="0 0 4 4"
                className="mr-4 h-1 w-1 flex-none"
                aria-hidden="true"
              >
                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
              </svg>
              10.2016
              <div
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              ></div>
            </time>
            <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
              {t("tcm1_tytul")}
              {" 2016"}
            </p>
            <p className="mt-1 text-base leading-7 text-gray-600">
              {t("tcm1_opis")}
            </p>

          </div>
          <div>
            <time
              dateTime="13-15.10.2017"
              className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
            >
              <svg
                viewBox="0 0 4 4"
                className="mr-4 h-1 w-1 flex-none"
                aria-hidden="true"
              >
                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
              </svg>
              10.2017
              <div
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              ></div>
            </time>
            <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
              {t("tcm1_tytul")}
              {" 2017"}
            </p>
            <p className="mt-1 text-base leading-7 text-gray-600">
              {t("tcm2_opis")}
            </p>

          </div>
          <div>
            <time
              dateTime="12-14.10.2018"
              className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
            >
              <svg
                viewBox="0 0 4 4"
                className="mr-4 h-1 w-1 flex-none"
                aria-hidden="true"
              >
                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
              </svg>
              10.2018
              <div
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              ></div>
            </time>
            <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
              {t("tcm1_tytul")}
              {" 2018"}
            </p>
            <p className="mt-1 text-base leading-7 text-gray-600">
              {t("tcm3_opis")}
            </p>

          </div>
          <div>
            <time
              dateTime="11-13.10.2019"
              className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
            >
              <svg
                viewBox="0 0 4 4"
                className="mr-4 h-1 w-1 flex-none"
                aria-hidden="true"
              >
                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
              </svg>
              10.2019
              <div
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              ></div>
            </time>
            <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
              {t("tcm1_tytul")}
              {" 2019"}
            </p>
            <p className="mt-1 text-base leading-7 text-gray-600">
              {t("tcm4_opis")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
