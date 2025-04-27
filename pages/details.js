"use client";

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
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Link from "next/link";

const commentsPL = [
  {
    id: 1,
    name: "RICARDO TEIXEIRA",
    imageUrl: Teixeira,
    // date: "13-10-2013",
    title: "Spojrzenie długodystansowe: ewolucja Shen na przestrzeni czasu",
    description:
      "              Zgodnie z teorią ewolucji, różne emocje wykształcały się w różnym\n" +
      "              czasie. Zatem niniejsza prezentacja ma na celu przedstawienie\n" +
      "              perspektywy tradycyjnej medycyny chińskiej (TMC) na ewolucję\n" +
      "              emocji w różnych okresach, a zmieniały się one często (czasem\n" +
      "              bardzo dramatycznie) w odpowiedzi na nowe oczekiwania i idee\n" +
      "              kulturowe. Może to przynieść wiele pytań... Czy to my zmieniamy\n" +
      "              nasze emocje? Czy ludzkie emocje stają się różne na przestrzeni\n" +
      "              różnych pokoleń?... Mówić o emocjach to mówić o Shen. Niełatwo\n" +
      "              jest ująć w słowa, to, co oznacza ‘Shen’ – w prostych słowach jest\n" +
      "              naszą reakcją na wszelkie bodźce zewnętrzne i wewnętrzne, i\n" +
      "              reprezentuje wszystkie nasze emocje i unikalne cechy. Shen to\n" +
      "              funkcje słuchania, czucia, smakowania, widzenia... krótko mówiąc,\n" +
      "              funkcje, które ujawniają pojmowanie odnoszące się do otoczenia i\n" +
      "              do nas samych. Funkcje, które są świadome, dla których świadkiem\n" +
      '              jest aktywne "ja". Jest to energia współczucia, wglądu i empatii.\n' +
      "              Shen jest energią, która nas łączy, tworzy relacje i pozwala nam\n" +
      "              realizować nasz najwyższy potencjał. Zrozumienie dynamiki ludzkich\n" +
      "              emocji może pomóc nam w byciu lepszymi terapeutami i tworzyć\n" +
      "              lepsze wytyczne leczenia.",
  },
  {
    id: 2,
    name: "RICARDO TEIXEIRA",
    imageUrl: Teixeira,
    // date: "14-10-2013",
    title: "Kreatywne Hun. W jaki sposób Hun wpływa na nasze życie",
    description:
      "„Kreatywność to inteligencja, która dobrze się bawi”.\n" +
      "Albert Einstein\n" +
      ".\n" +
      "Zgodnie z neuronauką, kreatywność jest związana z naszą zdolnością do widzenia przyszłości... zaś\n" +
      "medycyna chińska postrzega kreatywność jako proces przypisany przemianie Drzewa. Jest ona związana\n" +
      "z Wątrobą, która z kolei jest narządem powiązanym z planowaniem i podejmowaniem decyzji. Przemiana\n" +
      'Drzewna ma związek z ideą "widzenia przyszłości" – bycia zdolnym do myślenia naprzód i planowania\n' +
      "przyszłości. Jest też związana z umiejętnością generowania nowych pomysłów, czynienia planów na\n" +
      'przyszłość i podejmowania działań. Przemiana Drzewa jest również związana z ideą "widzenia lasu dla\n' +
      'drzew" – umiejętności łączenia kropek w większy obraz i widzenia w szerszym kontekście.\n' +
      "Hun rządzi impulsami życiowymi i ich ruchami, pozwala na komunikację, wyrażanie pragnień,\n" +
      "pomysłów i kreatywności oraz aktywuje naszą zdolność do odnoszenia się do siebie. Jest obecne na\n" +
      "wszystkich etapach życia. To Hun daje nam emocjonalne konotacje do fizycznych doświadczeń. Hun jest\n" +
      "niezbędne dla przepływu życia i zdolności do poruszania się przez nie z łatwością. Jest to ważna część\n" +
      "naszego życia, którą można pielęgnować i rozwijać, co może pomóc nam osiągać cele i nawigować\n" +
      "naszym życiem.\n" +
      "Hun nadaje ruch umysłowi, który łączy myślenie z intuicją, jest połączony z podświadomością,\n" +
      "marzeniami, pragnieniami, wszystkimi naszymi przeszłymi doświadczeniami oraz kolejnymi zmianami,\n" +
      "jakie zachodzą w naszym życiu. Hun ma zdolność przychodzenia i odchodzenia, dzięki czemu możliwa\n" +
      "jest projekcja, a także otrzymywanie projekcji od innych. Ruch ten zapewnia relacje, w których skupiamy\n" +
      "się na innych i na sobie.\n" +
      "Podczas wykładu zajmiemy się wpływem, jaki Hun ma na wszystkie składowe naszego życia, jego relacją\n" +
      "z innymi Jing Shen, czyli aspektami ducha, takimi jak Shen, Zhi, Po i Yi. Omówimy też patologie\n" +
      "związane z brakiem równowagi Hun oraz punkty akupunkturowe wpływające na Hun.",
  },

  {
    id: 3,
    name: "RANI AYAL",
    imageUrl: Ayal,
    // date: "14-10-2013",
    title: "Pieśń Jadeitowego Smoka: 12 magicznych punktów",
    description:
      "Dwanaście punktów, „lśniących jasno niczym gwieździste niebo i będących w stanie leczyć wiele\n" +
      "chorób” (Ma Dan-yang, Jin dynasty).\n" +
      "Pieśń Jadeitowego Smoka to wiersz przypisywany słynnemu taoistycznemu kapłanowi i\n" +
      "akupunkturzyście, Ma Dan-yangowi:\n" +
      "„360 punktów nie wykracza poza zakres 12\n" +
      "w leczeniu chorób,\n" +
      "rezultaty niczym magia – jak gdyby rozprysnąć gorącą wodę\n" +
      "ponad śniegiem\n" +
      "iedy Wielki Wóz się obniża, pojawia się pomyślny moment; zamki\n" +
      'wszystkich drzwi są otwarte".\n' +
      "Na wykładzie omówimy dwanaście magicznych punktów:\n" +
      "– Co czyni je tak wyjątkowymi?\n" +
      "– Dlaczego czas jest ważnym czynnikiem w akupunkturze?\n" +
      "– Jak prawidłowo zlokalizować i nakłuć punkty?\n" +
      "– Jakie jest ich znaczenie kliniczne w naszym współczesnym świecie?",
  },
  {
    id: 4,
    name: "YAIR MAIMON",
    imageUrl: Maimon,
    // date: "14-10-2013",
    title: "Regulowanie układu odpornościowego w TMC",
    description:
      "Układ odpornościowy jest najbardziej złożonym spośród układów w organizmie, i odgrywa ważną rolę w\n" +
      "zapobieganiu chorobom, ich przebiegu i powrocie do zdrowia.\n" +
      "Podczas wykładu dr Yair Maimon wykorzysta swoje ogromne doświadczenie z zakresu leczenia\n" +
      "pacjentów chorych na raka, z obniżoną odpornością, a wiedzę związaną z układem odpornościowym u\n" +
      "osób zdrowych.\n" +
      "Wykład pomoże wypełnić lukę w sposobie, w jaki pojmujemy odporność w medycynie zachodniej, a\n" +
      "także dotknie koncepcji witalności. Będzie zawierał kilka praktycznych wskazówek z zakresu\n" +
      "akupunktury i ziołolecznictwa.\n" +
      "Nauczysz się: Podstaw leczenia akupunkturą dla układu odpornościowego w oparciu o badania i dowody\n" +
      "skuteczności, przykładowych ziół i formuł ziołowych dla odporności, opisywania koncepcji Wei Qi, Jing\n" +
      "Qi, Shen Qi, Shen Qi – na przykładzie leczenia lęku i depresji, a także odnośnej koncepcji odporności.",
  },
  {
    id: 6,
    name: "HAMID MONTAKAB",
    imageUrl: Montakab,
    // date: "14-10-2013",
    title:
      "Postępowanie w alergiach sezonowych i przewlekłych w praktyce klinicznej",
    description:
      "Alergie, a w szczególności katar sienny, należą do najszybciej rozwijających się stanów patologicznych\n" +
      'na świecie. Dziedziczone "atopowe" schorzenia dotykają dzieci we wczesnym wieku i w niektórych\n' +
      "przypadkach mogą okazać się nawet znacząco upośledzające jakość życia.\n" +
      "Medycyna chińska, a w szczególności akupunktura, są bardzo skuteczne w zwalczaniu nie tylko objawów\n" +
      "w fazie ostrej, ale także w leczeniu głębszych korzeni tych dolegliwości.\n" +
      "Prezentowany warsztat obejmuje:\n" +
      "– Energetykę głowy z uwzględnieniem portali sensorycznych, ucha, nosa, gardła i oczu\n" +
      "– Fizjopatologię, zasady diagnostyczne i terapeutyczne\n" +
      "– Praktyczne strategie: alergiczny nieżyt nosa; astma alergiczna.",
  },
  {
    id: 7,
    name: "HAMID MONTAKAB",
    imageUrl: Montakab,
    // date: "14-10-2013",
    title: "Sztuka starzenia się z wdziękiem i umierania w łasce",
    description:
      "Cykle życia a osiem naczyń nadzwyczajnych\n" +
      "\n" +
      "Osiem naczyń nadzwyczajnych obejmuje i reguluje rozmaite stadia naszego rozwoju na poziomach\n" +
      "fizycznym, psychicznym i mentalnym.\n" +
      "Podobnie do pór roku w naturze, każde stadium życia ma przypisany własny, specyficzny cel.\n" +
      'Zgodnie z założeniami daoistycznymi, każda jednostka ma z góry ustalone „Ming", inaczej życiowy\n' +
      "mandat/program nauczania do wypełnienia.\n" +
      "Brak świadomości owego Ming jest źródłem trudności, jakich większość osób doświadcza w związku z\n" +
      "procesem starzenia się i umierania. Naczynia nadzwyczajne pomagają koordynować ludzką psychikę z\n" +
      "naturalnym fizjologicznym słabnięciem. Ich zastosowanie można zalecić w celu radzenia sobie z brakiem\n" +
      "akceptacji i strachem przed starzeniem się.\n" +
      "Sekretem starzenia się z wdziękiem jest odkrycie znaczenia jesieni i zimy w cyklach życia oraz\n" +
      "uświadomienie sobie i przyjęcie naszego duchowego wymiaru.\n" +
      "Spis zagadnień:\n" +
      "Cztery sezony życia\n" +
      "Mandat życiowy: Ming\n" +
      "Cykle Jing i Shen\n" +
      "Naczynia nadzwyczajne w powiązaniu z różnymi stadiami i transformacjami w ciągu życia\n" +
      "Trudności związane ze starzeniem się: brak akceptacji dla zmiany; trudności z odpuszczaniem przeszłości\n" +
      "i wybaczaniem; niedokończone sprawy; osłabienie na poziomach fizycznym i mentalnym\n" +
      "Strach przed śmiercią\n" +
      "Sekret starzenia się z wdziękiem i umierania w łasce: inteligencja duchowa\n" +
      "Wybrane strategie akupunkturowe.",
  },
  {
    id: 8,
    name: "DR LI JIE",
    imageUrl: Jie,
    // date: "14-10-2013",
    title: "Akupunktura Ling Shu Jing. Co i dlaczego?",
    description:
      "„Czy za pomocą akupunktury można leczyć wszystkie złożone i trudne choroby współczesne?” To\n" +
      "pytanie może często pojawiać się u wielu z nas, po studiowaniu lub praktykowaniu akupunktury przez\n" +
      "jakiś czas. Co nam umknęło i czego musimy się jeszcze nauczyć? Autentycznej, oryginalnej akupunktury\n" +
      "klasycznej.\n" +
      "Czym jest klasyczna akupunktura Ling Shu Jing? Dlaczego musimy ją dziś studiować i praktykować? W\n" +
      "odpowiedzi na te pytania zostaną omówione następujące zagadnienia:\n" +
      'Akupunktura Ling Shu Jing nie jest „An Acupuncture (akupunkturą anatomiczną)", ale "I Acupuncture\n' +
      '(akupunkturą informacji życia)". - Ling Shu Jing Rozdział 1.\n' +
      "Jak pierwotnie wytworzyły się meridiany?\n" +
      "Znaczenie natury meridianów i akupunktury, a nie ich funkcji i działania.\n" +
      "Akupunktura jest potężną terapią w leczeniu chorób Zang Fu. A jak dokonać kombinacji punktów\n" +
      "akupunktury według meridianów i mechanizmów patologicznych?\n" +
      "Diagnoza pulsu jest wytyczną dla leczenia chorób Zang Fu za pomocą akupunktury, służy też ocenie\n" +
      "leczenia w praktyce klinicznej.\n" +
      "Zastosowanie teorii Yin Yang Wu Xing w klinice.\n" +
      "Wprowadzenie klasycznych metod Jie Jing (powiązań meridianów) i Ling Shu Jing – Geometrycznej\n" +
      "Akupunktury.\n" +
      "Metody nakłuwania – Ling Shu Jing Bu (tonizujące) i Xie (redukujące): Co to tak naprawdę znaczy? ‘Bu’\n" +
      "co? ‘Xie’ co?\n" +
      "Jak stosować zasady akupunktury Ling Shu Jing: ‘Dla chorób w górnym aspekcie ciała, użyj punktów\n" +
      "dolnych; dla chorób w dolnym aspekcie ciała, użyj punktów górnych; dla chorób po lewej, użyj punktów\n" +
      "po prawej; dla chorób po prawej, użyj punktów po lewej; dla chorób wewnętrznych, użyj czterech\n" +
      "punktów bocznych'.",
  },
  {
    id: 9,
    name: "JONG BAIK",
    imageUrl: Baik,
    // date: "14-10-2013",
    title:
      "Koreańska Terapia Dłoni (KHT) dla problemów ginekologicznych,\n" +
      "niepłodności i wspomaganego zachodzenia w ciążę",
    description:
      "Problemy ginekologiczne i niepłodność z perspektywy tradycyjnej medycyny Azji Wschodniej (TEAM)\n" +
      "Jing reprodukcyjne a niepłodność\n" +
      "Wprowadzenie do koreańskiej akupunktury, akupresury i moksowania dłoni (KHT)\n" +
      "Trzy główne teorie\n" +
      "Możliwe mechanizmy leżące u podstaw KHT\n" +
      "Techniki leczenia\n" +
      "Badania nad KHT i zaburzeniami ginekologicznymi\n" +
      "Ważne punkty KHT i zalecane protokoły\n" +
      "Tradycyjna Medycyna Azji Wschodniej (TEAM) ma długą historię leczenia problemów ginekologicznych\n" +
      "i niepłodności. Istnieje wiele informacji na temat patologii chorób i leczenia zdrowia kobiet. Jednak\n" +
      "perspektywa TEAM różni się zasadniczo od medycyny zachodniej.\n" +
      "Koreańska Terapia Ręki jest wszechstronnym i dynamicznym systemem mikroakupunktury, który jest\n" +
      "prosty do nauczenia się i łatwy do włączenia w praktykę kliniczną. Stanowi praktyczną i wygodną opcja\n" +
      "leczenia, ponieważ łatwo jest stosować ją w autoterapii.\n" +
      "Szereg badań nad KHT koncentruje się na zaburzeniach ginekologicznych. Wyniki kilku z nich sugerują,\n" +
      "że KHT może być korzystna w łagodzeniu zespołu napięcia przedmiesiączkowego, objawów\n" +
      "towarzyszących miesiączce czy menopauzie. Większość z tych badań była prowadzona przy użyciu\n" +
      "nieinwazyjnych technik leczenia, takich jak moksowanie i krążki akupresurowe. Dlatego KHT wydaje się\n" +
      "być rozsądną opcją do rozważenia dla kobiet i osób, które mają obawy przed bardziej inwazyjną terapią.\n" +
      "Niniejsza prezentacja bada problemy ginekologiczne i niepłodność z perspektywy tradycyjnej medycyny\n" +
      "Azji Wschodniej. Przedstawia możliwości i zalety KHT jako opcji leczenia i podkreśla jej\n" +
      "wszechstronność i dobrze zdefiniowane teorie. Zawierać będzie ważne punkty KHT i zalecane protokoły.",
  },
  {
    id: 10,
    name: "JONG BAIK",
    imageUrl: Baik,
    // date: "14-10-2013",
    title: "Wprowadzenie do Trzech Skarbów",
    description:
      "(10-minutowa prezentacja)\n" +
      "Jing 精, Qi 氣 i Shen 神 to zasadnicze pojęcia leżące u podstaw dwóch najważniejszych koncepcji\n" +
      "filozoficznych tradycyjnej medycyny Azji Wschodniej (TEAM), podejścia holistycznego oraz syntezy\n" +
      "ciała i umysłu. Mają one swoje cechy wyróżniające, ale nie można ich całkowicie rozdzielić. Jing, Qi i\n" +
      "Shen, leżące u podstaw życia, muszą być chronione i pielęgnowane, jeśli chcemy osiągnąć i utrzymać\n" +
      "zdrowie oraz długowieczność.\n" +
      "Wartość Trzech Skarbów jest nie do przecenienia w zapobieganiu, diagnozowaniu, rarządzaniu i leczeniu\n" +
      "chorób. Głębsze zrozumienie Trzech Skarbów doprowadzi również do dalszego udoskonalenia\n" +
      "istniejących systemów teoretycznych TEAM i przyczyni się do pogłębienia naszego zrozumienia\n" +
      "fizjologii i patologii istot ludzkich.",
  },
  {
    id: 11,
    name: "Dorota łapa",
    imageUrl: Lapa,
    // date: "14-10-2013",
    title:
      "Jak oczyszczać dietą osoby z niedoborami?\n" +
      "Oczyszczanie z wykorzystaniem podstaw wzmacniania Qi i Krwi wg medycyny chińskiej.",
    description:
      "Zapraszam Was na wykład podczas którego podzielę się z Wami wieloletnimi doświadczeniami z prowadzenia procesów oczyszczania dietą.\n" +
      "Kiedy 12 lat temu rozpoczynałam korzystanie z oczyszczania prowadzonego dietą warzywną wg wskazań i książki dr Renaty Collier,tak jak większość z nas korzystających z wiedzy medycyny chińskiej, wiedziałam przede wszystkim, że ten pomysł pozwala nam zabezpieczyć Qi śledziony. Lata organizowania wyjazdowych warsztatów przeprowadziło mnie przez doświadczenia, które zainspirowały mnie do doskonalenia i wprowadzania  różnych dodatkowych elementów do tego procesu, tak by jeszcze lepiej i świadomiej radzić sobie w sytuacjach, gdy post powinny przeprowadzać Osoby niedoborowe, z Niedoborami, Yang, Qi i Xue.\n" +
      "Przedstawię proste, gotowe procedury, które wypracowałam  prawdopodobnie na znanych Wam metodach, a osobiście gotując i badając Pacjentów podczas każdego procesu, mogłam przekonać się o efektywności i uzdrawiających właściwościach, które wsparły samych Pacjentów i nauczyły Ich zdrowszego stylu życia.\n" +
      "\n" +
      "Moje doświadczenie dziś myślę, że może juz opiewać na około 800 oczyszczonych bezpiecznie Osób. \n" +
      "\n" +
      "Dlatego zapraszam do wysłuchania i dyskusji podczas naszego Kongresu.",
  },
  {
    id: 12,
    name: "Bożena Olszowska",
    imageUrl: Olszowska,
    // date: "14-10-2013",
    title: "CHIŃSKA SZTUKA CZYTANIA Z TWARZY- przejrzeć wszystko na wylot",
    description:
      "W Kiang Xiang( chińska sztuka odczytywania rysów twarzy) odnajdujemy koncepcję Yin Yang, Pięciu Elementów,  5 Gór, podziału na Trzy( Niebo, Człowiek, Ziemia), 12 Pałaców itd. \n" +
      "\n" +
      "Starożytni Mędrcy Chińscy podzielili twarz na oszałamiającą liczbę sekcji. Możemy w nich odnaleźć ponad 130 indywidualnych cech fizycznych, uwarunkowań psychicznych, emocjonalnych i duchowych.\n" +
      "\n" +
      "Każda twarz ma własną historie, a chińska sztuka czytania z twarzy uczy jak interpretować poszczególne cechy, linie , zmarszczki i pomaga odkryć nieznane wcześniej cechy osobowości.",
  },
];

