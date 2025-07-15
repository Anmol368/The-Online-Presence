import Blog from "@/components/blogs";
import BreadCrumb from "@/components/common/Breadcrumb";


export const metadata = {
	title: "Digital Marketing Blog | SEO, PPC & Web Tips",
	description: "Explore expert insights on SEO, PPC, web design, and more. Stay updated with actionable digital marketing tips to grow your online presence.",
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
