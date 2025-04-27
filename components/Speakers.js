import Image from "next/image";
import Chmielnicki from "@/public/images/Chmielnicki.png";
import Maimon from "@/public/images/Maimon.png";
import Teixeira from "@/public/images/Teixeira.png";
import Montakab from "@/public/images/Montakab.jpeg";
import Baik from "@/public/images/Baik.png";
import Mietka from "@/public/images/Mietka.png";
import Wojniusz from "@/public/images/Wojniusz.jpg";
import Fraussen from "@/public/images/Fraussen.png";
import Olszowska from "@/public/images/Olszowska.jpeg";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const people = [
  {
    name: "Yair Maimon",
    imageUrl: Maimon,
    url: "/maimon",
  },
  {
    name: "Hamid Montakab",
    imageUrl: Montakab,
    url: "/montakab",
  },
  {
    name: "Bartosz Chmielnicki",
    imageUrl: Chmielnicki,
    url: "/chmielnicki",
  },
  {
    name: "Ricardo Teixeira",
    imageUrl: Teixeira,
    url: "/teixeira",
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
    name: "Mieke Fraussen",
    imageUrl: Fraussen,
    url: "/fraussen",
  },
  {
    name: "Bożena Olszowska",
    imageUrl: Olszowska,
    url: "/olszowska",
  },
];

people.sort((a, b) =>
  a.name.localeCompare(b.name, "pl", { sensitivity: "base" }),
);

export default function Speakers() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;

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
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {people.map((person) => {
            const localizedUrl =
              locale === "en" ? `/en${person.url}` : person.url;
            return (
              <a key={person.name} href={localizedUrl}>
                <li>
                  <Image
                    className="aspect-[4/5] w-full rounded-2xl object-cover"
                    src={person.imageUrl}
                    alt={person.name}
                  />
                  <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-center text-gray-900">
                    {person.name}
                  </h3>
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
