import About from "@/components/seo-services/about";
import AboutTwo from "@/components/seo-services/about-two";
import AutoSlider from "@/components/seo-services/auto-slider";
import Contact from "@/components/seo-services/contact";
import Counter from "@/components/seo-services/counter";
import Faq from "@/components/seo-services/faq";
import Hero from "@/components/seo-services/hero";
import SeoSteps from "@/components/seo-services/seo-steps";
import Services from "@/components/seo-services/services";
import Teams from "@/components/seo-services/teams";

function HomeThree() {
  return (
    <div className="aximo-all-section bg-light3">
      <Hero />
      <Counter />
      <About />
      <AboutTwo />
      <Services />
      <SeoSteps />
      <AutoSlider />
      {/* <Teams /> */}
      <Faq />
      {/* <Contact /> */}
    </div>
  );
}

export default HomeThree;
