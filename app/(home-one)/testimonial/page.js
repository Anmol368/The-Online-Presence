import BreadCrumb from "@/components/common/Breadcrumb";
import Testimonial from "@/components/home-two/testimonial";


export const metadata = {
	title: "Trusted Reviews of Our SEO & Marketing Services",
	description: "Read client testimonials highlighting our success in SEO, digital marketing, web design, and virtual assistant services. See why clients trust us.",
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
