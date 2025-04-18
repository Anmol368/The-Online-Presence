import FadeInUp from "@/components/animation/FadeInUp";
import Image from "next/image";
import Link from "next/link";
import Shape2Img from "../../../public/images/v3/shape2.png";
import Thumb1Img from "../../../public/images/v3/thumb1.png";
function About() {
	return (
		<div className="section aximo-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInUp className="aximo-content-thumb ">
							<Image src={Thumb1Img} alt="Thumb1Img" sizes="100vw" />
							<div className="aximo-thumb-shape1">
								<Image src={Shape2Img} alt="Shape2Img" sizes="100vw" />
							</div>
						</FadeInUp>
					</div>
					<div className="col-lg-6 offset-lg-1">
						<div className="aximo-default-content familjen-grotesk">
							<h2>We strive for the best SEO quality</h2>
							<p>
								We are a leading SEO company dedicated to helping brand grow their online presence &
								achieve higher search engine rankings and improve digital performance.
							</p>
							<p>
								Whether you re a small local business or a global brand, we tailor our SEO services to
								meet your unique needs & goals.
							</p>
						</div>
						<FadeInUp className="aximo-btn-wrap">
							<Link className="aximo-default-btn pill yellow-btn" href="/contact-us">
								<span className="aximo-label-up">Explore more</span>
								<span className="aximo-label-up">Explore more</span>
							</Link>
						</FadeInUp>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
