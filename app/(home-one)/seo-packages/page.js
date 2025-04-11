import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/home-two/auto-slider";
import Testimonial from "@/components/home-two/testimonial";
import PricingFaqSEO from "@/components/pricing/PricingFaqSEO";
import PricingPlanSEO from "@/components/pricing/PricingPlanSEO";

function Pricing() {
  return (
    <>
      <BreadCrumb title="SEO Packages" />
      <PricingPlanSEO title="SEO" />
      <Testimonial />
      <AutoSlider />
      <PricingFaqSEO />
    </>
  );
}

export default Pricing;
