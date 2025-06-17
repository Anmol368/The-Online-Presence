import BreadCrumb from "@/components/common/Breadcrumb";
import PortfolioList from "@/components/portfolio/two/PortfolioList";


export const metadata = {
	title: "Our Digital Marketing & Web Design Portfolio",
	description: "Explore our portfolio showcasing successful SEO, web design, and digital marketing projects that drive real business growth and online presence.",
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
