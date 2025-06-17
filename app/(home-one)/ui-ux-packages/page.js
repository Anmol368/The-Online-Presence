import BreadCrumb from "@/components/common/Breadcrumb";
import AutoSlider from "@/components/home-two/auto-slider";
import Testimonial from "@/components/home-two/testimonial";
import PricingFaqUIUX from "@/components/pricing/PricingFaqUIUX";
import PricingPlanUIUX from "@/components/pricing/PricingPlanUIUX";


export const metadata = {
  title: "UI/UX Design with SEO & Web Optimization",
  description: "Boost user experience with UI/UX, local SEO, and web optimization. Partner with a top digital marketing agency for better online presence.",
};

function Pricing() {
  return (
    <>
      <BreadCrumb title="UI/UX Packages" />
      <PricingPlanUIUX title="UI/UX" />
      <Testimonial />
      <AutoSlider />
      <PricingFaqUIUX />
    </>
  );
}

export default Pricing;
