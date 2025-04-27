import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const LanguageSwitcher = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const handleLanguageChange = (language) => {
    const currentPath = router.asPath;
    const currentLocale = router.locale;

    const newPath = currentPath.replace(`/${currentLocale}`, `/${language}`);

    router.push(newPath, newPath, { locale: language });
  };

  return (
    <div className="flex flex-1 justify-end">
      {router.locale === "pl" ? (
        <button
          className="text font-semibold leading-6 text-gray-900"
          onClick={() => handleLanguageChange("en")}
        >
          {t("English")}
          <span aria-hidden="true">&rarr;</span>
        </button>
      ) : (
        <button
          className="text font-semibold leading-6 text-gray-900"
          onClick={() => handleLanguageChange("pl")}
        >
          {t("Polski")}
          <span aria-hidden="true">&rarr;</span>
        </button>
      )}
    </div>
  );
};

export default LanguageSwitcher;
