import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/home-two/auto-slider";
import Testimonial from "@/components/home-two/testimonial";
import PricingFaqSEO from "@/components/pricing/PricingFaqSEO";
import PricingPlanSEO from "@/components/pricing/PricingPlanSEO";


export const metadata = {
  title: "Affordable SEO & Digital Marketing Packages",
  description: "Get expert SEO optimization, local SEO, PPC, and web SEO services. Choose the best SEO agency near me for affordable digital growth.",
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
