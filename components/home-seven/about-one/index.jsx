import FadeInLeft from "@/components/animation/FadeInLeft";
import Image from "next/image";
import CheckImg from "../../../public/images/v7/check.png";
import ThumbImg from "../../../public/images/v7/thumb1.png";
function AboutOne() {
	return (
		<div className="section aximo-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<FadeInLeft className="aximo-content-thumb ">
							<Image src={ThumbImg} alt="Thumb" sizes="100vw" />
						</FadeInLeft>
					</div>
					<div className="col-lg-6">
						<div className="aximo-default-content bricolage-font">
							<h2>To analyze the market demand for a product</h2>
							<p>
								We conduct thorough market research to comprehend our target audience, industry trends,
								and competitors. This data serves as the foundation for creating effective advertising
								strategies.
							</p>
							<div className="aximo-list-icon2">
								<ul>
									<li>
										<Image src={CheckImg} alt="check mark" />
										<span>Market Research: </span>Conducting market research to gather main
										information about the target audience, competitors trends.
									</li>
									<li>
										<Image src={CheckImg} alt="check mark" />
										<span>Strategic Planning:</span> We work closely with clients to define clear
										advertising objectives and develop a comprehensive strategy.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutOne;
