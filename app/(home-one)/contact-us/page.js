import BreadCrumb from "@/components/common/Breadcrumb";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import GoogleMap from "@/components/contact/GoogleMap";
import TwoColumnFaq from "@/components/contact/TwoColumnFaq";


export const metadata = {
	title: "Contact Us | Speak With Our Digital Experts Today",
	description: "Have questions or a project in mind? Get in touch for expert help with SEO, web design, or branding. Our team is ready to boost your online presence.",
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
