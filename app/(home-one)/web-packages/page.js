import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/home-two/auto-slider";
import Testimonial from "@/components/home-two/testimonial";
import PricingFaqWeb from "@/components/pricing/PricingFaqWeb";
import PricingPlanWeb from "@/components/pricing/PricingPlanWeb";


export const metadata = {
  title: "Affordable Web Design Packages Florida | Website Development",
  description: "rofessional web development agency in Orlando, Florida. Custom website design, WordPress development & ecommerce solutions. Flexible packages starting at $199.",
};

function Pricing() {
  return (
    <>
      <BreadCrumb title="Web Development Packages" />
      <PricingPlanWeb title="Web Development" />
      <Testimonial />
      <AutoSlider />
      <PricingFaqWeb />
    </>
  );
}

export default Pricing;
