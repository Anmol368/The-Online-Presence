"use client";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Brand1Img from "../../../public/images/v2/b_1.png";
import Brand2Img from "../../../public/images/v2/b_2.png";
import Brand3Img from "../../../public/images/v2/b_3.png";
import Brand4Img from "../../../public/images/v2/b_4.png";
import Brand5Img from "../../../public/images/v2/b_5.png";
import Brand6Img from "../../../public/images/v2/b_6.png";
import Brand7Img from "../../../public/images/v2/b_7.png";

const sliderData = [
	{
		id: crypto.randomUUID(),
		img: Brand1Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand2Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand3Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand4Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand5Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand6Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand7Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand1Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand2Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand3Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand4Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand5Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand6Img,
	},
	{
		id: crypto.randomUUID(),
		img: Brand7Img,
	},
];

const swiperSettings = {
	centeredSlides: true,
	speed: 6000,
	autoplay: {
		delay: 1,
	},
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: 2,
	breakpoints: {
		768: {
			slidesPerView: 3,
		},
		992: {
			slidesPerView: 4,
		},
		1200: {
			slidesPerView: 5,
		},
		1400: {
			slidesPerView: 6,
		},
	},
};
function BrandLogo() {
	return (
		<div className="aximo-brandlogo-section extra-side-margin">
			<div className="aximo-brandlogo-title">
				<p>We’ve helped over 20+ startups grow their business around the world</p>
			</div>
			<div className="swiper aximo-auto-slider">
				{
					<Swiper {...swiperSettings}>
						{sliderData.map((item) => (
							<SwiperSlide key={item.id}>
								<div className="aximo-brandlogo-item">
									<Image src={item.img} alt="brand logo" sizes="100vw" />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				}
			</div>
		</div>
	);
}

export default BrandLogo;
