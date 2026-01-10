import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/home-two/auto-slider";
import Testimonial from "@/components/home-two/testimonial";
import PricingFaqSEO from "@/components/pricing/PricingFaqSEO";
import PricingPlanSEO from "@/components/pricing/PricingPlanSEO";


export const metadata = {
  title: "SEO Packages Florida | Affordable SEO Services & Pricing",
  description: "SEO company Florida offering affordable packages. Local SEO, technical SEO, ecommerce SEO & Google ranking. Best digital marketing agency. Free 30-day trial.",
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
