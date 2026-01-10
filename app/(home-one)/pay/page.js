import PayPage from "@/components/home-one/pay";
import BreadCrumb from "@/components/common/Breadcrumb";


export const metadata = {
	title: "Secure Payment | Best SEO & Digital Marketing Agency Florida",
	description: "Make secure payment for digital marketing services Florida. Best SEO company, PPC management, web design & social media marketing. Affordable & easy payments.",
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
