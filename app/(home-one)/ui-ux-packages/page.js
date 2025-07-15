import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/home-two/auto-slider";
import Testimonial from "@/components/home-two/testimonial";
import PricingFaqUIUX from "@/components/pricing/PricingFaqUIUX";
import PricingPlanUIUX from "@/components/pricing/PricingPlanUIUX";


export const metadata = {
  title: "UI/UX & Branding Packages | Design Agency 2025",
  description: "Get UI/UX design, branding & web development in one place. Packages include custom design, visual identity & strategy from top creative experts.",
};

function Pricing() {
  return (
    <>
      <BreadCrumb title="UI/UX Packages" />
      <PricingPlanUIUX title="UI/UX" />
      <Testimonial />
      <AutoSlider />
      <PricingFaqUIUX />
    </>
  );
}

export default Pricing;
