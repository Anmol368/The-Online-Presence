import Blog from "@/components/blogs";
import BreadCrumb from "@/components/common/Breadcrumb";

function BlogPage() {
  return (
    <>
      <BreadCrumb title="Blog" />
      <Blog />
    </>
  );
}

export default BlogPage;
