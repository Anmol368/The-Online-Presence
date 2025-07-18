"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Icon1 from "../../../public/images/v6/icon-v-6-1.png";
import Icon2 from "../../../public/images/v6/icon-v-6-2.png";
import Icon3 from "../../../public/images/v6/icon-v-6-3.png";
import ServiceCard from "./ServiceCard";

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "SEO Services",
		description:
			"Tailored home design solutions that reflect the client&apos;s lifestyle preferences, and functional needs.",
		img: Icon1,
		bgColor: "purple-bg",
	},
	{
		id: crypto.randomUUID(),
		title: "Web Development",
		description:
			"Office design solutions focusing on functionality, color, productivity, and a professional aesthetic look.",
		img: Icon2,
		bgColor: "bg-light7",
	},
	{
		id: crypto.randomUUID(),
		title: "UI/UX Design",
		description:
			"Space planning, furniture selection, color coordination, to create inviting and personalized interiors.",
		img: Icon3,
		bgColor: "green-bg2",
	},
	{
		id: crypto.randomUUID(),
		title: "Virtual Assistance",
		description:
			"Tailored home design solutions that reflect the client&apos;s lifestyle preferences, and functional needs.",
		img: Icon1,
		bgColor: "bg-light7",
	},
	// {
	// 	id: crypto.randomUUID(),
	// 	title: "Commercial Interior Design",
	// 	description:
	// 		"Office design solutions focusing on functionality, color, productivity, and a professional aesthetic look.",
	// 	img: Icon2,
	// 	bgColor: "bg-light7",
	// },
	// {
	// 	id: crypto.randomUUID(),
	// 	title: "Space Planning",
	// 	description:
	// 		"Space planning, furniture selection, color coordination, to create inviting and personalized interiors.",
	// 	img: Icon3,
	// 	bgColor: "green-bg2",
	// },
	// {
	// 	id: crypto.randomUUID(),
	// 	title: "Residential Interior Design",
	// 	description:
	// 		"Tailored home design solutions that reflect the client&apos;s lifestyle preferences, and functional needs.",
	// 	img: Icon1,
	// 	bgColor: "cornflower-bg",
	// },
	// {
	// 	id: crypto.randomUUID(),
	// 	title: "Commercial Interior Design",
	// 	description:
	// 		"Office design solutions focusing on functionality, color, productivity, and a professional aesthetic look.",
	// 	img: Icon2,
	// 	bgColor: "bg-light7",
	// },
	// {
	// 	id: crypto.randomUUID(),
	// 	title: "Space Planning",
	// 	description:
	// 		"Space planning, furniture selection, color coordination, to create inviting and personalized interiors.",
	// 	img: Icon3,
	// 	bgColor: "green-bg2",
	// },
];

const swiperSettings = {
	loop: true,
	spaceBetween: 30,
	grabCursor: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	modules: [Navigation],
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		900: {
			slidesPerView: 1.5,
		},
		1200: {
			slidesPerView: 1.5,
		},
		1400: {
			slidesPerView: 2.5,
		},
	},
};
function Services() {
	return (
		<div className="section aximo-section-padding4">
			<div className="container">
				<div className="row aximo_screenfix_right">
					<div className="swiper aximo-iconbox-slider">
						<div className="row">
							<div className="col-lg-6">
								<div className="aximo-section-title playfair1">
									<h2>Professional digital marketing & design services</h2>
								</div>
							</div>
						</div>
						<Swiper {...swiperSettings}>
							{servicesData.map((service) => (
								<SwiperSlide key={service.id}>
									<ServiceCard service={service} />
								</SwiperSlide>
							))}
						</Swiper>
						<div className="aximo-iconbox-slider-arrows">
							<div className="swiper-button-prev"></div>
							<div className="swiper-button-next"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;
