import WaveShape from "@/components/virtual-assistance/WaveShape";
import About from "@/components/virtual-assistance/about";
import Counter from "@/components/virtual-assistance/counter";
import Cta from "@/components/virtual-assistance/cta";
import Faq from "@/components/virtual-assistance/faq";
import Features from "@/components/virtual-assistance/features";
import Hero from "@/components/virtual-assistance/hero";
import Projects from "@/components/virtual-assistance/projects";
import Services from "@/components/virtual-assistance/services";
import Testimonials from "@/components/virtual-assistance/testimonials";
import Video from "@/components/virtual-assistance/video";

function HomeFive() {
  return (
    <div className="aximo-all-section bg-light6">
      <Hero />
      <Video />
      <Features />
      <WaveShape />
      <About />
      <Counter />
      <Services />
      {/* <Projects /> */}
      <WaveShape />
      <Faq />
      <WaveShape />
      <Testimonials />
      <Cta />
    </div>
  );
}

export default HomeFive;
