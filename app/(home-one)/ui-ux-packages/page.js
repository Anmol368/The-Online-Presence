import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/home-two/auto-slider";
import Testimonial from "@/components/home-two/testimonial";
import PricingFaqUIUX from "@/components/pricing/PricingFaqUIUX";
import PricingPlanUIUX from "@/components/pricing/PricingPlanUIUX";


export const metadata = {
  title: "Affordable UI/UX Design Packages Florida | Design Services",
  description: "Florida branding agency offering UI/UX design services, brand identity, visual design & user testing. Custom packages for web & mobile interfaces. Get a quote.",
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
