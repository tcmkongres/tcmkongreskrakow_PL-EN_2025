import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "@/components/Header";
import Speakers from "@/components/Speakers";
import { Schedule } from "@/components/Schedule";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Organizers from "@/components/Organizers";
import Faqs from "@/components/Faqs";
import Hotel from "@/components/Hotel";
import Shopping from "@/components/Shopping";
import Timeline from "@/components/Timeline";
import Sponsors from "@/components/Sponsors";
import Modal from "@/components/Modal";
import Exhibitors from "@/components/Exhibitors";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Home() {
  return (
    <div>
      <div className="bg-white">
        <Header></Header>
        <main>
          <About></About>
          <Speakers></Speakers>
          <Schedule></Schedule>
          <Hotel></Hotel>
          <Timeline></Timeline>
          <Shopping></Shopping>
          <Faqs></Faqs>
          <Organizers></Organizers>
          {/*<Sponsors></Sponsors>*/}
          <Exhibitors></Exhibitors>
          <Contact></Contact>
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "header",
        "about",
        "timeline",
      ])),
      // Will be passed to the page component as props
    },
  };
}
