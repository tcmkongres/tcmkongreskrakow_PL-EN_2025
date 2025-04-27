"use client";
import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

// =======================================
//    Nowe dane: POLSKA WERSJA (schedulePL)
// =======================================

const schedulePL = [
  {
    date: "Piątek",
    dateTime: "2023-10-13",
    summary: "Dzień 1.",
    timeSlots: [
      {
        name: "Powitanie",
        description: "Izabela Miętka, Kasia Sieluk, Yair Maimon, Ela Heland",
        start: "10:00",
        end: "10:30",
      },
      {
        name: "Wykład",
        description: "Yair Maimon",
        start: "10:30",
        end: "11:00",
      },
      {
        name: "Wykład",
        description: "Izabela Miętka",
        start: "11:00",
        end: "11:30",
      },
      {
        name: "Przerwa",
        description: null,
        start: "11:30",
        end: "12:00",
      },
      {
        name: "Wykład",
        description: "Giulia Boschi",
        start: "12:00",
        end: "12:30",
      },
      {
        name: "Wykład",
        description: "Ricardo Teixeira",
        start: "12:30",
        end: "13:00",
      },
      {
        name: "Wykład",
        description: "Marta Nizioł",
        start: "13:00",
        end: "13:30",
      },
      {
        name: "Przerwa obiadowa",
        description: null,
        start: "13:30",
        end: "15:00",
      },
      {
        name: "Wykład 1",
        description:
          "Hamid Montakab (Tłum. Marta Nizioł). From Conception to Birth. Od poczęcia do narodzin. Akupunktura wspierająca okres ciąży oraz porodu.",
        start: "15:00",
        end: "18:00",
      },
      {
        name: "Wykład 2",
        description:
          "Ricardo Teixeira (Tłum. Irena Susz). Workshop: Acupuncture Techniques – Adding effective tools to your Clinical Toolkit. Warsztat: Techniki akupunktury – dodatkowe skuteczne narzędzia do Twojej praktyki.",
        start: "15:00",
        end: "18:00",
      },
      {
        name: "Wykład 3",
        description:
          "Mazin Al-Khafaji (Tłum. Ania Słowik). Dermatologia w medycynie chińskiej. Dermatology in Chinese Medicine.",
        start: "15:00",
        end: "18:00",
      },
    ],
  },
  {
    date: "Sobota",
    dateTime: "2023-10-14",
    summary: "Dzień 2.",
    timeSlots: [
      {
        name: "Wykład 1",
        description:
          "Hamid Montakab (Tłum. Marta Nizioł). The 8 Extraordinary Vessels and psychological profiles. 8 Kanałów Cudownych oraz profile psychologiczne cz.1",
        start: "10:00",
        end: "13:30",
      },
      {
        name: "Wykład 2",
        description:
          "Yair Maimon / Izabela Miętka. Acupuncture Treatment of menopause Haven, Earth perspective. Akupunktura w leczeniu menopauzy – perspektywa Nieba i Ziemi.",
        start: "10:00",
        end: "13:30",
      },
      {
        name: "Wykład 3",
        description:
          "Mazin Al-Khafaji (Tłum. Ania Słowik). Treating Atopic Dermatitis in Infants. Leczenie atopowego zapalenia skóry u niemowląt.",
        start: "10:00",
        end: "13:30",
      },
      {
        name: "Przerwa obiadowa",
        description: null,
        start: "13:30",
        end: "15:00",
      },
      {
        name: "Ricardo Teixeira",
        description: "brak tłumaczenia",
        start: "13:30",
        end: "15:00",
      },
      {
        name: "Wykład 1",
        description:
          "Hamid Montakab (Tłum. Marta Nizioł). The 8 Extraordinary Vessels and psychological profiles part 2. 8 Kanałów Cudownych oraz profile psychologiczne cz.2",
        start: "15:00",
        end: "18:00",
      },
      // {
      //   name: "Wykład 2",
      //   description: "brak danych",
      //   start: "15:00",
      //   end: "18:00",
      // },
      {
        name: "Wykład 3",
        description:
          "Jong Baik (Tłum. Ania Słowik). An Explanation of the Interrelationship between Jing, Qi and Shen. Wyjaśnienie Wzajemnej Zależności między Jing, Qi i Shen.",
        start: "15:00",
        end: "18:00",
      },
      {
        name: "Bankiet",
        description: null,
        start: "20:00",
        end: "24:00",
      },
    ],
  },
  {
    date: "Niedziela",
    dateTime: "2023-10-15",
    summary: "Dzień 3.",
    timeSlots: [
      {
        name: "Wykład 1",
        description:
          "Jong Baik (Tłum. Ania Słowik). A Multi-Microsystems Approach to Pain and Pain Management. Podejście multi-mikrosystemowe w pracy z bólem.",
        start: "9:30",
        end: "12:30",
      },
      {
        name: "Wykład 2",
        description:
          "Giulia Boschi (Tłum. Marta Nizioł). Beyond the seven qing: the language of emotions in Classical Chinese Medicine. Poza siedmioma qing: język emocji w klasycznej medycynie chińskiej.",
        start: "9:30",
        end: "12:30",
      },
      {
        name: "Wykład 3",
        description:
          "Mieke Fraussen. Face Reading, Trauma & Healing part 1. CZYTANIE Z TWARZY, TRAUMA I UZDROWIENIE. Cz.1",
        start: "9:30",
        end: "12:30",
      },
      {
        name: "Przerwa obiadowa",
        description: null,
        start: "12:30",
        end: "13:30",
      },
      {
        name: "Transformująca rola elementu Ziemi",
        description: "Marta Nizioł",
        start: "12:30",
        end: "13:30",
      },
      {
        name: "Wykład 1",
        description:
          "Jeffrey Hui Zhang (Tłum. Ania Słowik). Weiqi (Qi obronne) i Wei-Qi (poziomy): Integracja Shang Han Lun i Wen Bing. WeiQi (Defensive Qi) and Wei-Qi (Levels): Integrating Shang Han Lun and Wen Bing.",
        start: "13:30",
        end: "16:30",
      },
      {
        name: "Wykład 2",
        description:
          "Bartosz Chmielnicki. Krew i oddech, czyli skąd się wzięła akupunktura? Blood and Breath: The Origins of Acupuncture.",
        start: "13:30",
        end: "16:30",
      },
      {
        name: "Wykład 3",
        description:
          "Mieke Fraussen. Face Reading, Trauma & Healing. CZYTANIE Z TWARZY, TRAUMA I UZDROWIENIE. Cz.2",
        start: "13:30",
        end: "16:30",
      },
    ],
  },
];

