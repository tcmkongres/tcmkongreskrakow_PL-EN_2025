import Maimon from "@/public/images/Maimon.png";
import Montakab from "@/public/images/Montakab.jpeg";
import Chmielnicki from "@/public/images/Chmielnicki.png";
import Teixeira from "@/public/images/Teixeira.png";
import Baik from "@/public/images/Baik.png";
import Mietka from "@/public/images/Mietka.png";
import Wojniusz from "@/public/images/Wojniusz.jpg";
import Fraussen from "@/public/images/Fraussen.png";
import Olszowska from "@/public/images/Olszowska.jpeg";
import Heland from "@/public/images/Heland.png";
import Zhang from "@/public/images/Zhang.png";
import Mazin from "@/public/images/Mazin.png";
import Giulia from "@/public/images/Giulia.png";

// Prelegenci wyświetlani na stronie (sekcja Speakers) oraz generowani jako
// strony /speaker/[slug]. Aby dodać prelegenta: zaimportuj zdjęcie powyżej
// i dodaj wpis { name, imageUrl, url } poniżej.
//
// UWAGA: w public/locales/{pl,en}/ istnieją jeszcze nieużywane tłumaczenia
// prelegentów spoza tej listy: ayal, brejecka, jie, kalmus, lapa, pokrywka.
// Zdjęcia mają w public/images/. Aby ich przywrócić, wystarczy dodać wpis tutaj.
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
  {
    name: "Elżbieta Heland",
    imageUrl: Heland,
    url: "/heland",
  },
  {
    name: "Jeffrey Hui Zhang",
    imageUrl: Zhang,
    url: "/zhang",
  },
  {
    name: "Mazin Al Khafaj",
    imageUrl: Mazin,
    url: "/mazin",
  },
  {
    name: "Giulia Boschi",
    imageUrl: Giulia,
    url: "/giulia",
  },
];

export { people };