const commentsEN = [
  {
    id: 1,
    name: "RICARDO TEIXEIRA",
    imageUrl: Teixeira,
    // "date": "13-10-2013",
    title: "Long-Distance Look: The Evolution of Shen Over Time",
    description:
      "According to the theory of evolution, different emotions developed at different\n" +
      "times. Hence, this presentation aims to present\n" +
      "the perspective of Traditional Chinese Medicine (TCM) on the evolution\n" +
      "of emotions at different periods, and they often changed (sometimes\n" +
      "very dramatically) in response to new expectations and cultural ideas. It may raise many questions... Do we change\n" +
      "our emotions? Are human emotions becoming different over the course of\n" +
      "different generations?... Talking about emotions is talking about Shen. It's not easy\n" +
      "to put into words what 'Shen' means – in simple terms, it is\n" +
      "our reaction to all external and internal stimuli and\n" +
      "represents all our emotions and unique features. Shen is\n" +
      "functions of hearing, feeling, tasting, seeing... in short,\n" +
      "functions that reveal comprehension related to the environment and\n" +
      "to ourselves. Functions that are conscious, for which the witness\n" +
      'is the active "I". It is the energy of compassion, insight, and empathy.\n' +
      "Shen is the energy that connects us, creates relationships, and allows us\n" +
      "to realize our highest potential. Understanding the dynamics of human\n" +
      "emotions can help us become better therapists and create\n" +
      "better treatment guidelines.",
  },
  {
    id: 2,
    name: "RICARDO TEIXEIRA",
    imageUrl: Teixeira,
    // "date": "14-10-2013",
    title: "Creative Hun. How Hun Affects Our Lives",
    description:
      "'Creativity is intelligence having fun.'\n" +
      "Albert Einstein\n" +
      ".\n" +
      "According to neuroscience, creativity is related to our ability to see the future... while\n" +
      "Chinese medicine views creativity as a process attributed to the transformation of the Tree. It is related\n" +
      "to the Liver, which in turn is an organ associated with planning and decision-making. The tree transformation\n" +
      'is related to the idea of "seeing the future" – being able to think ahead and plan\n' +
      "for the future. It is also related to the ability to generate new ideas, make plans for\n" +
      'the future, and take actions. The tree transformation is also related to the idea of "seeing the forest for the\n' +
      'trees" – the ability to connect the dots into a larger picture and see in a broader context.\n' +
      "Hun governs life impulses and their movements, allows for communication, expression of desires,\n" +
      "ideas and creativity, and activates our ability to relate to ourselves. It is present at\n" +
      "all stages of life. It's Hun that gives us emotional connotations to physical experiences. Hun is\n" +
      "essential for the flow of life and the ability to move through it with ease. It is an important part of\n" +
      "our life, which can be nurtured and developed, which can help us achieve goals and navigate\n" +
      "through our life.\n" +
      "Hun gives movement to the mind, which connects thinking with intuition, is connected with the subconscious,\n" +
      "dreams, desires, all our past experiences as well as the successive changes,\n" +
      "that occur in our lives. Hun has the ability to come and go, allowing for\n" +
      "projection, and also receiving projections from others. This movement ensures relationships where we focus\n" +
      "on others and on ourselves.\n" +
      "During the lecture, we will deal with the influence that Hun has on all components of our lives, its relationship\n" +
      "with other Jing Shen, aspects of the spirit, such as Shen, Zhi, Po, and Yi. We will also discuss pathologies\n" +
      "related to the imbalance of Hun and acupuncture points influencing Hun.",
  },
  {
    id: 3,
    name: "RANI AYAL",
    imageUrl: Ayal,
    // "date": "14-10-2013",
    title: "Song of the Jade Dragon: 12 Magical Points",
    description:
      "Twelve points, 'shining brightly like a starry sky and capable of healing many\n" +
      "diseases' (Ma Dan-yang, Jin dynasty).\n" +
      "The Song of the Jade Dragon is a poem attributed to the famous Taoist priest and\n" +
      "acupuncturist, Ma Dan-yang:\n" +
      "'360 points do not exceed the range of 12\n" +
      "in treating diseases,\n" +
      "the results are like magic - as if to splash hot water\n" +
      "above the snow\n" +
      "when the Big Dipper lowers, a propitious moment appears; the locks\n" +
      "of all doors are open." +
      "In the lecture, we will discuss the twelve magical points:\n" +
      "– What makes them so unique?\n" +
      "– Why is time an important factor in acupuncture?\n" +
      "– How to properly locate and puncture points?\n" +
      "– What is their clinical significance in our contemporary world?",
  },
  {
    id: 4,
    name: "YAIR MAIMON",
    imageUrl: Maimon,
    // "date": "14-10-2013",
    title: "Regulating the Immune System in TCM",
    description:
      "The immune system is the most complex of the systems in the body and plays an important role in\n" +
      "preventing diseases, their course, and return to health.\n" +
      "During the lecture, Dr. Yair Maimon will use his vast experience in treating\n" +
      "cancer patients, with reduced immunity, and knowledge related to the immune system in\n" +
      "healthy people.\n" +
      "The lecture will help to fill the gap in the way we perceive immunity in Western medicine, and\n" +
      "will also touch on the concept of vitality. It will include several practical tips in the field of\n" +
      "acupuncture and herbal medicine.\n" +
      "You will learn: Basics of acupuncture treatment for the immune system based on research and evidence\n" +
      "of effectiveness, examples of herbs and herbal formulas for immunity, describing the concepts of Wei Qi, Jing\n" +
      "Qi, Shen Qi, Shen Qi – in the example of treating anxiety and depression, as well as the relevant concept of immunity.",
  },
  {
    id: 6,
    name: "HAMID MONTAKAB",
    imageUrl: Montakab,
    // "date": "14-10-2013",
    title: "Management of Seasonal and Chronic Allergies in Clinical Practice",
    description:
      "Allergies, and especially hay fever, are among the fastest growing pathological conditions\n" +
      'in the world. Inherited "atopic" diseases affect children at an early age and in some\n' +
      "cases can significantly impair quality of life.\n" +
      "Chinese medicine, especially acupuncture, is very effective in combating not only symptoms\n" +
      "in the acute phase but also in treating the deeper roots of these ailments.\n" +
      "The presented workshop includes:\n" +
      "– The energetics of the head, taking into account sensory portals, ear, nose, throat, and eyes\n" +
      "– Physiopathology, diagnostic and therapeutic principles\n" +
      "– Practical strategies: allergic rhinitis; allergic asthma.",
  },
  {
    id: 7,
    name: "HAMID MONTAKAB",
    imageUrl: Montakab,
    // date: "14-10-2013",
    title: "The Art of Aging Gracefully and Dying with Grace",
    description:
      "The cycles of life and the eight extraordinary vessels\n" +
      "\n" +
      "The eight extraordinary vessels encompass and regulate various stages of our development on physical, psychological, and mental levels.\n" +
      "Similar to the seasons in nature, each stage of life has its own specific purpose.\n" +
      'According to Taoist principles, each individual has a predetermined "Ming," which is a life mandate/program to fulfill.\n' +
      "Lack of awareness of this Ming is the source of difficulties that most people experience in relation to\n" +
      "the process of aging and dying. The extraordinary vessels help coordinate human psyche with\n" +
      "natural physiological decline. Their application can be recommended to cope with the lack of\n" +
      "acceptance and fear of aging.\n" +
      "The secret to aging gracefully is to discover the meaning of autumn and winter in the cycles of life and\n" +
      "to become aware of and embrace our spiritual dimension.\n" +
      "Table of Contents:\n" +
      "Four seasons of life\n" +
      "Life mandate: Ming\n" +
      "Jing and Shen cycles\n" +
      "Extraordinary vessels in relation to different stages and transformations throughout life\n" +
      "Difficulties related to aging: lack of acceptance of change; difficulties in letting go of the past\n" +
      "and forgiveness; unfinished business; physical and mental weakening\n" +
      "Fear of death\n" +
      "The secret to aging gracefully and dying with grace: spiritual intelligence\n" +
      "Selected acupuncture strategies.",
  },
  {
    id: 8,
    name: "DR LI JIE",
    imageUrl: Jie,
    // date: "14-10-2013",
    title: "Ling Shu Jing Acupuncture: What and Why?",
    description:
      "Can acupuncture be used to treat all complex and difficult modern diseases? This\n" +
      "question may often arise in many of us after studying or practicing acupuncture for\n" +
      "some time. What did we miss and what do we still need to learn? Authentic, classical\n" +
      "acupuncture.\n" +
      "What is classical Ling Shu Jing acupuncture? Why do we need to study and practice it\n" +
      "today? The following topics will be discussed in response to these questions:\n" +
      'Ling Shu Jing Acupuncture is not "An Acupuncture" (anatomical acupuncture) but "I Acupuncture" (acupuncture of life information) - Ling Shu Jing Chapter 1.\n' +
      "How were the meridians originally formed?\n" +
      "The significance of the nature of the meridians and acupuncture, not their functions and actions.\n" +
      "Acupuncture is a powerful therapy for treating Zang Fu diseases. How to combine acupuncture points according to meridians and pathological mechanisms?\n" +
      "Pulse diagnosis as a guideline for treating Zang Fu diseases with acupuncture and for evaluating treatment in clinical practice.\n" +
      "The application of Yin Yang Wu Xing theory in the clinic.\n" +
      "Introduction to classical Jie Jing (meridian connections) and Ling Shu Jing - Geometric Acupuncture methods.\n" +
      "Puncture methods - Ling Shu Jing Bu (tonifying) and Xie (reducing): What do they really mean? What does 'Bu' mean? What does 'Xie' mean?\n" +
      "How to apply the principles of Ling Shu Jing acupuncture: 'For diseases in the upper aspect of the body, use lower points; for diseases in the lower aspect of the body, use upper points; for left-sided diseases, use right points; for right-sided diseases, use left points; for internal diseases, use the four lateral points.'",
  },
  {
    id: 9,
    name: "JONG BAIK",
    imageUrl: Baik,
    // date: "14-10-2013",
    title:
      "Korean Hand Therapy (KHT) for Gynecological Problems,\n" +
      "Infertility, and Assisted Conception",
    description:
      "Gynecological problems and infertility from the perspective of Traditional East Asian Medicine (TEAM)\n" +
      "Reproductive Jing and infertility\n" +
      "Introduction to Korean acupuncture, acupressure, and hand moxibustion (KHT)\n" +
      "Three main theories\n" +
      "Possible underlying mechanisms of KHT\n" +
      "Treatment techniques\n" +
      "Research on KHT and gynecological disorders\n" +
      "Key KHT points and recommended protocols\n" +
      "Traditional East Asian Medicine (TEAM) has a long history of treating gynecological problems\n" +
      "and infertility. There is abundant information on the pathology of diseases and women's health\n" +
      "treatment. However, the TEAM perspective differs fundamentally from Western medicine.\n" +
      "Korean Hand Therapy is a versatile and dynamic micro-acupuncture system that is\n" +
      "easy to learn and easy to incorporate into clinical practice. It provides a practical and convenient\n" +
      "treatment option as it is easily applicable for self-therapy.\n" +
      "A number of studies on KHT have focused on gynecological disorders. The results of several\n" +
      "suggest that KHT may be beneficial in alleviating premenstrual tension syndrome, menstrual\n" +
      "associated symptoms, or menopause. Most of these studies were conducted using non-invasive\n" +
      "treatment techniques such as moxibustion and acupressure pellets. Therefore, KHT appears to be\n" +
      "a reasonable option to consider for women and individuals who have concerns about more\n" +
      "invasive therapy.\n" +
      "This presentation will explore gynecological problems and infertility from the perspective of\n" +
      "Traditional East Asian Medicine. It will present the possibilities and advantages of KHT as a\n" +
      "treatment option and highlight its versatility and well-defined theories. It will include key KHT\n" +
      "points and recommended protocols.",
  },
  {
    id: 10,
    name: "JONG BAIK",
    imageUrl: Baik,
    // date: "14-10-2013",
    title: "Introduction to the Three Treasures",
    description:
      "(10-minute presentation)\n" +
      "Jing 精, Qi 氣, and Shen 神 are fundamental concepts underlying the two most important philosophical\n" +
      "concepts of Traditional East Asian Medicine (TEAM): the holistic approach and the synthesis\n" +
      "of body and mind. They have their distinguishing characteristics, but they cannot be completely separated.\n" +
      "Jing, Qi, and Shen, which are the foundation of life, must be protected and nurtured if we want to achieve\n" +
      "and maintain health and longevity.\n" +
      "The value of the Three Treasures is invaluable in preventing, diagnosing, managing, and treating\n" +
      "diseases. A deeper understanding of the Three Treasures will also lead to further refinement\n" +
      "of existing TEAM theoretical systems and contribute to deepening our understanding of human physiology\n" +
      "and pathology.",
  },
  {
    id: 11,
    name: "Dorota Łapa",
    imageUrl: Lapa,
    // date: "14-10-2013",
    title:
      "How to Cleanse with Diet for Individuals with Deficiencies?\n" +
      "Cleansing Using the Fundamentals of Qi and Blood Strengthening in Chinese Medicine.",
    description:
      "I invite you to a lecture where I will share with you years of experience in conducting cleansing processes through diet.\n" +
      "When I started using vegetable-based cleansing according to the indications and book by Dr. Renata Collier 12 years ago, like most of us who use knowledge from Chinese medicine, I knew primarily that this idea allows us to support the Qi of the spleen. Years of organizing workshops and conducting retreats have led me through experiences that have inspired me to refine and introduce various additional elements to this process, in order to better and more consciously deal with situations where fasting should be conducted by individuals with deficiencies in Yang, Qi, and Blood.\n" +
      "I will present simple, ready-to-use procedures that I have probably developed based on methods you are already familiar with. Personally, by cooking and observing patients during each process, I have witnessed the effectiveness and healing properties that have supported the patients and taught them a healthier lifestyle.\n" +
      "\n" +
      "Based on my experience, I think I have safely guided the cleansing of around 800 individuals.\n" +
      "\n" +
      "Therefore, I invite you to listen and participate in the discussion during our Congress.",
  },
  {
    id: 12,
    name: "Bożena Olszowska",
    imageUrl: Olszowska,
    // date: "14-10-2013",
    title: "CHINESE ART OF FACE READING - Discovering Everything Inside Out",
    description:
      "In Kiang Xiang (Chinese art of face reading), we find the concepts of Yin Yang, Five Elements, Five Mountains, the division into Three (Heaven, Human, Earth), 12 Palaces, and more.\n" +
      "\n" +
      "Ancient Chinese sages divided the face into a staggering number of sections. In these sections, we can find over 130 individual physical, psychological, emotional, and spiritual characteristics.\n" +
      "\n" +
      "Each face has its own story, and the Chinese art of face reading teaches how to interpret specific features, lines, wrinkles, and helps uncover previously unknown personality traits.",
  },
];

// comments.sort((a, b) =>
//   a.name.localeCompare(b.name, "pl", { sensitivity: "base" })
// );
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
