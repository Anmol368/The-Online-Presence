"use client";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import CountUp from "react-countup";
function Counter() {
	return (
		<div className="aximo-counter-section dark-bg">
			<div id="aximo-counter"></div>
			<div className="container">
				<div className="aximo-counter-title">
					<p>Our results speak for our ability to succeed</p>
				</div>
				<FadeInStaggerTwo className="aximo-counter-wrap3">
					<FadeInStaggerTwoChildren className="aximo-counter-data3">
						<h2>
							<em>.</em>
							<span className="aximo-counter">
								<CountUp end={2} duration={2} redraw={true} enableScrollSpy />
							</span>
							+
						</h2>
						<p>Years of experience</p>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="aximo-counter-data3">
						<h2>
							<em>.</em>
							<span className="aximo-counter">
								<CountUp end={85} duration={3} redraw={true} enableScrollSpy />
							</span>
							%
						</h2>
						<p>Average Conversion Rate</p>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="aximo-counter-data3">
						<h2>
							<em>.</em>
							<span className="aximo-counter">
								<CountUp end={6} duration={2} redraw={true} enableScrollSpy />
							</span>
							k+
						</h2>
						<p>Traffic Generated</p>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="aximo-counter-data3">
						<h2>
							<em>.</em>
							<span className="aximo-counter">
								<CountUp end={100} duration={3} redraw={true} enableScrollSpy />
							</span>
							%
						</h2>
						<p>Client satisfaction score</p>
					</FadeInStaggerTwoChildren>
				</FadeInStaggerTwo>
			</div>
		</div>
	);
}

export default Counter;
