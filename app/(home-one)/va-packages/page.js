import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/home-two/auto-slider";
import Testimonial from "@/components/home-two/testimonial";
import PricingFaqVA from "@/components/pricing/PricingFaqVA";
import PricingPlanVA from "@/components/pricing/PricingPlanVA";


export const metadata = {
  title: "Virtual Assistant & Digital Marketing Packages",
  description: "Professional virtual assistant packages to boost your online presence and support your business growth with expert digital marketing help.",
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
