import Blogs from "@/components/web-development/blogs";
import BrandLogo from "@/components/web-development/brand-logo";
import Hero from "@/components/web-development/hero";
import Instagrams from "@/components/web-development/instagrams";
import MissionVision from "@/components/web-development/mission-vission";
import NumberBox from "@/components/web-development/number-box";
import Projects from "@/components/web-development/projects";
import Services from "@/components/web-development/services";
import Testimonials from "@/components/web-development/testimonials";
import WhyChooseUs from "@/components/web-development/why-choose-us";

function HomeFour() {
  return (
    <div className="aximo-all-section bg-light4">
      <Hero />
      <MissionVision />
      <BrandLogo />
      <Services />
      <WhyChooseUs />
      <NumberBox />
      <Projects />
      <Testimonials />
      <Blogs />
      <Instagrams />
    </div>
  );
}

export default HomeFour;
