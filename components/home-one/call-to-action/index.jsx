import FadeInUp from "@/components/animation/FadeInUp";
import Image from "next/image";
import Link from "next/link";
import Shape4Img from "../../../public/images/v2/up-arrow.svg";
import StarImg from "../../../public/images/v1/star.svg";
function CallToAction() {
	return (
		<div className="aximo-cta-section aximo-section-padding extra-side-margin position-relative">
			<div className="container">
				<div className="aximo-cta-wrap">
					<h2>Join us on your path to future success</h2>
					<FadeInUp>
						<Link className="aximo-default-btn aximo-default-btn1" href="/contact-us">
							<span className="aximo-label-up">Contact Us</span>
							<span className="aximo-label-up">Contact Us</span>
						</Link>
					</FadeInUp>
				</div>
			</div>
			<div className="aximo-cta-shape1">
				<Image src={Shape4Img} alt="Shape4Img" sizes="100vw" />
			</div>
			<div className="aximo-cta-shape2">
				<Image src={StarImg} alt="StarImg" sizes="100vw" />
			</div>
		</div>
	);
}

export default CallToAction;
