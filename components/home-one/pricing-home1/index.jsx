import FadeInStagger from "@/components/animation/FadeInStagger";
import Image from "next/image";
import PricingIcon1 from "../../../public/images/v2/pricing-icon1.png";
import PricingIcon2 from "../../../public/images/v2/pricing-icon2.png";
import PricingIcon3 from "../../../public/images/v2/pricing-icon3.png";
import Shape3Img from "../../../public/images/v2/shape3.png";
import PricingCard from "./PricingCard";
const pricingData = [
	{
		id: crypto.randomUUID(),
		plan: "Basic",
		price: "19.00",
		img: PricingIcon1,
		services: [
			"90 mins session duration",
			"Multiple modes of networking",
			"Live event engagement",
			"Pre-set emails",
			"Real-time data & basic reports",
		],
		active: false,
	},
	{
		id: crypto.randomUUID(),
		plan: "Startup",
		price: "29.99",
		img: PricingIcon2,
		services: [
			"Advanced networking modes",
			"Unlimited session duration",
			"Custom event branding",
			"Advanced analytics report",
			"Leaderboard & gamification",
		],
		active: true,
	},
	{
		id: crypto.randomUUID(),
		plan: "Enterprise",
		price: "48.99",
		img: PricingIcon3,
		services: [
			"Advanced networking modes",
			"Dedicated account manager",
			"3D event experiences",
			"Mobile app & website create",
			"Personalization & branding",
		],
		active: false,
	},
];
function Pricing() {
	return (
		<div className="section aximo-section-padding3 position-relative">
			<div className="container">
				<div className="aximo-section-title center clash-grotesk">
					<h2>Simple pricing plans that save you money</h2>
				</div>
				<div className="row">
					{pricingData.map((pricing, index) => (
						<FadeInStagger key={pricing.id} index={index} className="col-lg-4 col-md-6">
							<PricingCard pricing={pricing} />
						</FadeInStagger>
					))}
				</div>
			</div>

			{/* <div className="aximo-pricing-shape">
				<Image src={Shape3Img} alt="Shape3Img" sizes="100vw" />
			</div> */}
		</div>
	);
}

export default Pricing;
