import BreadCrumb from "@/components/common/Breadcrumb";
import Testimonial from "@/components/home-two/testimonial";
import ServiceDetails from "@/components/service/ServiceDetails";

function SingleService() {
  return (
    <>
      <BreadCrumb title="Service Details" />
      <ServiceDetails />
      <Testimonial />
    </>
  );
}

export default SingleService;
