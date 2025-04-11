import About from "@/components/ui-ux-services/about";
import Blogs from "@/components/ui-ux-services/blogs";
import Features from "@/components/ui-ux-services/features";
import Hero from "@/components/ui-ux-services/hero";
import Projects from "@/components/ui-ux-services/projects";
import Services from "@/components/ui-ux-services/services";
import Testimonials from "@/components/ui-ux-services/testimonials";
import Video from "@/components/ui-ux-services/video";

function HomeSix() {
  return (
    <>
      <Hero />
      {/* <Video /> */}
      <Features />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Blogs />
    </>
  );
}

export default HomeSix;
