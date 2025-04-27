import Image from "next/image";
import Pokrywka from "@/public/images/Pokrywka.jpeg";
import Olszowska from "@/public/images/Olszowska.jpeg";
import Lapa from "@/public/images/Lapa.png";
import Brejecka from "@/public/images/Brejecka.png";
import Chmielnicki from "@/public/images/Chmielnicki.png";
import Maimon from "@/public/images/Maimon.png";
import Ayal from "@/public/images/Ayal.png";
import Teixeira from "@/public/images/Teixeira.png";
import Jie from "@/public/images/Jie.png";
import Montakab from "@/public/images/Montakab.jpeg";
import Baik from "@/public/images/Baik.jpg";
import Mietka from "@/public/images/Mietka.png";
import Wojniusz from "@/public/images/Wojniusz.jpg";
import Kalmus from "@/public/images/Kalmus.jpg";
import { useTranslation } from "next-i18next";

const people = [
  {
    name: "Katarzyna Pokrywka",
    imageUrl: Pokrywka,
    url: "/pokrywka",
  },
  {
    name: "Bożena Olszowska",
    imageUrl: Olszowska,
    url: "/olszowska",
  },
  {
    name: "Dorota Łapa",
    imageUrl: Lapa,
    url: "/lapa",
  },
  {
    name: "Joanna Brejecka-Pamungkas",
    imageUrl: Brejecka,
    url: "/brejecka",
  },
  {
    name: "Bartosz Chmielnicki",
    imageUrl: Chmielnicki,
    url: "/chmielnicki",
  },
  {
    name: "Yair Maimon",
    imageUrl: Maimon,
    url: "/maimon",
  },
  {
    name: "Rani Ayal",
    imageUrl: Ayal,
    url: "/ayal",
  },
  {
    name: "Ricardo Teixeira",
    imageUrl: Teixeira,
    url: "/teixeira",
  },
  {
    name: "Prof. Li Jie",
    imageUrl: Jie,
    url: "/jie",
  },
  {
    name: "Hamid Montakab",
    imageUrl: Montakab,
    url: "/montakab",
  },
  {
    name: "Jong Kook Baik",
    imageUrl: Baik,
    url: "/baik",
  },
  {
    name: "Izabela Miętka",
    imageUrl: Mietka,
    url: "/mietka",
  },
  {
    name: "Marta Nizioł-Wojniusz",
    imageUrl: Wojniusz,
    url: "/wojniusz",
  },
  {
    name: "Dr Marek Kalmus",
    imageUrl: Kalmus,
    url: "/kalmus",
  },
  // More people...
];

//sortowanie
people.sort((a, b) =>
  a.name.localeCompare(b.name, "pl", { sensitivity: "base" }),
);
export default function Speakers() {
  const { t } = useTranslation("common");
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("tytul_Speakers1")}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t("tytul_Speakers2")}
          </p>

          {/*<div className="mt-10 flex items-center justify-center gap-x-6">*/}
          {/*  <Link*/}
          {/*    href="/details"*/}
          {/*    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm*/}
          {/*    font-semibold text-white shadow-sm hover:bg-indigo-500*/}
          {/*    focus-visible:outline focus-visible:outline-2*/}
          {/*    focus-visible:outline-offset-2 focus-visible:outline-indigo-600"*/}
          {/*  >*/}
          {/*    {t("przycisk_Speakers")} <span aria-hidden="true">→</span>*/}
          {/*  </Link>*/}
          {/*</div>*/}
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {people.map((person) => (
            <a key={person.name} href={person.url}>
              <li>
                <Image
                  className="aspect-[4/5] w-full rounded-2xl object-cover"
                  src={person.imageUrl}
                  alt=""
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-center text-gray-900">
                  {person.name}
                </h3>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}
