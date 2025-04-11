import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/home-two/auto-slider";
import Testimonial from "@/components/home-two/testimonial";
import PricingFaqVA from "@/components/pricing/PricingFaqVA";
import PricingPlanVA from "@/components/pricing/PricingPlanVA";

function Pricing() {
  return (
    <>
      <BreadCrumb title="Virtual Assistance Packages" />
      <PricingPlanVA title="Virtual Assistance" />
      <Testimonial />
      <AutoSlider />
      <PricingFaqVA />
    </>
  );
}

export default Pricing;