// ============================================
//    Nowe dane: ANGIELSKA WERSJA (scheduleEN)
// ============================================

const scheduleEN = [
  {
    date: "Friday",
    dateTime: "2023-10-13",
    summary: "Day 1.",
    timeSlots: [
      {
        name: "Welcome",
        description:
          "Izabela Miętka, Kasia Sieluk, Yair Maimon, Ela Heland (brak tłumaczenia)",
        start: "10:00",
        end: "10:30",
      },
      {
        name: "Lecture",
        description: "Yair Maimon (brak tłumaczenia)",
        start: "10:30",
        end: "11:00",
      },
      {
        name: "Lecture",
        description: "Izabela Miętka (brak tłumaczenia)",
        start: "11:00",
        end: "11:30",
      },
      {
        name: "Break",
        description: null,
        start: "11:30",
        end: "12:00",
      },
      {
        name: "Lecture",
        description: "Giulia Boschi (brak tłumaczenia)",
        start: "12:00",
        end: "12:30",
      },
      {
        name: "Lecture",
        description: "Ricardo Teixeira (brak tłumaczenia)",
        start: "12:30",
        end: "13:00",
      },
      {
        name: "Lecture",
        description: "Marta Nizioł (brak tłumaczenia)",
        start: "13:00",
        end: "13:30",
      },
      {
        name: "Lunch Break",
        description: null,
        start: "13:30",
        end: "15:00",
      },
      {
        name: "Lecture 1",
        description:
          "Hamid Montakab (interp. by Marta Nizioł). From Conception to Birth. (Od poczęcia do narodzin. Akupunktura wspierająca okres ciąży oraz porodu – brak tłumaczenia)",
        start: "15:00",
        end: "18:00",
      },
      {
        name: "Lecture 2",
        description:
          "Ricardo Teixeira (interp. by Irena Susz). Workshop: Acupuncture Techniques – Adding effective tools to your Clinical Toolkit. (Warsztat: Techniki akupunktury – dodatkowe skuteczne narzędzia do Twojej praktyki – brak tłumaczenia)",
        start: "15:00",
        end: "18:00",
      },
      {
        name: "Lecture 3",
        description:
          "Mazin Al-Khafaji (interp. by Ania Słowik). Dermatology in Chinese Medicine. (Dermatologia w medycynie chińskiej – brak tłumaczenia)",
        start: "15:00",
        end: "18:00",
      },
    ],
  },
  {
    date: "Saturday",
    dateTime: "2023-10-14",
    summary: "Day 2.",
    timeSlots: [
      {
        name: "Lecture 1",
        description:
          "Hamid Montakab (interp. by Marta Nizioł). The 8 Extraordinary Vessels and psychological profiles part 1. (8 Kanałów Cudownych oraz profile psychologiczne cz.1 – brak tłumaczenia)",
        start: "10:00",
        end: "13:30",
      },
      {
        name: "Lecture 2",
        description:
          "Yair Maimon / Izabela Miętka. Acupuncture Treatment of menopause Haven, Earth perspective. (Akupunktura w leczeniu menopauzy – perspektywa Nieba i Ziemi – brak tłumaczenia)",
        start: "10:00",
        end: "13:30",
      },
      {
        name: "Lecture 3",
        description:
          "Mazin Al-Khafaji (interp. by Ania Słowik). Treating Atopic Dermatitis in Infants. (Leczenie atopowego zapalenia skóry u niemowląt – brak tłumaczenia)",
        start: "10:00",
        end: "13:30",
      },
      {
        name: "Lunch Break",
        description: null,
        start: "13:30",
        end: "15:00",
      },
      {
        name: "Ricardo Teixeira",
        description: null,
        start: "13:30",
        end: "15:00",
      },
      {
        name: "Lecture 1",
        description:
          "Hamid Montakab (interp. by Marta Nizioł). The 8 Extraordinary Vessels and psychological profiles part 2. (8 Kanałów Cudownych oraz profile psychologiczne cz.2 – brak tłumaczenia)",
        start: "15:00",
        end: "18:00",
      },
      // {
      //   name: "Lecture 2",
      //   description: "brak danych",
      //   start: "15:00",
      //   end: "18:00",
      // },
      {
        name: "Lecture 3",
        description:
          "Jong Baik (interp. by Ania Słowik). An Explanation of the Interrelationship between Jing, Qi and Shen. (Wyjaśnienie Wzajemnej Zależności między Jing, Qi i Shen – brak tłumaczenia)",
        start: "15:00",
        end: "18:00",
      },
      {
        name: "Banquet",
        description: null,
        start: "20:00",
        end: "24:00",
      },
    ],
  },
  {
    date: "Sunday",
    dateTime: "2023-10-15",
    summary: "Day 3.",
    timeSlots: [
      {
        name: "Lecture 1",
        description:
          "Jong Baik (interp. by Ania Słowik). A Multi-Microsystems Approach to Pain and Pain Management. (Podejście multi-mikrosystemowe w pracy z bólem – brak tłumaczenia)",
        start: "9:30",
        end: "12:30",
      },
      {
        name: "Lecture 2",
        description:
          "Giulia Boschi (interp. by Marta Nizioł). Beyond the seven qing: the language of emotions in Classical Chinese Medicine. (Poza siedmioma qing: język emocji w klasycznej medycynie chińskiej – brak tłumaczenia)",
        start: "9:30",
        end: "12:30",
      },
      {
        name: "Lecture 3",
        description:
          "Mieke Fraussen. Face Reading, Trauma & Healing part 1. (CZYTANIE Z TWARZY, TRAUMA I UZDROWIENIE. Cz.1 – brak tłumaczenia)",
        start: "9:30",
        end: "12:30",
      },
      {
        name: "Lunch Break",
        description: null,
        start: "12:30",
        end: "13:30",
      },
      {
        name: "Transforming role of the Earth element",
        description: "Marta Nizioł (brak tłumaczenia)",
        start: "12:30",
        end: "13:30",
      },
      {
        name: "Lecture 1",
        description:
          "Jeffrey Hui Zhang (interp. by Ania Słowik). WeiQi (Defensive Qi) and Wei-Qi (Levels): Integrating Shang Han Lun and Wen Bing. (Weiqi (Qi obronne) i Wei-Qi (poziomy): Integracja Shang Han Lun i Wen Bing – brak tłumaczenia)",
        start: "13:30",
        end: "16:30",
      },
      {
        name: "Lecture 2",
        description:
          "Bartosz Chmielnicki. Blood and Breath: The Origins of Acupuncture. (Krew i oddech, czyli skąd się wzięła akupunktura? – brak tłumaczenia)",
        start: "13:30",
        end: "16:30",
      },
      {
        name: "Lecture 3",
        description:
          "Mieke Fraussen. Face Reading, Trauma & Healing part 2. (CZYTANIE Z TWARZY, TRAUMA I UZDROWIENIE. Cz.2 – brak tłumaczenia)",
        start: "13:30",
        end: "16:30",
      },
    ],
  },
];

