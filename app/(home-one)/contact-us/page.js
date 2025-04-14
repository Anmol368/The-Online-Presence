import BreadCrumb from "@/components/common/Breadcrumb";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import GoogleMap from "@/components/contact/GoogleMap";
import TwoColumnFaq from "@/components/contact/TwoColumnFaq";


export const metadata = {
	title: "Contact SEO & Digital Marketing Agency | Get in Touch",
	description: "Contact our SEO and digital marketing experts for web design, local SEO, PPC, content marketing, and UI/UX services. Let's grow your online presence today.",
};

function ContactUs() {
	const location = {
		center: {
			lat: 10.99835602,
			lng: 77.01502627,
		},
		zoom: 11,
	};
	return (
		<>
			<BreadCrumb title="Contact Us" />
			<ContactForm />
			<ContactInfo />
			{/* <GoogleMap location={location} /> */}
			<TwoColumnFaq />
		</>
	);
}

export default ContactUs;
