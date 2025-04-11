import BreadCrumb from "@/components/common/Breadcrumb";
import Projects from "@/components/home-two/projects";
import PortfolioDetails from "@/components/portfolio/portfolio-details/PortfolioDetails";

function SinglePortfolio() {
  return (
    <>
      <BreadCrumb title="Portfolio Deatails" />
      <PortfolioDetails />
      <Projects />
    </>
  );
}

export default SinglePortfolio;
