"use client";

import Image from "next/image";
import Teixeira from "@/public/images/Teixeira.png";
import Montakab from "@/public/images/Montakab.jpeg";
import Baik from "@/public/images/Baik.png";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Link from "next/link";
import Fraussen from "@/public/images/Fraussen.png";
import Chmielnicki from "@/public/images/Chmielnicki.png";
import Mietka from "@/public/images/Mietka.png";
import Heland from "@/public/images/Heland.png";
//////////////////////////////////////////////
// WERSJA POLSKA
//////////////////////////////////////////////

const commentsPL = [
  // 1) Piątek 10.10.2025, godz. 15.00-18.00
  {
    id: 1,
    name: "Mazin Al-Khafaji",
    imageUrl: null, // jeśli nie masz wczytanego obrazka, można dać null
    date: "Piątek 10.10.2025, 15.00-18.00",
    title: "Dermatologia w medycynie chińskiej",
    description: "brak opisu",
  },
  {
    id: 2,
    name: "HAMID MONTAKAB",
    imageUrl: Montakab,
    date: "Piątek 10.10.2025, 15.00-18.00",
    title: "Od poczęcia do narodzin",
    description: "brak opisu",
  },
  {
    id: 14,
    name: "ELŻBIETA HELAND",
    imageUrl: null,
    date: "Piątek 10.10.2025, 15.00-18.00",
    title:
      "Pięć Duchów jako manifestacja jednego Źródła - Shen na podstawie tekstów źródłowych klasycznej medycyny chińskiej",
    description: `„Niebiosa manifestują się jako 德 dé we mnie. Ziemia manifestuje się jako 氣 qì we mnie.”

Ten cytat pochodzi z rozdziału 8 Ling Shu zatytułowanego „Duch jako Źródło” (本神 běn shén). 德 dé oznacza wewnętrzną, wrodzoną moc, cnotę, natomiast 氣 qì to życiodajny oddech, siła życiowa. Cytat ten stanowi kwintesencję źródła życia. W dalszej części tego tekstu wyjaśnione są pojęcia Pięciu Duchów — 神 shén, 魄 pò, 魂 hún, 意 yì, oraz 志 zhì. Przyjrzymy się etiologii tych chińskich znaków oraz ich manifestacji w życiu człowieka — temu, jak wpływają na emocje, fizjologię i patologię.

Druga część wykładu będzie poświęcona praktycznemu zastosowaniu tej teorii – temu jak smaki terapeutyczne korespondują z częstotliwością Pięciu Przemian (五行 wǔ xíng) i jak przekłada się to na zioła i receptury ziołowe wpływające na emocje. Odpowiemy na pytanie, dlaczego z każdą z przemian związane są przynajmniej trzy smaki a nie jeden. Sięgniemy przy tym do fragmentów takich dzieł jak Ling Shu, Su Wen, Nan Jing, Shang Han Za Bing Lun oraz Fu Xing Jue.
`,
  },

  // 2) Sobota 11.10.2025, godz. 10.00-13.00 / 15.00-18.00
  {
    id: 3,
    name: "HAMID MONTAKAB",
    imageUrl: Montakab,
    date: "Sobota 11.10.2025, 10.00-13.00 / 15.00-18.00",
    title: "8 Kanałów Cudownych oraz profile psychologiczne",
    description: "brak opisu",
  },

  // 3) Niedziela 12.10.2025
  {
    id: 4,
    name: "MIEKE FRAUSSEN",
    imageUrl: Fraussen,
    date: "Niedziela 12.10.2025, 9.30-12.30 / 13.30-16.30",
    title: "CZYTANIE Z TWARZY, TRAUMA I UZDROWIENIE",
    description: `Z TWARZY, TRAUMA I UZDROWIENIE
Integracja Chińskiego czytania z twarzy z podejściem zachodnio-naukowym w uzdrawianiu traumy

W naszej nieustannej podróży ku zdrowiu i dobrostanowi chińskie czytanie z twarzy oferuje fascynującą perspektywę. Ta starożytna 'pseudonauka' ujawnia ukryte informacje na temat naszej osobowości, zdrowia, a nawet ścieżki życiowej.
Każda twarz opowiada wyjątkową historię życia. Chińskie czytanie z twarzy polega na obserwowaniu i interpretowaniu różnych cech twarzy, takich jak kształt, kolor, tekstura oraz położenie elementów, takich jak oczy, nos, usta i brwi. Cechy te są postrzegane jako wskaźniki różnych aspektów życia człowieka, w tym zdrowia, stanu emocjonalnego, temperamentu, osobowości, talentów, słabości i doświadczeń życiowych.
Łącząc pięć elementów z unikalnymi rysami naszej twarzy, możemy uzyskać głębsze zrozumienie tego, kim jesteśmy i w jakim stanie znajduje się nasze zdrowie. Czytanie z twarzy było stosowane od początków Tradycyjnej Medycyny Chińskiej jako narzędzie do trafnej diagnostyki.
Jako instrument diagnostyczny, chińskie czytanie z twarzy pozwala nam identyfikować choroby oraz określać wrodzoną podatność na określone fizyczne, emocjonalne i psychiczne schorzenia. Co więcej, dokładna analiza naszej twarzy może ostrzec nas przed potencjalnymi problemami zdrowotnymi, zanim się one w pełni ujawnią. Daje to możliwość podjęcia środków zapobiegawczych i proaktywnego podejścia do własnego zdrowia.
Jednak analiza twarzy wykracza poza samo zdrowie fizyczne. Jest to również potężne narzędzie do autorefleksji i rozwoju osobistego. Rozumiejąc, w jaki sposób nasze rysy twarzy odzwierciedlają nasz stan psychiczny i emocjonalny, możemy lepiej poznać siebie oraz nasze relacje z innymi.
Trauma zaczyna się już w okresie prenatalnym, kształtując naszą osobowość, decyzje, a nawet cechy twarzy. Trauma nie jest definiowana jedynie przez same wydarzenia, ale przez ich długotrwały wpływ na układ nerwowy i regulację emocjonalną. W chińskim czytaniu z twarzy twarz odzwierciedla ślady traumy, emocje i mechanizmy radzenia sobie. Trauma zmienia naszą fizjologię, co staje się widoczne w strukturze twarzy, liniach mimicznych i asymetriach.
Integrując zachodnie podejście z Tradycyjną Medycyną Chińską oraz chińskim czytaniem z twarzy, tworzymy potężne narzędzie diagnostyczne. Odczytując traumę poprzez twarz, uzyskujemy głębszą trafność diagnostyczną i otwieramy ścieżki do prawdziwego uzdrowienia.
To podejście pozwala nam nie tylko rozpoznać traumę, ale także ją przetworzyć, przekształcić, przetransformować. Ta unikalna fuzja otwiera nowe drogi do uzdrowienia, transformacji i autentycznego życia.

(Mieke jest uznawana za ekspertkę w dziedzinie chińskiego czytania z twarzy i analizy twarzy. ...)
    `,
  },
  {
    id: 5,
    name: "JEFFREY HUI ZHANG",
    imageUrl: null,
    date: "Niedziela 12.10.2025, 13.30-16.30",
    title:
      "Weiqi (Qi obronne) i Wei-Qi (poziomy): Integracja Shang Han Lun i Wen Bing",
    description: "brak opisu",
  },

  // --- Bez daty (lub nieustalone) ---
  {
    id: 6,
    name: "GIULIA BOSCHI",
    imageUrl: null,
    date: null,
    title: "Poza siedmioma qing: język emocji w klasycznej medycynie chińskiej",
    description: "brak opisu",
  },
  {
    id: 7,
    name: "JONG BAIK",
    imageUrl: Baik,
    date: null,
    title:
      "Trzy Skarby: Wyjaśnienie Wzajemnej Zależności między Jing, Qi i Shen",
    description: `Trzy Skarby:
Wyjaśnienie Wzajemnej Zależności między Jing, Qi i Shen

Jing 精, Qi 氣 i Shen 神 to fundamentalne pojęcia stanowiące podstawę dwóch najważniejszych filozoficznych koncepcji Tradycyjnej Medycyny Wschodnioazjatyckiej (TEAM), holizmu i podejścia opartego na jedności ciała i umysłu. Każde z nich posiada swoje unikalne cechy, jednak nie mogą one być całkowicie rozdzielone. Aby osiągnąć i utrzymać zdrowie i długowieczność, niezbędna jest ochrona i pielęgnacja Jing, Qi i Shen jako źródła życia.

Znaczenie Trzech Skarbów nie może być przecenione w profilaktyce, diagnostyce, zarządzaniu oraz leczeniu chorób. Głębsze zrozumienie Jing, Qi i Shen prowadzi do dalszego rozwoju istniejących teorii TEAM oraz pogłębia nasze pojmowanie fizjologii i patologii człowieka.

Prezentacja najpierw skupi się na indywidualnych cechach Jing, Qi i Shen, następnie na analizie ich wzajemnych relacji, a na koniec przyjrzymy się, jak ta zależność może zostać wykorzystana w kultywowaniu zdrowia.
`,
  },
  {
    id: 8,
    name: "JONG BAIK",
    imageUrl: Baik,
    date: null,
    title: "Podejście multi-mikrosystemowe w pracy z bólem",
    description: `Mikrosystemy to specjalne systemy akupunktury, które opierają się na stymulacji określonych punktów w konkretnych obszarach ludzkiego ciała w celu zapobiegania chorobom i ich leczenia. Mikrosystemy są łatwe w nauce, ekonomiczne, bezpieczne i praktyczne. Mają szerokie zastosowanie i są powszechnie wykorzystywane w diagnostyce, terapii, pracy z bólem oraz medycynie prewencyjnej.
Ta prezentacja zostanie przedstawiona z perspektywy Tradycyjnej Medycyny Wschodnioazjatyckiej i wyjaśni, w jaki sposób podejście wielosystemowe może poszerzyć możliwości leczenia, zwiększyć skuteczność terapii oraz stworzyć bardziej indywidualny plan leczenia dla pacjenta. Następnie zostaną wprowadzone kilka szeroko stosowanych mikrosystemów oraz przedstawione bezpieczne i skuteczne metody ich wykorzystywania w pracy z bólem. Omówione mikrosystemy to Akupunktura Dłoni, Akupunktura Ucha i Akupunktura Brzucha.
`,
  },
  {
    id: 9,
    name: "BARTOSZ CHMIELNICKI",
    imageUrl: Chmielnicki,
    date: null,
    title: "Krew i oddech, czyli skąd się wzięła akupunktura?",
    description:
      "Skąd Chińczycy znali przebiegi meridianów, lokalizację i działanie punktów? Czy Hipokrates z Kos był akupunkturzystą? Jak i kiedy zaczęła się historia akupunktury? Czy powinniśmy czuć się niegodnymi spadkobiercami taoistycznych mędrców, którzy leczyli choroby po prostu manipulując Qi?\n" +
      "\n" +
      "Podobne pytania często słyszę od swoich Studentów, sam zresztą zadawałem je sobie nieskończoną ilość razy. Podczas krótkiego wykładu plenarnego opowiem Wam historię początków akupunktury, pokażę proces jej rozwoju od proto-anatomicznych obserwacji i krwioupustów po wysublimowany system, który znamy z Nei Jing. Zaproszę Was na fascynującą podróż przez stulecia do niezwykłego momentu w historii, w którym jednoczące się przyszłe cesarstwo umożliwiła niezwykłą interakcję między brutalnym światem wojskowych chirurgów a kosmologicznymi ideami wczesnych taoistów. ",
  },
  {
    id: 10,
    name: "YAIR MAIMON / IZABELA MIĘTKA",
    imageUrl: Mietka,
    date: null,
    title: "Akupunktura w leczeniu menopauzy – perspektywa Nieba i Ziemi",
    description: "brak opisu",
  },
  {
    id: 11,
    name: "RICARDO TEIXEIRA",
    imageUrl: Teixeira,
    date: null,
    title:
      "Warsztat: Techniki akupunktury – dodatkowe skuteczne narzędzia do Twojej praktyki",
    description: "brak opisu",
  },
  {
    id: 12,
    name: "MAZIN AL-KHAFAJI",
    imageUrl: null,
    date: null,
    title: "Leczenie atopowego zapalenia skóry u niemowląt",
    description: "brak opisu",
  },

  // Dodatkowy wykład Giulii Boschi (Pięć Duchów) – również bez daty
  {
    id: 13,
    name: "GIULIA BOSCHI",
    imageUrl: null,
    date: null,
    title:
      "Pięć Duchów jako manifestacja jednego Źródła - Shen na podstawie tekstów źródłowych klasycznej medycyny chińskiej",
    description: `„Niebiosa manifestują się jako 德 dé we mnie. Ziemia manifestuje się jako 氣 qì we mnie.”
Ten cytat pochodzi z rozdziału 8 Ling Shu zatytułowanego „Duch jako Źródło” (本神 běn shén). 德 dé oznacza wewnętrzną, wrodzoną moc, cnotę, natomiast 氣 qì to życiodajny oddech, siła życiowa. Cytat ten stanowi kwintesencję źródła życia. W dalszej części tego tekstu wyjaśnione są pojęcia Pięciu Duchów – 神 shén, 魄 pò, 魂 hún, 意 yì oraz 志 zhì. Przyjrzymy się etiologii tych chińskich znaków oraz ich manifestacji w życiu człowieka – temu, jak wpływają na emocje, fizjologię i patologię.

Druga część wykładu będzie poświęcona praktycznemu zastosowaniu tej teorii – temu jak smaki terapeutyczne korespondują z częstotliwością Pięciu Przemian (五行 wǔ xíng) i jak przekłada się to na zioła i receptury ziołowe wpływające na emocje. Odpowiemy na pytanie, dlaczego z każdą z przemian związane są przynajmniej trzy smaki, a nie jeden. Sięgniemy przy tym do fragmentów takich dzieł jak Ling Shu, Su Wen, Nan Jing, Shang Han Za Bing Lun i Fu Xing Jue.
`,
  },
];

