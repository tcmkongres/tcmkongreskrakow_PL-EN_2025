import { useRouter } from "next/router";
import { people } from "@/lib/speakers";
import SpeakerProfile from "@/components/sections/SpeakerProfile";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function SpeakerPage() {
  const router = useRouter();
  const { slug } = router.query;

  const speaker = people.find((p) => p.url.replace("/", "") === slug);

  if (!speaker) {
    return <main>Speaker not found</main>;
  }

  return <SpeakerProfile speaker={speaker} />;
}

export async function getStaticPaths({ locales }) {
  const paths = people.flatMap((speaker) =>
    locales.map((locale) => ({
      params: { slug: speaker.url.replace("/", "") },
      locale,
    })),
  );

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", params.slug])),
    },
  };
}
