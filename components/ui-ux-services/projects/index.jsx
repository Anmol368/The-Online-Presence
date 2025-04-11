import FadeInStagger from "@/components/animation/FadeInStagger";
import Image from "next/image";
import Project1Img from "../../../public/images/project/project1/image.jpg";
import Project2Img from "../../../public/images/project/project2/image1.png";
import Project3Img from "../../../public/images/project/project3/image2.png";
import Project4Img from "../../../public/images/project/project4/image3.png";
import Project5Img from "../../../public/images/project/project5/image4.png";
import Project6Img from "../../../public/images/project/project6/image5.png";
// import Project1Img from "../../../public/images/v6/p_1.png";
// import Project2Img from "../../../public/images/v6/p_2.png";
// import Project3Img from "../../../public/images/v6/p_3.png";
// import Project4Img from "../../../public/images/v6/p_4.png";
import Shape2Img from "../../../public/images/v6/shapes2.png";
import ProjectCard from "./ProjectCard";

const projectsData = [
	// {
	// 	id: crypto.randomUUID(),
	// 	title: "Corporate Elegance",
	// 	img: Project1Img,
	// 	colSize: "6",
	// },
	// {
	// 	id: crypto.randomUUID(),
	// 	title: "Corporate Elegance",
	// 	img: Project2Img,
	// 	colSize: "6",
	// },
	// {
	// 	id: crypto.randomUUID(),
	// 	title: "Corporate Elegance",
	// 	img: Project3Img,
	// 	colSize: "8",
	// },
	// {
	// 	id: crypto.randomUUID(),
	// 	title: "Corporate Elegance",
	// 	img: Project4Img,
	// 	colSize: "4",
	// },
	{
			id: crypto.randomUUID(),
			title: "Taylor Tasting Tours",
			img: Project1Img,
			colSize: "6",
		},
		{
			id: crypto.randomUUID(),
			title: "Disposable Plastic & Bamboo Plates",
			img: Project2Img,
			colSize: "6",
		},
		{
			id: crypto.randomUUID(),
			title: "Zip Up Zipper",
			img: Project3Img,
			colSize: "6",
		},
		{
			id: crypto.randomUUID(),
			title: "ACES Psychiatry",
			img: Project4Img,
			colSize: "6",
		},
		{
			id: crypto.randomUUID(),
			title: "Fetzer Group AI",
			img: Project5Img,
			colSize: "6",
		},
		{
			id: crypto.randomUUID(),
			title: "Liability Program Management",
			img: Project6Img,
			colSize: "6",
		},
];
function Projects() {
	return (
		<div className="section aximo-section-padding5 position-relative">
			<div className="container">
				<div className="aximo-section-title playfair center max-width-xl">
					<h2>Explore our latest UI/UX design projects</h2>
				</div>
				<div className="row">
					{projectsData.map((project, index) => (
						<FadeInStagger className={`col-md-${project.colSize}`} index={index} key={project.id}>
							<ProjectCard project={project} />
						</FadeInStagger>
					))}
				</div>
			</div>
			<div className="aximo-p-shape">
				<Image src={Shape2Img} alt="Shape" />
			</div>
		</div>
	);
}

export default Projects;