//////////////////////////////////////////////
// WERSJA ANGIELSKA
//////////////////////////////////////////////

const commentsEN = [
  // 1) Friday 10.10.2025, 15.00-18.00
  {
    id: 1,
    name: "MAZIN AL-KHAFAJI",
    imageUrl: null,
    date: "Friday 10.10.2025, 15:00-18:00",
    title: "Dermatology in Chinese Medicine",
    description: "no description",
  },
  {
    id: 2,
    name: "HAMID MONTAKAB",
    imageUrl: Montakab,
    date: "Friday 10.10.2025, 15:00-18:00",
    title: "From Conception to Birth",
    description: "no description",
  },

  {
    id: 14,
    name: "ELŻBIETA HELAND",
    imageUrl: Heland,
    date: "Friday 10.10.2025, 15:00-18:00",
    title:
      "The Five Spirits as a Manifestation of One Source - Shen based on the Source Texts of Classical Chinese Medicine",
    description: `“Heaven manifests as 德 dé within me. Earth manifests as 氣 qì within me.”

This quote comes from Chapter 8 of the Ling Shu, titled “Spirit as the Root” (本神 běn shén). 德 dé refers to an inner, innate virtue or power, while 氣 qì is the vital breath, the life force. This passage encapsulates the essence of life’s origin. Later in the text, the concepts of the Five Spirits—神 shén, 魄 pò, 魂 hún, 意 yì, and 志 zhì—are explained. We will examine the meaning of these Chinese characters and their manifestations in human life—how they influence emotions, physiology, and pathology.

The second part of the lecture will focus on the practical application of this theory—how therapeutic flavors correspond with the frequency of the Five Phases (五行 wǔ xíng) and how this translates into herbs and herbal formulas that affect emotions. We will answer why each phase is associated with at least three flavors rather than just one. In doing so, we will reference passages from works such as the Ling Shu, Su Wen, Nan Jing, Shang Han Za Bing Lun, and Fu Xing Jue.
`,
  },

  // 2) Saturday 11.10.2025, 10.00-13.00 / 15.00-18.00
  {
    id: 3,
    name: "HAMID MONTAKAB",
    imageUrl: Montakab,
    date: "Saturday 11.10.2025, 10:00-13:00 / 15:00-18:00",
    title: "The 8 Extraordinary Vessels and psychological profiles",
    description: "no description",
  },

  // 3) Sunday 12.10.2025
  {
    id: 4,
    name: "MIEKE FRAUSSEN",
    imageUrl: Fraussen,
    date: "Sunday 12.10.2025, 9:30-12:30 / 13:30-16:30",
    title: "Face Reading, Trauma & Healing",
    description: `Integrating Chinese Face Reading with Western Science in TCM to Transform Trauma.

In our ongoing quest for health and well-being, Chinese Face Reading offers a fascinating perspective. This ancient pseudoscience reveals hidden insights about our personality, health, and even life path.

Every face tells a unique life story. Chinese Face Reading involves observing and interpreting various facial features such as shape, colour, texture, and the position of elements like eyes, nose, mouth, and eyebrows. These features are seen as indicators of various aspects of a person's life, including health, emotional state, temperament, personality, talents, weaknesses, and life experiences.

By linking the Five Elements to the unique features of our face, we can gain a deeper understanding of who we are and our state of health. Chinese Face Reading has been used since the inception of traditional Chinese medicine as a tool for accurate diagnosis.

As a diagnostic instrument, Chinese Face Reading allows us to identify diseases and determine innate susceptibility to certain physical, emotional, and mental conditions. Moreover, a thorough analysis of our face can alert us to potential health problems before they fully manifest, allowing us to take preventive measures and proactively care for our well-being.

However, face analysis goes beyond just physical health. It is also a powerful tool for self-reflection and personal growth. By understanding how our facial features reflect our psychological and emotional state, we can better understand ourselves and our relationships with others.

Trauma begins as early as utero, shaping our personality, decisions, and even our facial features. Trauma is not defined solely by the events themselves, but by their lasting impact on the nervous system and emotional regulation. In Chinese Face Reading, the face reflects the imprint of trauma, stored emotions, and coping mechanisms. Trauma alters our physiology, which becomes visible in facial structures, expression lines, and asymmetries.

By integrating Western insights with TCM and Chinese Face Reading, we create a powerful diagnostic tool. Decoding trauma through the face gives us deeper diagnostic accuracy and opens pathways to true healing.

This approach allows us not only to recognize trauma but also to process and transform it. This unique fusion opens new avenues to healing, transformation, and an authentic life.
`,
  },
  {
    id: 5,
    name: "JEFFREY HUI ZHANG",
    imageUrl: null,
    date: "Sunday 12.10.2025, 13:30-16:30",
    title:
      "Weiqi (Defensive Qi) and Wei-Qi (Levels): Integrating Shang Han Lun and Wen Bing",
    description: "no description",
  },

  // --- No date assigned ---
  {
    id: 6,
    name: "GIULIA BOSCHI",
    imageUrl: null,
    date: null,
    title:
      "Beyond the seven qing: the language of emotions in Classical Chinese Medicine",
    description: "no description",
  },
  {
    id: 7,
    name: "JONG BAIK",
    imageUrl: Baik,
    date: null,
    title:
      "The Three Treasures: An Explanation of the Interrelationship between Jing, Qi and Shen",
    description: `The Three Treasures:
An Explanation of the Interrelationship between Jing, Qi and Shen

Jing 精, Qi 氣, and Shen 神 are fundamental concepts underlying the two most important philosophical foundations of Traditional East Asian Medicine (TEAM) — a holistic approach and the unity of body and mind. Each has its own unique qualities, yet they cannot be completely separated. To achieve and maintain health and longevity, it is crucial to protect and cultivate these Three Treasures as the source of life.

The importance of Jing, Qi, and Shen cannot be overstated in prevention, diagnosis, management, and treatment of illnesses. A deeper understanding of these Three Treasures leads to further development of existing TEAM theories and deepens our understanding of human physiology and pathology.

This presentation will first focus on the individual characteristics of Jing, Qi, and Shen, then examine their interrelationships, and finally explore how these connections may be used to cultivate health.
`,
  },
  {
    id: 8,
    name: "JONG BAIK",
    imageUrl: Baik,
    date: null,
    title: "A Multi-Microsystems Approach to Pain and Pain Management",
    description: `Microsystems are specialized acupuncture systems that focus on stimulating specific points in particular areas of the human body to prevent and treat diseases. Microsystems are easy to learn, cost-effective, safe, and practical. They have broad applications and are widely used in diagnosis, therapy, pain management, and preventive medicine.
  
This presentation will be given from the perspective of Traditional East Asian Medicine and will explain how a multi-microsystem approach can expand treatment options, increase effectiveness, and provide a more personalized treatment plan for patients. It will then introduce several widely used microsystems and present safe and effective methods for applying them in pain management. The microsystems covered will include Hand Acupuncture, Ear Acupuncture, and Abdominal Acupuncture.
`,
  },
  {
    id: 9,
    name: "BARTOSZ CHMIELNICKI",
    imageUrl: Chmielnicki,
    date: null,
    title: "Blood and Breath: The Origins of Acupuncture",
    description:
      "How did the Chinese come to know the pathways of the meridians, the locations, and functions of acupuncture points? Was Hippocrates of Kos an acupuncturist? When and how did the story of acupuncture truly begin? Should we consider ourselves unworthy heirs to the Taoist sages who treated disease simply by manipulating Qi?\n" +
      "\n" +
      "These are questions I often hear from my students — and ones I have asked myself countless times. In this plenary lecture, I will trace the early history of acupuncture, outlining its evolution from proto-anatomical observations and bloodletting practices to the sophisticated medical system described in the Nei Jing.\n" +
      "\n" +
      "Join me on a journey across centuries, toward a pivotal moment in Chinese history: the unification of the empire, which enabled an extraordinary encounter between the brutal pragmatism of military surgeons and the cosmological insights of early Taoist thinkers.",
  },
  {
    id: 10,
    name: "YAIR MAIMON / IZABELA MIĘTKA",
    imageUrl: Mietka,
    date: null,
    title: "Acupuncture Treatment of menopause Haven, Earth perspective",
    description: "no description",
  },
  {
    id: 11,
    name: "RICARDO TEIXEIRA",
    imageUrl: Teixeira,
    date: null,
    title:
      "Workshop: Acupuncture Techniques - Adding effective tools to your Clinical Toolkit",
    description: "no description",
  },
  {
    id: 12,
    name: "MAZIN AL-KHAFAJI",
    imageUrl: null,
    date: null,
    title: "Treating Atopic Dermatitis in Infants",
    description: "no description",
  },

  // Additional lecture from Giulia Boschi (Five Spirits)
  {
    id: 13,
    name: "GIULIA BOSCHI",
    imageUrl: null,
    date: null,
    title:
      "The Five Spirits as a Manifestation of One Source - Shen based on the Source Texts of Classical Chinese Medicine",
    description: `“Heaven manifests as 德 dé within me. Earth manifests as 氣 qì within me.”

This quote comes from Chapter 8 of the Ling Shu, titled “Spirit as the Root” (本神 běn shén). 德 dé refers to an inner, innate virtue or power, while 氣 qì is the life-giving breath, the vital force. This passage encapsulates the essence of life’s origin. Later in this text, the concepts of the Five Spirits—神 shén, 魄 pò, 魂 hún, 意 yì, and 志 zhì—are explained. We will explore the etymology of these Chinese characters and how they manifest in human life—how they affect our emotions, physiology, and pathology.

The second part of the lecture focuses on the practical application of this theory—how therapeutic flavors correspond to the frequency of the Five Phases (五行 wǔ xíng), and how this translates into herbs and herbal formulas that influence emotions. We will answer why each phase is associated with at least three flavors rather than just one. In doing so, we will reference passages from works such as the Ling Shu, Su Wen, Nan Jing, Shang Han Za Bing Lun, and Fu Xing Jue.
`,
  },
];

