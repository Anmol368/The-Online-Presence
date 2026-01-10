import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/home-two/auto-slider";
import Testimonial from "@/components/home-two/testimonial";
import PricingFaqVA from "@/components/pricing/PricingFaqVA";
import PricingPlanVA from "@/components/pricing/PricingPlanVA";


export const metadata = {
  title: "The Online Presence: SEO, Web Design & Marketing Services",
  description: "Affordable virtual assistant services in Florida Expert admin, email & design support for remote teams Professional VA packages starting at $149/month. Hire now.",
};

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
