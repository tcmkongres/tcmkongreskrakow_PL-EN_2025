// Lekki tracker zdarzen. Wysyla dane do /api/track.
// Prywatnosc: id sesji jest losowe i trzymane w sessionStorage (znika po zamknieciu karty),
// nie zapisujemy IP ani danych osobowych -> brak potrzeby cookie bannera.

const SESSION_KEY = "tcm_sid";

function getSessionId() {
  if (typeof window === "undefined") return null;
  try {
    let id = window.sessionStorage.getItem(SESSION_KEY);
    if (!id) {
      id = crypto.randomUUID();
      window.sessionStorage.setItem(SESSION_KEY, id);
    }
    return id;
  } catch {
    return null; // sessionStorage zablokowany (tryb prywatny) — trudno, liczymy bez id
  }
}

// Tylko domena zrodla ruchu, bez query stringow.
function getReferrerHost() {
  if (typeof document === "undefined" || !document.referrer) return null;
  try {
    const url = new URL(document.referrer);
    if (url.host === window.location.host) return null; // ruch wewnetrzny pomijamy
    return url.host;
  } catch {
    return null;
  }
}

export function track(type, extra = {}) {
  if (typeof window === "undefined") return;

  const payload = JSON.stringify({
    type,
    path: window.location.pathname,
    locale: document.documentElement.lang || null,
    referrer: getReferrerHost(),
    session_id: getSessionId(),
    ...extra,
  });

  // sendBeacon przechodzi nawet gdy strona sie zamyka (klik w link wychodzacy).
  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        "/api/track",
        new Blob([payload], { type: "application/json" }),
      );
      return;
    }
  } catch {
    // fallthrough do fetch
  }

  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
    keepalive: true,
  }).catch(() => {});
}
