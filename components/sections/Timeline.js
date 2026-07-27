import { useTranslation } from "next-i18next";

export default function Timeline() {
  const { t } = useTranslation("timeline");
  return (
    <section className="bg-white pb-24 sm:pb-32">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {t("opis1")}
        </h2>
      </div>
      <div className="mx-auto max-w-7xl mt-16 px-6 lg:px-8 sm:mt-20">
        <ol className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <li>
            <time
              dateTime="2016-10"
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
              <span
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              ></span>
            </time>
            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
              {t("tcm1_tytul")}
              {" 2016"}
            </h3>
            <p className="mt-1 text-base leading-7 text-gray-600">
              {t("tcm1_opis")}
            </p>
          </li>
          <li>
            <time
              dateTime="2017-10"
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
              <span
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              ></span>
            </time>
            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
              {t("tcm1_tytul")}
              {" 2017"}
            </h3>
            <p className="mt-1 text-base leading-7 text-gray-600">
              {t("tcm2_opis")}
            </p>
          </li>
          <li>
            <time
              dateTime="2018-10"
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
              <span
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              ></span>
            </time>
            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
              {t("tcm1_tytul")}
              {" 2018"}
            </h3>
            <p className="mt-1 text-base leading-7 text-gray-600">
              {t("tcm3_opis")}
            </p>
          </li>
          <li>
            <time
              dateTime="2019-10"
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
              <span
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              ></span>
            </time>
            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
              {t("tcm1_tytul")}
              {" 2019"}
            </h3>
            <p className="mt-1 text-base leading-7 text-gray-600">
              {t("tcm4_opis")}
            </p>
          </li>
          <li>
            <time
              dateTime="2023-10"
              className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
            >
              <svg
                viewBox="0 0 4 4"
                className="mr-4 h-1 w-1 flex-none"
                aria-hidden="true"
              >
                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
              </svg>
              10.2023
              <span
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              ></span>
            </time>
            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
              {t("tcm1_tytul")}
              {" 2023"}
            </h3>
            <p className="mt-1 text-base leading-7 text-gray-600">
              {t("tcm5_opis")}
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