function ScheduleTabbed() {
  const router = useRouter();
  const schedule = router.locale === "pl" ? schedulePL : scheduleEN;
  let [tabOrientation, setTabOrientation] = useState("horizontal");

  useEffect(() => {
    let smMediaQuery = window.matchMedia("(min-width: 640px)");

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(smMediaQuery);
    smMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      smMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === "vertical"}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) =>
          schedule.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className={clsx(
                "relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0",
                dayIndex !== selectedIndex && "opacity-70",
              )}
            >
              <DaySummary
                day={{
                  ...day,
                  date: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {day.date}
                    </Tab>
                  ),
                }}
              />
            </div>
          ))
        }
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day, index) => (
          <Tab.Panel
            key={index}
            className="[&:not(:focus-visible)]:focus:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

function Container({ className, ...props }) {
  return (
    <div
      className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-gray-900">
        {day.summary}
      </p>
    </>
  );
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        "space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur",
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlotIndex}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end}`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-gray-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-gray-600">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-blue-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{" "}
            -{" "}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{" "}
          </p>
          {timeSlot.place && (
            <p className="mt-1 tracking-tight text-gray-600">
              {timeSlot.place}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}

function ScheduleStatic() {
  const router = useRouter();
  const schedule = router.locale === "pl" ? schedulePL : scheduleEN;
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day, index) => (
        <section key={index}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  );
}

export function Schedule() {
  const { t } = useTranslation("common");
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("tytul_Schedule")}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            {t("opis_Schedule")}
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute inset-x-0 -bottom-32 -top-40 overflow-hidden bg-indigo-50">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  );
}
