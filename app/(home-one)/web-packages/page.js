import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/home-two/auto-slider";
import Testimonial from "@/components/home-two/testimonial";
import PricingFaqWeb from "@/components/pricing/PricingFaqWeb";
import PricingPlanWeb from "@/components/pricing/PricingPlanWeb";


export const metadata = {
  title: "Custom Web Design & Development Packages | Online Presence",
  description: "Get responsive web design & development packages. UI/UX, e-commerce, SEO optimization, and digital marketing from a top web agency.",
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
