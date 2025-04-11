import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";

import ContactForm from "../contact/ContactForm";
import HeroContent from "./HeroContent";
import HeroThumbs from "./HeroThumbs";

import Image from "next/image";
import ShapeStarImg from "../../../public/images/v2/shape-star.png";
import Shape1Img from "../../../public/images/v2/shape1.png";

function Hero() {
	return (
		<div className="aximo-hero-section2 grid">
			<div className="container aximo-hero-section2-flex">
			    <FadeInStaggerTwoChildren className="aximo-hero-section2-flex flex-properties" >
					<HeroContent />
					{/* <div className="aximo-hero-shape1">
						<Image src={Shape1Img} alt="Shape" />
					</div>
					<div className="aximo-hero-shape2">
						<Image src={ShapeStarImg} alt="ShapeStarImg" />
					</div> */}
				</FadeInStaggerTwoChildren>

				
				<FadeInStaggerTwoChildren className="aximo-hero-section2-flex flex-properties">
						<div className="aximo-form-wrap2 width-property1">
							<h3>Send us a message</h3>
							<p>
								Fill out the form and our experts will get back to you with a free analysis and proposal
							</p>
							<ContactForm />
						</div>
					</FadeInStaggerTwoChildren>
			</div>
			{/* <HeroThumbs /> */}
			<div>
				<h2 className="hero-clip-text-digital">
					digital
				</h2>
			</div>
		</div>
	);
}

export default Hero;
