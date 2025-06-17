import Blog from "@/components/blogs";
import BreadCrumb from "@/components/common/Breadcrumb";


export const metadata = {
	title: "Digital Marketing & SEO Insights Blog",
	description: "Stay updated with expert tips on SEO, digital marketing, web design, and UI/UX. Boost your online presence with our latest blog posts.",
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
