"use client";
import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const schedulePL = [
  {
    date: "Piątek",
    dateTime: "2023-10-13",
    summary: "Dzien 1.",
    timeSlots: [
      {
        name: "Sesja plenarna",
        description: "Powitanie",
        start: "10:00",
        end: "10:15",
      },
      {
        name: "Marek Kalmus",
        description:
          "Dlaczego medycyna chińska nie powinna upodobaniać się do medycyny zachodniej?",
        start: "10:15",
        end: "10:45",
      },
      {
        name: "Yair Maimon",
        description: "Wszystko o łzach.",
        start: "10:45",
        end: "11:30",
      },
      {
        name: "Przerwa",
        description: null,
        start: "11:30",
        end: "12:00",
      },
      {
        name: "Ricardo Teixeira ",
        description:
          "Spojrzenie długodystansowe: ewolucja Shen na przestrzeni czasu.",
        start: "12:00",
        end: "12:45",
      },
      {
        name: "Marta Nizioł-Wojniusz",
        description:
          "Trauma – zerwane połączenie: rola Shao Yin w kontekście doświadczenia traumy.",
        start: "12:45",
        end: "13:30",
      },
      {
        name: "Przerwa obiadowa",
        description: null,
        start: "13:30",
        end: "15:00",
      },
      {
        name: "Prof. Li Jie",
        description: "Odpowiedzi na trudne pytania",
        start: "14:30",
        end: "14:50",
      },
      {
        name: "Marta Nizioł - Izabela Miętka - Katarzyna Pokrywka",
        description: "Kobiece sprawy - odpowiedzi na trudne pytania",
        start: "14:30",
        end: "14:50",
      },
      {
        name: "Hamid Montakab",
        description:
          "Montakab 'Sztuka starzenia się z wdziękiem i umierania w łasc'",
        start: "15:00",
        end: "18:30",
      },
      {
        name: "Bartosz Chmielnicki",
        description:
          "Zimno i Gorąco – nieproszeni goście. Strategie Shang Han Lun i Wen Bing w walce z patogenami.",
        start: "15:00",
        end: "18:30",
      },
      {
        name: "Prof. Li Jie",
        description: "Akupunktura Ling Shu Jing . Co i dlaczego?",
        start: "15:00",
        end: "18:30",
      },
    ],
  },
  {
    date: "Sobota",
    dateTime: "2023-10-14",
    summary: "Dzien 2.",
    timeSlots: [
      {
        name: "Bożena Olszowska",
        description: "Poranny QiGong",
        start: "7:30",
        end: "8:15",
        place: "Taras",
      },
      {
        name: "Rani Ayal",
        description: "Pieśń Jadeitowego Smoka: 12 magicznych punktów",
        start: "9:00",
        end: "13:00",
        place: "Sala A",
      },
      {
        name: "Jong Baik",
        description:
          "Koreańska Terapia Dłoni (KHT) dla problemów ginekologicznych, niepłodności i wspomaganego zachodzenia w ciążę. Cz.1",
        start: "9:30",
        end: "13:00",
        place: "Sala B",
      },
      {
        name: "Ricardo Teixeira",
        description: "Kreatywne Hun. W jaki sposób Hun wpływa na nasze życie",
        start: "9:30",
        end: "13:00",
        place: "Sala C",
      },
      {
        name: "Dorota Łapa",
        description:
          "Jak oczyszczać dietą osoby z niedoborami? Oczyszczanie z wykorzystaniem podstaw wzmacniania Qi i Krwi wg medycyny chińskiej.",
        start: "9:30",
        end: "13:00",
        place: "Sala D",
      },
      {
        name: "Panel Rani Ayal - Yair Maimon",
        description: "Odpowiedzi na trudne pytania",
        start: "13:10",
        end: "13:30",
        place: "Sala A",
      },
      {
        name: "Dorota Łapa i Joanna Brejecka",
        description: "Odpowiedzi na pytania o zioła i dietę.",
        start: "13:10",
        end: "13:30",
        place: "Sala D",
      },
      {
        name: "Przerwa obiadowa ",
        description: null,
        start: "13:30",
        end: "15:00",
        place: "Sala B",
      },
      {
        name: "Yair Maimon ",
        description: "Regulowanie układu odpornościowego w TMC",
        start: "15:00",
        end: "18:00",
        place: "Sala A",
      },
      {
        name: "Jong Baik",
        description:
          "Terapia Dłoni (KHT) dla problemów ginekologicznych, niepłodności i wspomaganego zachodzenia w ciążę. Cz.2",
        start: "15:00",
        end: "18:30",
        place: "Sala B",
      },
      {
        name: "Hamid Montakab",
        description:
          "Postępowanie w alergiach sezonowych i przewlekłych w praktyce klinicznej",
        start: "15:00",
        end: "18:30",
        place: "Sala C",
      },
      {
        name: "Bankiet",
        description: null,
        start: "19:30",
        end: "23:00",
        place: "Taras",
      },
    ],
  },
  {
    date: "Niedziela",
    dateTime: "2023-10-15",
    summary: "Dzien 3.",
    timeSlots: [
      {
        name: "Joanna Brejecka- Pamungkas",
        description:
          "Przewlekłe infekcje oddechowe u dzieci  - wzorce patologii, fitoterapia zachodnia wg tcm, tuina" +
          " pediatryczna. cz. 1",
        start: "9:00",
        end: "11:00",
        place: "Sala A",
      },
      {
        name: "Bożena Olszowska",
        description:
          "Chińska sztuka czytania z twarzy - przejrzeć wszystko na wylot. cz. 1",
        start: "9:00",
        end: "11:00",
        place: "Sala B",
      },
      {
        name: "Kasia Pokrywka",
        description:
          "Akupunktura wspierająca proces zapłodnienia in vitro. cz. 1",
        start: "9:00",
        end: "11:00",
        place: "Sala C",
      },
      {
        name: "Przerwa",
        description: null,
        start: "11:00",
        end: "12:15",
      },
      {
        name: "Joanna Brejecka- Pamungkas",
        description:
          "Przewlekłe infekcje oddechowe u dzieci - wzorce patologii, fitoterapia zachodnia wg tcm, tuina pediatryczna. Cz. 2",
        start: "12:15",
        end: "14:00",
        place: "Sala A",
      },
      {
        name: "Bożena Olszowska",
        description:
          "Chińska sztuka czytania z twarzy - przejrzeć wszystko na wylot. Cz. 2",
        start: "12:15",
        end: "14:00",
        place: "Sala B",
      },
      {
        name: "Kasia Pokrywka ",
        description:
          "Akupunktura wspierająca proces zapłodnienia in vitro. Cz. 2",
        start: "12:15",
        end: "14:00",
        place: "Sala C",
      },
    ],
  },
];

