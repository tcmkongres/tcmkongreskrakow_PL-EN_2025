import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HomePage from "@/components/HomePage";

export default function Home() {
  return <HomePage />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "header",
        "about",
        "timeline",
      ])),
      // Will be passed to the page component as props
    },
  };
}
