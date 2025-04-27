import Image from "next/image";

import logo1 from "@/public/images/exhibitors/acuart_yb_logo_02.jpg";
import logo2 from "@/public/images/exhibitors/logo-wystawcy.png";
import logo3 from "@/public/images/exhibitors/logo cmc.jpg";
import logo4 from "@/public/images/exhibitors/logoTOMO.jpg";
import logo5 from "@/public/images/exhibitors/logo OP szkola naturalnego NEW-09.jpg";
import logo6 from "@/public/images/exhibitors/Delewin logotyp.png";
import logo7 from "@/public/images/exhibitors/TCM BOHEMIA_PNG.png";
import logo8 from "@/public/images/exhibitors/TCMsklep-logo-czerwone-800x133px.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

export default function ExhibitorsSlider() {
  return (
    <div className="relative w-full overflow-hidden h-full">
      <div className="flex animate-scroll space-x-12 w-max h-full">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[150px] sm:w-[300px] h-full flex items-center justify-center"
          >
            <Image
              src={logo}
              alt={`Exhibitor logo ${index + 1}`}
              className="object-contain max-h-full max-w-full"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
