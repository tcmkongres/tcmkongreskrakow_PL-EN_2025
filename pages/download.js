"use client";

import Script from "next/script";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

const Downloa = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Script
        id="easycart-script-1"
        src="https://app.easycart.pl/login.js?type=block&id=prod_NuFmJjdJesuRQe"
      />
      <Script
        id="easycart-script-2"
        dangerouslySetInnerHTML={{
          __html: `
            !window._EC_HASH_6c7efbeece208f974613abda6d160721 && (location.href = "https://app.easycart.pl/r/prod_SD2mldVQXiaiXV");
          `,
        }}
      />
      <noscript>
        <meta
          httpEquiv="refresh"
          content="0;url=https://app.easycart.pl/r/prod_SD2mldVQXiaiXV"
        />
      </noscript>

      <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl min-h-full text-base leading-7 text-gray-700">
          <div data-free="true" className="px-4 sm:px-0">
            <p className="text-base font-semibold leading-7 mb-4 text-indigo-600">
              <Link
                href="/"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {t("back")}
              </Link>
            </p>
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              {t("tytul_Koszyk2")}
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              {t("opis_Download")}
            </p>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  {t("opis_Download5")}
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {/*{t("opis_Download2")}*/}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  {t("opis_Download3")}
                </dt>
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    className="divide-y divide-gray-100 rounded-md border border-gray-200"
                  >
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">
                            TCM_Kongres_Krakow_PL.pdf vol.2019
                          </span>
                          <span className="flex-shrink-0 text-gray-400">
                            {/*10.6 mb*/}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href="https://tcm-kongres.pl/download/TCM_Kongres_Krakow_PL.pdf"
                          download="TCM_Kongres_Krakow_PL.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          {t("opis_Download4")}
                        </a>
                      </div>
                    </li>
                    {/*asd*/}
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">
                            aku wspierająca invitro kongres.pptx
                          </span>
                          <span className="flex-shrink-0 text-gray-400">
                            {/*10.6 mb*/}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href="files/aku wspierająca invitro kongres.pptx"
                          download="TCM_Kongres_Krakow_PL.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          {t("opis_Download4")}
                        </a>
                      </div>
                    </li>
                    {/*asd*/}
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">
                            Materiały ivf Kasia Pokrywka.pdf
                          </span>
                          <span className="flex-shrink-0 text-gray-400">
                            {/*10.6 mb*/}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href="files/Materiały ivf Kasia Pokrywka.pdf"
                          download="TCM_Kongres_Krakow_PL.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          {t("opis_Download4")}
                        </a>
                      </div>
                    </li>
                    {/*asd*/}
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">
                            Plan 2023_druk.pdf
                          </span>
                          <span className="flex-shrink-0 text-gray-400">
                            {/*10.6 mb*/}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href="files/Plan 2023_druk.pdf"
                          download="TCM_Kongres_Krakow_PL.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          {t("opis_Download4")}
                        </a>
                      </div>
                    </li>
                    {/*asd*/}
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">
                            PowerPoint Presentation.pdf
                          </span>
                          <span className="flex-shrink-0 text-gray-400">
                            {/*10.6 mb*/}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href="files/PowerPoint Presentation.pdf"
                          download="TCM_Kongres_Krakow_PL.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          {t("opis_Download4")}
                        </a>
                      </div>
                    </li>
                    {/*asd*/}
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">
                            TCM_Kongres_Krakow_PL.pdf vol.2023
                          </span>
                          <span className="flex-shrink-0 text-gray-400">
                            {/*10.6 mb*/}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href="files/TCM Kongres Krakow 2023.pdf"
                          download="TCM_Kongres_Krakow_PL.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          {t("opis_Download4")}
                        </a>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Downloa;
