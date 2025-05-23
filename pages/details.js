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
import Giulia from "@/public/images/Giulia.png";
import Zhang from "@/public/images/Zhang.png";
import Mazin from "@/public/images/Mazin.png";

//////////////////////////////////////////////
// WERSJA POLSKA
//////////////////////////////////////////////

const commentsPL = [
  // 1) Piątek 10.10.2025, godz. 15.00-18.00
  {
    id: 1,
    name: "Mazin Al-Khafaji",
    imageUrl: Mazin,
    date: null,
    title: "Dermatologia w medycynie chińskiej",
    description:
      "Choroby skóry, w ich wielu formach, są jednymi z najczęstszych schorzeń, stanowiącymi prawie 25% wszystkich wizyt u lekarza. Pomimo rozległych badań i zasobów poświęconych dermatologii, wielu pacjentów pozostaje niezadowolonych z konwencjonalnych metod leczenia i poszukuje alternatywnych rozwiązań.\n" +
      "Po czterech dekadach praktyki klinicznej jestem w pełni przekonany, że chińska medycyna ziołowa oferuje potężne i trwałe rozwiązanie dla wielu osób cierpiących na powszechne choroby skóry. Ma ona potencjał, aby przynieść niezwykłą i trwałą poprawę w przypadku uporczywych zaburzeń, takich jak trądzik, egzema, trądzik różowaty i łuszczyca. Jednak ze względu na brak specjalistycznego szkolenia i doświadczenia klinicznego, wielu praktyków medycyny chińskiej ma trudności z osiągnięciem najlepszych możliwych wyników - wyników, które są w ich zasięgu.\n" +
      "W tej krótkiej prezentacji przedstawię podstawowe zasady dermatologii w medycynie chińskiej i zbadam jej potencjał w zakresie transformacji leczenia chorób skóry.",
  },
  {
    id: 2,
    name: "HAMID MONTAKAB",
    imageUrl: Montakab,
    date: null,
    title:
      "Od poczęcia do narodzin. Akupunktura wspierająca podczas ciąży i porodu",
    description:
      "Wielu akupunkturzystów waha się przed nakłuwaniem pacjentek w okresie ciąży. Klasyczna medycyna chińska dała nam instrukcje, jak śledzić i wspomagać normalną ciążę, a także protokoły leczenia patologii, które mogą pojawić się w tym czasie.\n" +
      " \n" +
      "Ten wykład obejmuje energetykę związaną z poczęciem, 10 miesięcy księżycowych ciąży, wraz z zaleceniami dotyczącymi stylu życia, diety i akupunktury.\n" +
      " \n" +
      "Treść:\n" +
      "- Co robić, a czego nie robić w czasie ciąży. Techniki akupunktury i punkty, których należy unikać\n" +
      "- Zrozumienie energetyki związanej z ciążą \n" +
      "- Przebieg ciąży z miesiąca na miesiąc\n" +
      "- Trzy najważniejsze etapy\n" +
      "- Przygotowanie do porodu\n" +
      "- Wspomaganie porodu za pomocą akupunktury",
  },
  {
    id: 14,
    name: "ELŻBIETA HELAND",
    imageUrl: Heland,
    date: null,
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
    date: null,
    title: "8 Kanałów Cudownych oraz profile psychologiczne",
    description:
      "Kanały cudowne wspierają rozwój Jing (Esencji) od pierwszego momentu poczęcia i koordynują różne etapy życia i transformacje zgodnie ze zdeponowanym „Ming” (Mandatem Życia). W ten sposób odgrywają kluczową rolę w psycho-duchowej ewolucji człowieka, a także w jego rozwoju fizycznym..\n" +
      "\n" +
      "Treść:\n" +
      "1. Rola Naczyń Nadzwyczajnych w fizycznym, emocjonalnym i psychiczno-duchowym rozwoju człowieka.\n" +
      "2. objawy, profile psychologiczne i strategie terapeutyczne .\n" +
      "3. Rozwój Jing; proces starzenia się .\n" +
      "4. Zastosowania kliniczne\n" +
      "5. Studia przypadków",
  },

  // 3) Niedziela 12.10.2025
  {
    id: 4,
    name: "MIEKE FRAUSSEN",
    imageUrl: Fraussen,
    date: null,
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
    imageUrl: Zhang,
    date: null,
    title:
      "Weiqi (Qi obronne) i Wei-Qi (poziomy): Integracja Shang Han Lun i Wen Bing",
    description:
      "Wei Qi krąży poza naczyniami krwionośnymi, podczas gdy Ying Qi przepływa w ich obrębie. Wei Qi pełni rolę pierwszej linii obrony organizmu przed zewnętrznymi patogenami, porównywalnie do układu odpornościowego, i jest ściśle związane z układem nerwowym, regulując temperaturę, pocenie się i rytmy okołodobowe. Z kolei Ying Qi odżywia ciało poprzez krew i inne substancje Yin.\n" +
      "\n" +
      "Treść wykładu:\n" +
      "\n" +
      "Głęboka analiza Wei Qi: spostrzeżenia na podstawie klasycznych tekstów i teorii meridianów\n" +
      "Podejście w ziołolecznictwie: Ma Huang Tang i jego modyfikacje\n" +
      "Strategie akupunktury i moksoterapii\n" +
      "Wei Qi a współczesna odporność: zastosowania w zapobieganiu COVID-19 i leczeniu jego następstw\n" +
      "Wei Qi a zaburzenia układu nerwowego: powiązania z chorobami psychicznymi\n" +
      "Co wyniesiesz z wykładu?\n" +
      "\n" +
      "Zrozumienie Wei Qi z perspektywy klasycznej i współczesnej\n" +
      "Praktyczne leczenie akupunkturą i medycyną ziołową w przypadku zaburzeń układu odpornościowego i nerwowego\n" +
      "Pożyteczność integracji teorii Shang Han Lun i Wen Bing w praktyce klinicznej",
  },

  // --- Bez daty (lub nieustalone) ---
  {
    id: 6,
    name: "GIULIA BOSCHI",
    imageUrl: Giulia,
    date: null,
    title: "Poza siedmioma qing: język emocji w klasycznej medycynie chińskiej",
    description:
      "Tradycyjna medycyna chińska (TCM) studiowana obecnie na uniwersytetach to ustandaryzowane podejście, które kategoryzuje różne aspekty emocjonalne w ustalone klasyfikacje: siedem emocji (qī qíng七情), pięć skłonności lub dyspozycji (wǔ zhì 五志) oraz pięć dusz lub duchów (wǔ shén 五神). Każdy aspekt jest wyraźnie powiązany ze sferą funkcjonalną pojedynczego organu. W przeciwieństwie do tego, Klasyczna Medycyna Chińska (CCM), zwłaszcza opisana w Wewnętrznym Kanonie Żółtego Cesarza, zapewnia znacznie bardziej zniuansowaną i mniej sztywną perspektywę. Uznaje zarówno czynniki egzystencjalne, jak i nieświadome, rozróżnia różne wyrażenia tej samej fundamentalnej emocji - z których każda ma unikalny wpływ na ciało - i uznaje, że określone uczucie może wpływać na różne narządy.\n" +
      "W tym kursie będziemy pracować nad odzyskaniem jasnego zrozumienia klasycznej terminologii związanej z emocjami. Pomoże nam to zagłębić się w złożoność ludzkiej duszy i lepiej zająć się egzystencjalnymi realiami tych, którzy szukają naszej pomocy.",
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
    description:
      "Niebo - transformacja Shen, \n" +
      "Ziemia - wspieranie Jing i kanały cudowne \n" +
      "\n" +
      "Menopauza to czas transformacji dla kobiety. Ta naturalna zmiana może być wspierana na wiele sposobów. W medycynie chińskiej jest ona przede wszystkim związana ze zmianami w Niebie (Shen) i na Ziemi (Jing i Chong).\n" +
      "\n" +
      "Z perspektywy Nieba zmiana ta obejmuje związek między Shen i Jing, reprezentując głęboką transformację i inspirację. Patologie na tym poziomie mogą objawiać się lękiem, depresją, frustracją i bezsennością. Leczenie koncentruje się na transformacji przy użyciu punktów Shen i Jing.\n" +
      "\n" +
      "Z ziemskiej perspektywy zmiany w Jing i Chong mogą powodować objawy takie jak suchość, uderzenia gorąca, nocne poty i spowolniony metabolizm. W przypadku leczenia antyestrogenowego nowotworów hormonododatnich mogą wystąpić dodatkowe objawy, takie jak bóle stawów i bardziej intensywne uderzenia gorąca. Liczne badania wykazały, że akupunktura jest wysoce skuteczna w leczeniu tych objawów. Podczas wykładu omówione zostaną wyniki badań  oraz  stosowane punkty akupunkturowe.\n" +
      "\n" +
      "Wykład ten podkreśli niebiańskie i ziemskie perspektywy, oferując praktyczną strategię leczenia i wybór punktów.",
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
    imageUrl: Mazin,
    date: null,
    title: "Leczenie atopowego zapalenia skóry u niemowląt",
    description:
      "Atopowe zapalenie skóry (AZS), najczęstsza forma egzemy, osiągnęła poziom epidemii, dotykając około 30% dzieci. Stanowi to 2- do 3-krotny wzrost w ciągu ostatnich kilku dekad. AZS jest często powiązane z innymi schorzeniami ogólnoustrojowymi, w tym astmą, alergicznym nieżytem nosa i alergiami pokarmowymi, co czyni je istotnym problemem w opiece pediatrycznej.\n" +
      "Dzięki czterdziestoletniemu doświadczeniu klinicznemu w leczeniu tego schorzenia stwierdziłem, że chińska medycyna ziołowa jest wysoce skuteczna we wszystkich grupach wiekowych. Jednak, podobnie jak w przypadku innych schorzeń dotykających niemowlęta - takich jak astma i alergie pokarmowe - najlepsze długoterminowe wyniki osiąga się, gdy leczenie rozpoczyna się wcześnie. Jest to zgodne z zasadą, że wczesna interwencja w systemy biologiczne promuje większą stabilność i trwałą poprawę.\n" +
      "W tym wykładzie przedstawię podstawowe zasady leczenia niemowląt z atopowym zapaleniem skóry i omówię znaczenie terminowej, skutecznej interwencji.",
  },

  // Dodatkowy wykład Giulii Boschi (Pięć Duchów) – również bez daty
  {
    id: 13,
    name: "GIULIA BOSCHI",
    imageUrl: Giulia,
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
    imageUrl: Mazin,
    date: null,
    title: "Dermatology in Chinese Medicine",
    description:
      "Skin disorders, in their many forms, are among the most common medical conditions, accounting for nearly 25% of all doctor visits. Despite the extensive research and resources dedicated to dermatology, many patients remain dissatisfied with conventional treatments and seek alternative solutions.\n" +
      "\n" +
      "After four decades of clinical practice, I am fully convinced that Chinese herbal medicine offers a powerful and lasting solution for many individuals suffering from common skin conditions. It has the potential to bring about remarkable and enduring improvements in persistent disorders such as acne, eczema, rosacea, and psoriasis. However, due to a lack of specialized training and clinical experience, many practitioners of Chinese medicine struggle to achieve the best possible outcomes—results that are well within their reach.\n" +
      "\n" +
      "In this brief presentation, I will outline the fundamental principles of dermatology in Chinese medicine and explore its potential to transform the treatment of skin diseases.",
  },
  {
    id: 2,
    name: "HAMID MONTAKAB",
    imageUrl: Montakab,
    date: null,
    title: "From Conception to Birth",
    description:
      "Acupuncture support during pregnancy and birth\n" +
      "\n" +
      " \n" +
      "\n" +
      "Many acupuncturists feel hesitant about needling patients during the gestational period. Classical Chinese medicine has given us instructions as how to follow and assist a normal pregnancy, as well as treatment protocols for pathologies that may arise during this time.\n" +
      "\n" +
      " \n" +
      "\n" +
      "This lecture covers the energetics involved in conception, the 10 lunar months of pregnancy, with life-style, dietary and acupuncture recommendations.\n" +
      "\n" +
      " \n" +
      "\n" +
      "Contents:\n" +
      "\n" +
      "-       Do’s and don'ts during pregnancy. Acupuncture techniques and points to avoid\n" +
      "\n" +
      "-       Understanding the energetics involved in pregnancy \n" +
      "\n" +
      "-       Following a normal pregnancy month-to-month\n" +
      "\n" +
      "-       The three most important stages\n" +
      "\n" +
      "-       Preparation for birth\n" +
      "\n" +
      "-       Assisting birth with acupuncture\n" +
      "\n" +
      "-       Treatment of possible complications",
  },

  {
    id: 14,
    name: "ELŻBIETA HELAND",
    imageUrl: Heland,
    date: null,
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
    date: null,
    title: "The 8 Extraordinary Vessels and psychological profiles",
    description:
      "The 8 Extraordinary Vessels and Psychological profiles\t\n" +
      "\n" +
      'The Extraordinary Vessels carry out the unfolding of Jing (Essence) from the first moment of conception, and coordinate the various life stages and transformations according to the deposited "Ming" (Life Mandate). In this manner the Extraordinary Vessels play a crucial role in the psycho-spiritual evolution of the individual, as well as in their physical conditions.\n' +
      "\n" +
      "Content:\n" +
      "1. Role of the Extraordinary in the Physical, Emotional and Psycho-spiritual development of the individual. \n" +
      "2. Pathways, symptoms, psychological profiles and therapeutic strategies\n" +
      "3. The unfolding of Jing; the aging process\n" +
      "4. Clinical applications\n" +
      "5. Case studies",
  },

  // 3) Sunday 12.10.2025
  {
    id: 4,
    name: "MIEKE FRAUSSEN",
    imageUrl: Fraussen,
    date: null,
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
    imageUrl: Zhang,
    date: null,
    title:
      "Weiqi (Defensive Qi) and Wei-Qi (Levels): Integrating Shang Han Lun and Wen Bing",
    description:
      "Abstract\n" +
      "Wei Qi circulates outside the blood vessels, while Ying Qi flows within. Wei Qi serves as the body's first defense against external pathogens, akin to the immune system, and is closely related to the nervous system, regulating temperature, sweating, and circadian rhythms. Ying Qi, on the other hand, nourishes the body as blood and other Yin substances.\n" +
      "\n" +
      "Course Content\n" +
      "Deep exploration of Wei Qi: insights from classical texts and meridian theory\n" +
      "\n" +
      "Herbal medicine treatments: Ma Huang Tang and its modifications\n" +
      "\n" +
      "Acupuncture and moxibustion strategies\n" +
      "\n" +
      "Wei Qi and modern immunity: applications for COVID-19 prevention and sequelae treatment\n" +
      "\n" +
      "Wei Qi and nervous system disorders: links to psychological diseases\n" +
      "\n" +
      "What Can You Learn from the Course?\n" +
      "Understanding Wei Qi from both classical and modern perspectives\n" +
      "\n" +
      "Practical acupuncture and herbal medicine treatments for immune and nervous system disorders\n" +
      "\n" +
      "Insights into integrating Shang Han Lun and Wen Bing theories in clinical practice",
  },

  // --- No date assigned ---
  {
    id: 6,
    name: "GIULIA BOSCHI",
    imageUrl: Giulia,
    date: null,
    title:
      "Beyond the seven qing: the language of emotions in Classical Chinese Medicine",
    description:
      " Traditional Chinese Medicine (TCM) studied in universities today is a standardized approach that categorizes various emotional aspects into fixed classifications: the seven emotions (qī qíng七情), five propensities or dispositions（wǔ zhì 五志, and five souls or spirits (wǔ shén 五神). Each aspect is linked explicitly to the functional sphere of a single organ. In contrast, Classical Chinese Medicine (CCM), especially as described in the Internal Canon of the Yellow Emperor, provides a much more nuanced and less rigid perspective. It acknowledges both existential and unconscious factors, differentiates between various expressions of the same fundamental emotion—each with its unique impact on the body—and recognizes that a particular feeling can influence different organs.\n" +
      "\n" +
      "In this course, we will work to reclaim a clear understanding of classic terminology related to emotions. This will help us delve into the complexity of the human soul and better address the existential realities of those who seek our help.",
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
    description:
      "Subtitle \n" +
      "\n" +
      "Heaven – Shen transformation, Earth- supporting Jing and extra meridians \n" +
      "\n" +
      "\n" +
      "\n" +
      "Menopause is a transformative time for a woman. This natural change can be supported in many ways. In Chinese medicine, it is primarily related to changes in Heaven (Shen) and Earth (Jing and Chong).\n" +
      "\n" +
      "\n" +
      "\n" +
      "From a Heavenly perspective, this change involves the relationship between the Shen and Jing, representing a deep transformation and inspiration. Pathologies at this level may manifest as anxiety, depression, frustration, and insomnia. Treatment focuses on transformation using Shen and Jing points.\n" +
      "\n" +
      "\n" +
      "\n" +
      "From an Earthly perspective, the changes in Jing and Chong can cause symptoms such as dryness, hot flashes, night sweats, and slowed metabolism. In cases of anti-estrogen treatments for hormone-positive cancers, additional symptoms like joint pain and more intense hot flashes may occur. Numerous studies have shown that acupuncture is highly effective for managing these symptoms. The lecture will discuss the evidence and the acupuncture points used.\n" +
      "\n" +
      "\n" +
      "\n" +
      "This lecture will emphasize the Heavenly and Earthly perspectives, offering a practical treatment strategy and point selection.",
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
    imageUrl: Mazin,
    date: null,
    title: "Treating Atopic Dermatitis in Infants",
    description:
      "Atopic dermatitis (AD), the most common form of eczema, has reached epidemic levels, affecting an estimated 30% of children. This represents a 2- to 3-fold increase over the past few decades. AD is often linked to other systemic conditions, including asthma, allergic rhinitis, and food allergies, making it a significant concern in paediatric care.\n" +
      "\n" +
      "With four decades of clinical experience managing this condition, I have found Chinese herbal medicine to be highly effective across all age groups. However, as with other conditions that affect infants - such as asthma and food allergies - the best long-term outcomes are achieved when treatment begins early. This aligns with the principle that early intervention in biological systems promotes greater stability and sustained improvement.\n" +
      "\n" +
      "In this talk, I will outline the fundamental principles of treating infants with atopic dermatitis and discuss the importance of timely, effective intervention.",
  },

  // Additional lecture from Giulia Boschi (Five Spirits)
  {
    id: 13,
    name: "GIULIA BOSCHI",
    imageUrl: Giulia,
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
    <ul role="list" className="mx-auto max-w-3xl divide-y divide-gray-200">
      {comments.map((comment) => (
        <li key={comment.id} className="flex items-start gap-6 py-8">
          <div className="flex-shrink-0">
            <Image
              src={comment.imageUrl}
              alt={comment.name}
              width={128}
              height={128}
              className="w-32 h-32 rounded-lg object-cover object-top"
            />
          </div>

          {/* Sekcja tekstowa */}
          <div className="flex-auto">
            <div className="flex items-baseline justify-between">
              <p className="text-lg font-semibold leading-7 text-gray-900">
                {comment.name}
              </p>
              <p className="text-xs text-gray-600">
                <time dateTime={comment.dateTime}>{comment.date}</time>
              </p>
            </div>
            <p className="mt-2 text-base font-medium leading-7 text-gray-900">
              {comment.title}
            </p>
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
        <div className="mx-auto max-w-4xl min-h-full text-lg leading-8 text-gray-700">
          <div data-free="true" className="px-4 sm:px-0">
            <p className="text-base font-semibold leading-7 mb-4 text-indigo-600">
              <Link
                href="/"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm
                           hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
                           focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {t("back")}
              </Link>
            </p>
            <h2 className="text-2xl font-bold leading-8 text-gray-900">
              Tematy na Kongresie
            </h2>
            <p className="mt-2 max-w-2xl text-lg leading-8 text-gray-600">
              Szczegółowy opis tematów, jakie będą poruszane podczas kongresu.
            </p>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-8">
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
    },
  };
}

export default Details;
