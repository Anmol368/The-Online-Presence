import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/home-two/auto-slider";
import Testimonial from "@/components/home-two/testimonial";
import PricingFaqWeb from "@/components/pricing/PricingFaqWeb";
import PricingPlanWeb from "@/components/pricing/PricingPlanWeb";


export const metadata = {
  title: "Web Design & Branding Packages | Top SEO Agency",
  description: "Choose web development, UI/UX, and branding packages built for growth. Trusted by global brands for SEO, design, and digital marketing success.",
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
