import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/home-two/auto-slider";
import Testimonial from "@/components/home-two/testimonial";
import PricingFaqUIUX from "@/components/pricing/PricingFaqUIUX";
import PricingPlanUIUX from "@/components/pricing/PricingPlanUIUX";

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
