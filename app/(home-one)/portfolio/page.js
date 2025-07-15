import BreadCrumb from "@/components/common/Breadcrumb";
import PortfolioList from "@/components/portfolio/two/PortfolioList";


export const metadata = {
	title: "Our Work | Digital Marketing & Web Design Portfolio",
	description: "Explore our portfolio of SEO, branding, and website projects. See how we’ve helped businesses grow their online presence with impactful strategies.",
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
