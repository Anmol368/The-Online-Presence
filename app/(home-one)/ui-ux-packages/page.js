import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/home-two/auto-slider";
import Testimonial from "@/components/home-two/testimonial";
import PricingFaqUIUX from "@/components/pricing/PricingFaqUIUX";
import PricingPlanUIUX from "@/components/pricing/PricingPlanUIUX";


export const metadata = {
  title: "UI/UX Design Packages | Responsive Web & App Design",
  description: "Explore cutting-edge UI/UX design packages. Responsive, mobile-first, e-commerce, and user-centric web & app design for better engagement.",
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
