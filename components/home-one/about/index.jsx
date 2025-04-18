import Image from "next/image";
import ThumbImg from "../../../public/images/v2/thumb.png";

import AboutCounter from "./AboutCounter";
function About() {
	return (
		<div className="aximo-about-section green-bg extra-side-margin">
			<div id="aximo-counter"></div>
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<div className="aximo-thumb" id="rotatetwo">
							<Image src={ThumbImg} alt="ThumbImg" sizes="100vw" />
						</div>
					</div>
					<div className="col-lg-7">
						<div className="aximo-default-content clash-grotesk">
							<h2>We help empower visionary founders</h2>
							<p>
								We provide comprehensive support, guidance to early stage startups & entrepreneurs. Our
								mission is to help transform breakthrough ideas into successful and sustainable
								businesses.
							</p>
						</div>
						<AboutCounter />
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
