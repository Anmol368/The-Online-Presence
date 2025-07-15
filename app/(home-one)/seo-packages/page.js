import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/home-two/auto-slider";
import Testimonial from "@/components/home-two/testimonial";
import PricingFaqSEO from "@/components/pricing/PricingFaqSEO";
import PricingPlanSEO from "@/components/pricing/PricingPlanSEO";


export const metadata = {
  title: "SEO Packages for All Business Types | Ranked #1",
  description: "Affordable SEO packages with keyword research, backlinks & optimization. Get expert services from the best SEO agency for real growth & visibility.",
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
