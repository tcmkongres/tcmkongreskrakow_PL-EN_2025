import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Speakers from "@/components/sections/Speakers";
import { Schedule } from "@/components/sections/Schedule";
import Hotel from "@/components/sections/Hotel";
import Timeline from "@/components/sections/Timeline";
import Shopping from "@/components/sections/Shopping";
import Faqs from "@/components/sections/Faqs";
import Organizers from "@/components/sections/Organizers";
import Exhibitors from "@/components/sections/Exhibitors";
import Contact from "@/components/sections/Contact";

// Kolejność sekcji strony głównej
export default function HomePage() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <About />
        <Speakers />
        <Schedule />
        <Hotel />
        <Timeline />
        <Shopping />
        <Faqs />
        <Organizers />
        <Exhibitors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
