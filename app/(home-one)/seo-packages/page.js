import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/home-two/auto-slider";
import Testimonial from "@/components/home-two/testimonial";
import PricingFaqSEO from "@/components/pricing/PricingFaqSEO";
import PricingPlanSEO from "@/components/pricing/PricingPlanSEO";


export const metadata = {
  title: "SEO Services & Optimization Packages | SEO Agency USA",
  description: "Explore custom SEO pricing packages for small businesses & enterprises. Boost rankings with top SEO agency in the USA. Get started today!",
};

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
