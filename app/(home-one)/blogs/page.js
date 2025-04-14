import Blog from "@/components/blogs";
import BreadCrumb from "@/components/common/Breadcrumb";


export const metadata = {
	title: "Digital Marketing & SEO Insights | The Online Presence",
	description: "Stay updated with the latest trends in SEO, digital marketing, web design, and UI/UX. Get expert insights and tips for boosting your online presence.",
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
