import About from "@/components/home-one/about";
import AutoSlider from "@/components/home-one/auto-slider";
import BeforeServices from "@/components/home-one/before-services/BeforeServices";
import Blogs from "@/components/home-one/blogs";
import CallToAction from "@/components/home-one/call-to-action";
import ContactCTA from "@/components/home-one/contact-cta";
import Faq from "@/components/home-one/faq";
import Features from "@/components/home-one/features";
import Hero from "@/components/home-one/hero";
import MissionVision from "@/components/home-one/mission-vission";
import Projects from "@/components/home-one/projects";
import Services from "@/components/home-one/services";
import Testimonials from "@/components/home-one/testimonials";
import WhyChooseUs from "@/components/home-one/why-choose-us";

function HomeTwo() {
  return (
    <div className="aximo-all-section bg-white">
      {/* bg-light2 */}
      <Hero />
      {/* <BrandLogo /> */}
      <AutoSlider />
      <WhyChooseUs />
      {/* <Features /> */}
      <MissionVision />
      <BeforeServices />
      {/* <About /> */}
      <Services />
      <ContactCTA />
      <Projects />
      {/* <Video /> */}
      {/* <Pricing /> */}
      <Blogs />
      <Testimonials />
      <Faq />
      {/* <CallToAction /> */}
    </div>
  );
}

export default HomeTwo;
