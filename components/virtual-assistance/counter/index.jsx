"use client";
import CountUp from "react-countup";
function Counter() {
	return (
		<div className="aximo-counter-section2">
			<div id="aximo-counter"></div>
			<div className="container">
				<div className="aximo-counter-wrap5">
					<div className="aximo-counter-data5">
						<h2>
							<span className="aximo-counter">
								<CountUp end={2} duration={1} redraw={true} enableScrollSpy />
							</span>
							+
						</h2>
						<p>Years of experience</p>
					</div>
					<div className="aximo-counter-data5">
						<h2>
							<span data-percentage="85" className="aximo-counter"></span>
							<CountUp end={100} duration={2} redraw={true} enableScrollSpy />+
						</h2>
						<p>Active monthly users</p>
					</div>
					<div className="aximo-counter-data5">
						<h2>
							<span className="aximo-counter">
								<CountUp end={30} duration={2} redraw={true} enableScrollSpy />
							</span>
							+
						</h2>
						<p>Project completed</p>
					</div>
					<div className="aximo-counter-data5">
						<h2>
							<span className="aximo-counter">
								<CountUp end={4.8} duration={3} redraw={true} enableScrollSpy decimals="1" />
							</span>
							/5
						</h2>
						<p>Total success rate</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Counter;
