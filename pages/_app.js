import "@/styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";
import { SessionProvider } from "next-auth/react";
import { track } from "@/lib/track";

// Statystyk nie zbieramy na stronach panelu (zeby wizyty admina nie zaklamywaly danych).
function isAdminPath(path) {
  return path.startsWith("/admin") || path.startsWith("/en/admin");
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (isAdminPath(window.location.pathname)) return;
    track("pageview");

    const onRouteChange = (url) => {
      if (isAdminPath(url)) return;
      track("pageview");
    };
    router.events.on("routeChangeComplete", onRouteChange);
    return () => router.events.off("routeChangeComplete", onRouteChange);
  }, [router.events]);

  // Panel admina potrzebuje kontekstu sesji NextAuth; publiczne strony nie.
  if (isAdminPath(router.pathname)) {
    return (
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    );
  }

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
