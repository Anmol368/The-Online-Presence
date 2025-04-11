"use client";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Project1Img from "../../../public/images/project/project1/image.jpg";
import Project2Img from "../../../public/images/project/project2/image1.png";
import Project3Img from "../../../public/images/project/project3/image2.png";
import Project4Img from "../../../public/images/project/project4/image3.png";
import Project5Img from "../../../public/images/project/project5/image4.png";
import Project6Img from "../../../public/images/project/project6/image5.png";
import ProjectCard from "./ProjectCard";

const projectsData = [
	{
		id: crypto.randomUUID(),
		title: "Taylor Tasting Tours",
		description:
			"Taylor tasting tours is a wine tours website focusing on wine touurs across all locations.",
		img: Project1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Zip Up Zipper",
		description: "Zip Up Zipper is a E-commerce website for all kinds of zippers.",
		img: Project3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "ACES Psychiatry",
		description:
			"ACES Psychiatry is a website that provides you psychiatry consultation in Orlando.",
		img: Project4Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Disposable Plastic & Bamboo Plates",
		description:
			"Disposable Plastic & Bamboo Plates is a E-commerce website for plastic and bamboo diaposable plates.",
		img: Project2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Fetzer Group AI",
		description:
			"Fetzer Group AI is website platform to assess the financial stability of your business and secure your future.",
		img: Project5Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Liability Program Management",
		description:
			"Liability Program Management is a website platform designs and executes risk management programs, which include OSHA, FEHA and Safety compliance.",
		img: Project6Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Taylor Tasting Tours",
		description:
			"Taylor tasting tours is a wine tours website focusing on wine touurs across all locations.",
		img: Project1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Zip Up Zipper",
		description: "Zip Up Zipper is a E-commerce website for all kinds of zippers.",
		img: Project3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "ACES Psychiatry",
		description:
			"ACES Psychiatry is a website that provides you psychiatry consultation in Orlando.",
		img: Project4Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Disposable Plastic & Bamboo Plates",
		description:
			"Disposable Plastic & Bamboo Plates is a E-commerce website for plastic and bamboo diaposable plates.",
		img: Project2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Fetzer Group AI",
		description:
			"Fetzer Group AI is website platform to assess the financial stability of your business and secure your future.",
		img: Project5Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Liability Program Management",
		description:
			"Liability Program Management is a website platform designs and executes risk management programs, which include OSHA, FEHA and Safety compliance.",
		img: Project6Img,
	},
];

const swiperSettings = {
	spaceBetween: 24,
	scrollbar: {
		draggable: true,
	},
	modules: [Scrollbar],

	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		900: {
			slidesPerView: 2,
		},
		1600: {
			slidesPerView: 3,
		},
	},
};
function Projects() {
	return (
		<div className="aximo-project-section aximo-section-padding extra-side-margin">
			<div className="container">
				<div className="aximo-section-title center light arimo-font">
					<span className="aximo-subtitle">Our stunning creation</span>
					<h2>Our dedication shines through our work</h2>
				</div>
			</div>
			<div className="swiper aximo-project-slider2">
				<Swiper {...swiperSettings}>
					{projectsData.map((project) => (
						<SwiperSlide key={project.id}>
							<ProjectCard project={project} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default Projects;
