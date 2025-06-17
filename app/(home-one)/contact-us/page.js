import BreadCrumb from "@/components/common/Breadcrumb";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import GoogleMap from "@/components/contact/GoogleMap";
import TwoColumnFaq from "@/components/contact/TwoColumnFaq";


export const metadata = {
	title: "Contact Top Digital Marketing & SEO Agency",
	description: "Get in touch with our expert team for SEO, digital marketing, web design & virtual assistant services. We’re here to help your business grow.",
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
