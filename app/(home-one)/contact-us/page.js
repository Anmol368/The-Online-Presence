import BreadCrumb from "@/components/common/Breadcrumb";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import GoogleMap from "@/components/contact/GoogleMap";
import TwoColumnFaq from "@/components/contact/TwoColumnFaq";


export const metadata = {
	title: "Contact Digital Marketing Agency Florida | Get Started Today",
	description: "Reach Florida’s best digital marketing agency for SEO, PPC, Google Ads, social media marketing, ecommerce marketing, branding, lead generation & Web Development.",
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
