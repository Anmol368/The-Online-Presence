import BreadCrumb from "@/components/common/Breadcrumb";
import Testimonial from "@/components/home-two/testimonial";


export const metadata = {
	title: "Florida Digital Marketing Testimonials | SEO, PPC & Branding",
	description: "See why clients choose Florida top digital marketing agency for SEO services, local SEO, Google Ads, social media, ecommerce development & ROI-driven campaigns.",
};

function TestimonialPage() {
  return (
    <>
      <BreadCrumb title="Testimonial" />
      <Testimonial />
    </>
  );
}

export default TestimonialPage;
