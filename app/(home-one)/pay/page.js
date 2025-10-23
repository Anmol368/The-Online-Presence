import PayPage from "@/components/home-one/pay";
import BreadCrumb from "@/components/common/Breadcrumb";


export const metadata = {
	title: "Secure Payment | Best SEO & Digital Marketing Agency",
	description: "Make a secure payment for SEO, PPC & digital marketing services. Work with the best SEO agency, local SEO experts & top online marketing specialists today",
};

function Pay() {
  return (
    <>
      <BreadCrumb title="Pay" />
      <PayPage />
    </>
  );
}

export default Pay;
