import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/home-two/auto-slider";
import Testimonial from "@/components/home-two/testimonial";
import PricingFaqWeb from "@/components/pricing/PricingFaqWeb";
import PricingPlanWeb from "@/components/pricing/PricingPlanWeb";


export const metadata = {
  title: "Web Design & SEO Packages for Online Growth",
  description: "Elevate your online presence with our web agency's custom designs, SEO optimization, and digital marketing services tailored for your success.",
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
