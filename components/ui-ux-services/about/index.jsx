"use client";
import FadeInUp from "@/components/animation/FadeInUp";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import ShapeImg from "../../../public/images/v6/shapes.png";
import Thumb1Img from "../../../public/images/v6/thumb-v6-1.png";
function About() {
	return (
		<div className="section dark-bg2 aximo-section-padding position-relative">
			<div id="aximo-counter"></div>
			<div className="container">
				<div className="aximo-section-title light playfair center max-width-xl">
					<h2>We are professional UI/UX design experts</h2>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 order-lg-2">
						<FadeInUp className="aximo-v6-thumb1">
							<Image src={Thumb1Img} alt="About" sizes="100vw" />
						</FadeInUp>
					</div>
					<div className="col-lg-6 d-flex align-items-center">
						<div className="aximo-default-content-wrap">
							<div className="aximo-default-content light large">
								<p>
									We are an experienced UI/UX design firm offering a professional service
									specializing in creating and also enhancing interior spaces for residential,
									commercial or other types of buildings.
								</p>
								<p>
									We are a team of skilled and quality UI/UX designers who are trained and skilled
									in the art of designing websites to meet the designing
									needs of our clients.
								</p>
							</div>
							<div className="aximo-counter-wrap6">
								<div className="aximo-counter-data6">
									<h2>
										<span className="aximo-counter">
											<CountUp end={2} duration={1} redraw={true} enableScrollSpy />
										</span>
										+
									</h2>
									<p>
										Years of work <br /> experience
									</p>
								</div>
								<div className="aximo-counter-data6">
									<h2>
										<span className="aximo-counter">
											<CountUp end={30} duration={2} redraw={true} enableScrollSpy />
										</span>
										+
									</h2>
									<p>
										successful <br /> projects done
									</p>
								</div>
							</div>
							<div className="aximo-extra-mt text-right">
								<Link className="aximo-default-btn green-btn pill shadow-white" href="/contact-us">
									<span>Read Our Story</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="aximo-footer-shape">
				<Image src={ShapeImg} alt="Shape" />
			</div>
		</div>
	);
}

export default About;
