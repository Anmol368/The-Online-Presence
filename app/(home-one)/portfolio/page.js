import BreadCrumb from "@/components/common/Breadcrumb";
import PortfolioList from "@/components/portfolio/two/PortfolioList";


export const metadata = {
	title: "Digital Marketing & Web Design Portfolio | The Online Presence",
	description: "Explore our portfolio showcasing SEO, web development, UI/UX design, and digital marketing projects. See how we elevate brands with innovative solutions.",
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
