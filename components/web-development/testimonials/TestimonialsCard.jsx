"use client";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import Image from "next/image";
import CountUp from "react-countup";
import Thumb1Img from "../../../public/images/v1/t_thumb1.png";
import Thumb2Img from "../../../public/images/v1/t_thumb2.png";
import QuoteImg from "../../../public/images/v4/quote.png";
function TestimonialsCard() {
	return (
		<FadeInStaggerTwo>
			<FadeInStaggerTwoChildren className="row">
				<div className="col-lg-4">
					<div className="aximo-counter-wrap4">
						<div className="aximo-counter-data4">
							<h2>
								<span className="aximo-counter">
									<CountUp end={2} duration={2} redraw={true} enableScrollSpy />
								</span>
								+
							</h2>
							<p>Years of experience</p>
						</div>
					</div>
				</div>
				<div className="col-lg-8">
					<div className="aximo-testimonial-wrap aximo-testimonial-wrap3">
						<div className="aximo-testimonial-quote">
							<Image src={QuoteImg} alt="QuoteImg" sizes="100vw" />
						</div>
						<div className="aximo-testimonial-data">
							<p>
								Excellent customer service and I was really impressed and happy with my purchase
								especially as it was a last minute order which got to me in time, and when it arrived I
								was very happy with the design and size and so was the recipient.
							</p>
						</div>
						<div className="aximo-testimonial-author">
							<div className="aximo-testimonial-author-thumb">
								<Image src={Thumb1Img} alt="Thumb1Img" sizes="100vw" />
							</div>
							<div className="aximo-testimonial-author-data">
								<span>William Jack </span>
								<p>CEO & Founder @XYZ</p>
							</div>
						</div>
					</div>
				</div>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="row">
				<div className="col-lg-4 order-lg-2">
					<div className="aximo-counter-wrap4">
						<div className="aximo-counter-data4">
							<h2>
								<span className="aximo-counter">
									<CountUp end={30} duration={3} redraw={true} enableScrollSpy />
								</span>
								+
							</h2>
							<p>Successfully finished projects</p>
						</div>
					</div>
				</div>
				<div className="col-lg-8">
					<div className="aximo-testimonial-wrap aximo-testimonial-wrap3">
						<div className="aximo-testimonial-quote">
							<Image src={QuoteImg} alt="QuoteImg" />
						</div>
						<div className="aximo-testimonial-data">
							<p>
								"Working with Mthemeus has been a game-changer for our company. Their tailored solutions
								& hands-on approach have not only boosted our efficiency but have also opened up new
								avenues for growth. They are an invaluable partner in our journey to success."
							</p>
						</div>
						<div className="aximo-testimonial-author">
							<div className="aximo-testimonial-author-thumb">
								<Image src={Thumb2Img} alt="Thumb2Img" sizes="100vw" />
							</div>
							<div className="aximo-testimonial-author-data">
								<span>Andrew Smith </span>
								<p>Businessman</p>
							</div>
						</div>
					</div>
				</div>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default TestimonialsCard;
