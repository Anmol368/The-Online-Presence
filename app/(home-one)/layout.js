import { clashGroteskSemibold, inter } from "../fonts";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// react modal video css
import "react-modal-video/css/modal-video.css";

// fonts
import "../../public/css/fontawesome.css";
import "../../public/css/icomoon.css";

//  Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ImportBsJS from "@/components/BootstrapClient";
import Footer from "@/components/home-one/footer";
import Header from "@/components/home-one/header";
import ScrollToTop from "@/components/common/ScrollToTop";

import ToasterM from "@/components/ToasterM/ToasterM";

// main css
import "../../public/css/app.css";
import "../../public/css/main.css";
import "../../public/css/mobile-nav.css";

export const metadata = {
  title: "Expert SEO & Digital Marketing Agency",
  description: "Boost your business with our expert SEO, web design, and digital marketing services tailored for startups and small businesses.",
};


export default function HomeTwoLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${clashGroteskSemibold.variable}`}>
        
        <ImportBsJS />
        <Header />
        {children}
        <Footer />
        <ToasterM />
        <ScrollToTop />
      </body>
    </html>
  );
}
