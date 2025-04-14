import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/home-two/auto-slider";
import Testimonial from "@/components/home-two/testimonial";
import PricingFaqVA from "@/components/pricing/PricingFaqVA";
import PricingPlanVA from "@/components/pricing/PricingPlanVA";


export const metadata = {
  title: "Virtual Assistant & SEO Packages | Digital Marketing VA",
  description: "Discover expert Virtual Assistant packages with SEO, content management, digital marketing, and web services. Elevate your business with pro support.",
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
