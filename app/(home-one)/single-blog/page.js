import SingleBlog from "@/components/blogs/single-blog";
import BreadCrumb from "@/components/common/Breadcrumb";

function SingleBlogPage() {
  return (
    <>
      <BreadCrumb title="Blog Details" />
      <SingleBlog />
    </>
  );
}

export default SingleBlogPage;
