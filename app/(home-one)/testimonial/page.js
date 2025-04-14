import BreadCrumb from "@/components/common/Breadcrumb";
import Testimonial from "@/components/home-two/testimonial";


export const metadata = {
	title: "Client Testimonials | SEO & Digital Marketing Success",
	description: "See real client feedback on our SEO, PPC, web design, content marketing, and digital growth services. Proven success stories that build online authority.",
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
