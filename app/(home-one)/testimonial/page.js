import BreadCrumb from "@/components/common/Breadcrumb";
import Testimonial from "@/components/home-two/testimonial";


export const metadata = {
	title: "What Clients Say | Trusted SEO & Web Experts",
	description: "See how our SEO and web services transformed businesses. Real reviews from satisfied clients who trust us for performance, rankings, and online growth.",
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
