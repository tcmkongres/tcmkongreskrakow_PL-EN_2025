import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const faqsPL = [
  {
    id: 1,
    question:
      "Gdzie odbędzie się wydarzenie związane z medycyną chińską w Krakowie?",
    answer:
      "Wydarzenie odbędzie się w Hotelu Galaxy ul. Gęsia 22A 31-535 Krakow",
  },
  {
    id: 2,
    question: "Kiedy odbędzie się to wydarzenie?",
    answer:
      "Wydarzenie odbędzie się w dniach 13-15 października  2023 r. Szczegółowy harmonogram wydarzenia znajdziesz na naszej stronie internetowej.",
  },
  {
    id: 3,
    question: "Jak mogę się zarejestrować na wydarzenie?",
    answer:
      " Aby się zarejestrować, należy kupić bilet dostępny na stronie internetowej wydarzenia. Po zakupie biletu, otrzymasz potwierdzenie rejestracji na podany adres e-mail.",
  },
  {
    id: 4,
    question: "Czy na miejscu będzie możliwość zakupu biletów?",
    answer:
      "O ile wydarzenie nie zostanie wcześniej wyprzedane, bilety będzie można nabyć na miejscu w dniu rozpoczęcia wydarzenia. Zalecamy jednak wcześniejszy zakup biletu, aby zapewnić sobie miejsce.",
  },
  {
    id: 5,
    question: "Czy na wydarzeniu będą tłumaczenia na język polski?",
    answer:
      "Tak, podczas wydarzenia wszystkie anglojęzyczne wykłady będą tłumaczone na język polski",
  },
  // More questions...
];

const faqsEN = [
  {
    id: 1,
    question: "Where will the Chinese medicine event in Krakow take place?",
    answer:
      "The event will take place at Galaxy Hotel, Gęsia 22A 31-535 Krakow",
  },
  {
    id: 2,
    question: "When will this event take place?",
    answer:
      "The event will take place on October 13-15, 2023. You can find the detailed schedule of the event on our website.",
  },
  {
    id: 3,
    question: "How can I register for the event?",
    answer:
      "To register, you need to buy a ticket available on the event's website. After purchasing a ticket, you will receive a registration confirmation to the provided email address.",
  },
  {
    id: 4,
    question: "Will there be an opportunity to buy tickets on site?",
    answer:
      "Unless the event is sold out in advance, tickets can be purchased on-site on the day the event starts. However, we recommend buying a ticket in advance to secure your spot.",
  },
  {
    id: 5,
    question: "Will there be translations into Polish at the event?",
    answer:
      "Yes, during the event all English-language lectures will be translated into Polish",
  },
  // More questions...
];

export default function Faqs() {
  const router = useRouter();
  const faqs = router.locale === "pl" ? faqsPL : faqsEN;
  const { t } = useTranslation("common");
  return (
    <div className=" relative isolate">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("tytul_faqs")}
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            {t("opis_faqs")}{" "}
            <a
              href="mailto:tcmkongres.kontakt@gmail.com"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              tcmkongres.kontakt@gmail.com
            </a>
            {"."}
            {t("opis_faqs2")}
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
