import BreadCrumb from "@/components/common/Breadcrumb";
import PortfolioList from "@/components/portfolio/two/PortfolioList";


export const metadata = {
	title: "The Online Presence: SEO, Web Design & Marketing Services",
	description: "Explore our portfolio showcasing SEO services, PPC campaigns, ecommerce website development, social media marketing, branding, lead generation and more, Florida.",
};

function PortfolioTwoColumn() {
	return (
		<>
			<BreadCrumb title="Portfolio" />
			<PortfolioList />
		</>
	);
}

export default PortfolioTwoColumn;