const scheduleEN = [
  {
    date: "Friday",
    dateTime: "2023-10-13",
    summary: "Day 1.",
    timeSlots: [
      {
        name: "Plenary Session",
        description: "Welcome",
        start: "10:00",
        end: "10:15",
      },
      {
        name: "Marek Kalmus",
        description:
          "Why should Chinese medicine not resemble Western medicine?",
        start: "10:15",
        end: "10:45",
      },
      {
        name: "Yair Maimon",
        description: "All about tears.",
        start: "10:45",
        end: "11:30",
      },
      {
        name: "Break",
        description: null,
        start: "11:30",
        end: "12:00",
      },
      {
        name: "Ricardo Teixeira ",
        description: "A Long-distance Look: the evolution of Shen over time.",
        start: "12:00",
        end: "12:45",
      },
      {
        name: "Marta Nizioł-Wojniusz",
        description:
          "Trauma – broken connection: the role of Shao Yin in the context of experiencing trauma.",
        start: "12:45",
        end: "13:30",
      },
      {
        name: "Lunch Break",
        description: null,
        start: "13:30",
        end: "15:00",
      },
      {
        name: "Prof. Li Jie",
        description: "Answers to difficult questions",
        start: "14:30",
        end: "14:50",
      },
      {
        name: "Marta Nizioł - Izabela Miętka - Katarzyna Pokrywka",
        description: "Women's matters - answers to difficult questions",
        start: "14:30",
        end: "14:50",
      },
      {
        name: "Hamid Montakab",
        description:
          "Montakab 'The art of aging gracefully and dying in grace'",
        start: "15:00",
        end: "18:30",
      },
      {
        name: "Bartosz Chmielnicki",
        description:
          "Cold and Hot – uninvited guests. Strategies of Shang Han Lun and Wen Bing in fighting pathogens.",
        start: "15:00",
        end: "18:30",
      },
      {
        name: "Prof. Li Jie",
        description: "Acupuncture of Ling Shu Jing. What and why?",
        start: "15:00",
        end: "18:30",
      },
    ],
  },
  {
    date: "Saturday",
    dateTime: "2023-10-14",
    summary: "Day 2.",
    timeSlots: [
      {
        name: "Bożena Olszowska",
        description: "Morning QiGong",
        start: "7:30",
        end: "8:15",
        place: "Terrace",
      },
      {
        name: "Rani Ayal",
        description: "Song of the Jade Dragon: 12 magical points",
        start: "9:00",
        end: "13:00",
        place: "Room A",
      },
      {
        name: "Jong Baik",
        description:
          "Korean Hand Therapy (KHT) for gynecological problems, infertility, and assisted conception. Pt. 1",
        start: "9:30",
        end: "13:00",
        place: "Room B",
      },
      {
        name: "Ricardo Teixeira",
        description: "Creative Hun. How Hun influences our life",
        start: "9:30",
        end: "13:00",
        place: "Room C",
      },
      {
        name: "Dorota Łapa",
        description:
          "How to cleanse with a diet people with deficiencies? Cleansing using the basics of strengthening Qi and Blood according to Chinese medicine.",
        start: "9:30",
        end: "13:00",
        place: "Room D",
      },
      {
        name: "Panel Rani Ayal - Yair Maimon",
        description: "Answers to difficult questions",
        start: "13:10",
        end: "13:30",
        place: "Room A",
      },
      {
        name: "Dorota Łapa and Joanna Brejecka",
        description: "Answers to questions about herbs and diet.",
        start: "13:10",
        end: "13:30",
        place: "Room D",
      },
      {
        name: "Lunch Break",
        description: null,
        start: "13:30",
        end: "15:00",
        place: "Room B",
      },
      {
        name: "Yair Maimon ",
        description: "Regulating the immune system in TCM",
        start: "15:00",
        end: "18:00",
        place: "Room A",
      },
      {
        name: "Jong Baik",
        description:
          "Hand Therapy (KHT) for gynecological problems, infertility, and assisted conception. Pt. 2",
        start: "15:00",
        end: "18:30",
        place: "Room B",
      },
      {
        name: "Hamid Montakab",
        description:
          "Managing seasonal and chronic allergies in clinical practice",
        start: "15:00",
        end: "18:30",
        place: "Room C",
      },
      {
        name: "Banquet",
        description: null,
        start: "19:30",
        end: "23:00",
        place: "Terrace",
      },
    ],
  },
  {
    date: "Sunday",
    dateTime: "2023-10-15",
    summary: "Day 3.",
    timeSlots: [
      {
        name: "Joanna Brejecka- Pamungkas",
        description:
          "Chronic respiratory infections in children - pathology patterns, western phytotherapy according to TCM, pediatric tuina. Pt. 1",
        start: "9:00",
        end: "11:00",
        place: "Room A",
      },
      {
        name: "Bożena Olszowska",
        description:
          "Chinese art of face reading - see through everything. Pt. 1",
        start: "9:00",
        end: "11:00",
        place: "Room B",
      },
      {
        name: "Kasia Pokrywka",
        description:
          "Acupuncture supporting the in vitro fertilization process. Pt. 1",
        start: "9:00",
        end: "11:00",
        place: "Room C",
      },
      {
        name: "Break",
        description: null,
        start: "11:00",
        end: "12:15",
      },
      {
        name: "Joanna Brejecka- Pamungkas",
        description:
          "Chronic respiratory infections in children - pathology patterns, western phytotherapy according to TCM, pediatric tuina. Pt. 2",
        start: "11:15",
        end: "14:00",
        place: "Room A",
      },
      {
        name: "Bożena Olszowska",
        description:
          "Chinese art of face reading - see through everything. Pt. 2",
        start: "11:15",
        end: "14:00",
        place: "Room B",
      },
      {
        name: "Kasia Pokrywka",
        description:
          "Acupuncture supporting the in vitro fertilization process. Pt. 2",
        start: "11:15",
        end: "14:00",
        place: "Room C",
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
                dayIndex !== selectedIndex && "opacity-70"
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
        "space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur"
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