function Example() {
  const router = useRouter();
  const comments = router.locale === "pl" ? commentsPL : commentsEN;

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {comments.map((comment) => (
        <li key={comment.id} className="flex gap-x-4 py-5">
          <Image
            className="h-16 w-16 flex-none rounded-full  object-cover bg-gray-50"
            src={comment.imageUrl}
            alt=""
          />
          <div className="flex-auto">
            <div className="flex items-baseline justify-between gap-x-4">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {comment.name}
              </p>
              <p className="flex-none text-xs text-gray-600">
                <time dateTime={comment.dateTime}>{comment.date}</time>
              </p>
            </div>
            <p className="mt-1 text leading-6 text-gray-900">{comment.title}</p>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              {comment.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

const Details = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto  max-w-3xl min-h-full text-base leading-7 text-gray-700">
          <div data-free="true" className="px-4 sm:px-0">
            <p
              // data-free="true"
              className="text-base font-semibold leading-7 mb-4 text-indigo-600"
            >
              <Link
                href="/"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {t("back")}
              </Link>
            </p>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Tematy na Kongresie
            </h2>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              Szczegółowy opis tematów, jakie będą poruszane podczas kongresu.
            </p>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <Example />
          </div>
        </div>
      </div>
    </>
  );
};
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default Details;
