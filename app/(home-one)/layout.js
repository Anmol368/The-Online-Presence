import { clashGroteskSemibold, inter } from "../fonts";

import Head from "next/head";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

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
  title: "The Online Presence – SEO, Web Design & Marketing Experts",
  description: "Accelerate your digital growth with The Online Presence. We offer SEO, UI/UX, web development, and marketing services tailored for growing businesses.",
  verification: {
    google: "VeqedW8OqeYbdJBZ0hR3hAK44MFwh-wd3NCs2xAMOYI",
    "google-site-verification": "google83db63e1f4808922.html",
  },
};


export default function HomeTwoLayout({ children }) {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    "name": "The Online Presence",
    "alternativeName": "TOP",
    "url": "https://www.theonlinepresence.com/",
    "logo": "",
    "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1 (206) 210-2030",
    "contactType": "sales",
    "areaServed": ["US","GB","CA","IN","AU","NZ"],
    "availableLanguage": "en"
  },
    "sameAs": [
      "https://x.com/Top_onpresence",
      "https://www.facebook.com/profile.php?id=61559623079102&mibextid=LQQJ4d",
      "https://www.instagram.com/the.onlinepresence/",
      "https://www.linkedin.com/company/the-online-presence/",
      "https://pin.it/4AygSW783",
      "https://www.theonlinepresence.com/"
    ]
  }

  return (
    <html lang="en">
      <Head>
        <GoogleAnalytics measurementId="G-CM3G0XGGJJ" />
        <GoogleTagManager gtmId="GTM-KXP4WWT9" />

      </Head>
      <body className={`${inter.className} ${clashGroteskSemibold.variable}`}>

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CM3G0XGGJJ"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-CM3G0XGGJJ');
          `}
        </script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KXP4WWT9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        
        <ImportBsJS />
        <Header />
        {children}
        <Footer />
        {/* <ToasterM /> */}
        <ScrollToTop />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      </body>
    </html>
  );
}
