import Link from "next/link";
import Blog1Img from "../../../public/images/v6/blog-v6-1.png";
import Blog2Img from "../../../public/images/v6/blog-v6-2.png";
import BlogCard from "./BlogCard";
const blogsData = [
	{
		id: crypto.randomUUID(),
		title: "How to increase your business presence online",
		content: "At the beginning of a home redesign, the client said she found herself making much safer choices…",
		category: "SEO",
		date: "June 15, 2024",
		img: Blog1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Increase your knowledge about on-page and off-page SEO",
		content:
			"Of course, having a dedicated home office with ample storage, room for supplies, and a proper desk setup...",
		category: "SEO",
		date: "June 10, 2024",
		img: Blog2Img,
	},
];
function Blogs() {
	return (
		<div className="section aximo-section-padding3">
			<div className="container">
				<div className="aximo-section-title playfair">
					<div className="row">
						<div className="col-lg-8">
							<h2>Check out our latest articles and news</h2>
						</div>
						<div className="col-lg-4 d-flex align-items-center">
							<div className="aximo-title-btn">
								<Link className="aximo-default-btn purple-btn pill" href="/blog">
									<span className="aximo-label-up">Explore All Blogs</span>
            						<span className="aximo-label-up">Explore All Blogs</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					{blogsData.map((blog) => (
						<BlogCard key={blog.id} blog={blog} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Blogs;
