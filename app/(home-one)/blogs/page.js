import Blog from "@/components/blogs";
import BreadCrumb from "@/components/common/Breadcrumb";


export const metadata = {
	title: "Marketing Blog | SEO, PPC, Social Media & Web Strategy",
	description: "Stay ahead with actionable digital marketing advice. Learn SEO best practices, PPC tactics, UI/UX guidance, content growth strategies, and more on our blog.",
};

function BlogPage() {
  return (
    <>
      <BreadCrumb title="Blog" />
      <Blog />
    </>
  );
}

export default BlogPage;
