import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import Image from "next/image";
import Link from "next/link";
import Shape1Img from "../../../public/images/v5/shape1.png";
function Hero() {
	return (
		<div className="aximo-hero-section5 green-bg">
			<div className="container">
				<div className="aximo-hero-content5">
					<h1>
						Hire a
						<span className="aximo-hero-shape-title">
							 digital
							<Image className="aximo-hero-wave-shape" src={Shape1Img} alt="Shape" />
						</span>
						virtual assistant for your business
					</h1>
					<p>
						As a digital marketing agency, we specialize in providing a range of online marketing and
						advertising-related services. We help businesses and individuals promote your product, service,
						or brand through various digital channels.
					</p>
					<FadeInStaggerTwo className="aximo-hero-btn-wrap center">
						<FadeInStaggerTwoChildren>
							<Link className="aximo-default-btn pill corn-btn" href="/contact-us">
								<span className="aximo-label-up">Let&apos;s Talk</span>
								<span className="aximo-label-up">Let&apos;s Talk</span>
							</Link>
						</FadeInStaggerTwoChildren>
						<FadeInStaggerTwoChildren>
							<Link
								className="aximo-default-btn aximo-default-btn-outline pill"
								href="/service"
							>
								<span className="aximo-label-up">Explore Our Services</span>
								<span className="aximo-label-up">Explore Our Services</span>
							</Link>
						</FadeInStaggerTwoChildren>
					</FadeInStaggerTwo>
				</div>
			</div>
		</div>
	);
}

export default Hero;
