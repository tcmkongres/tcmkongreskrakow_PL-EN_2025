import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const navigation = {
  main: [
    {
      name: "Regulamin TCM Kongres",
      nameEN: "TCM Congress Regulations",
      href: "/regulations",
    },
    {
      name: "Polityka prywatnosci",
      nameEN: "Privacy Policy",
      href: "/privacy",
    },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/KongresTCM2023?locale=pl_PL",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UC8pvvBSpJdaryjDRff8VoLw",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  const router = useRouter();
  const { t } = useTranslation("common");

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 sm:columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6 text-center">
              <a
                href={item.href}
                className="text-2xl leading-6 text-gray-600 hover:text-gray-900"
              >
                {router.locale === "pl" ? item.name : item.nameEN}
              </a>
            </div>
          ))}
          <div className="pb-6 text-center">
            <a
              className="text-2xl leading-6 text-gray-600 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
              id="link"
              href="/download"
            >
              {t("tytul_Koszyk2")}
            </a>
          </div>
        </nav>

        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-8 w-8" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500"></p>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2023-{currentYear}. All rights reserved. Made with ❤️ by{" "}
          <a
            href="https://www.linkedin.com/in/aleksanderjedynak/"
            target="_blank"
            rel="noreferrer"
          >
            AleksanderOne
          </a>
        </p>
      </div>
    </footer>
  );
}
