import Image from "next/image";
import Link from "next/link";
import CheckImg from "../../public/images/icon/check.svg";
import BestSeller from "../../public/images/icon/best-seller.png";
function PricingCard({ plan: { title, description, description2, price, features, highlighted }, frequency }) {
	return (
		<div className={`aximo-pricing-wrap2 ${highlighted && "highlighted-pricing-card"}`}>
			{highlighted && <Image className="best-seller-img" src={BestSeller} alt="best seller" />}
			<div className="aximo-pricing-header2">
				<h5>{title}</h5>
			</div>
			<div className="aximo-pricing-price2">
				<h2>
					$
					{price.map((item) => {
						if (item.id === frequency.id) {
							return item.value;
						}
					})}
				</h2>
			</div>
			<div className="aximo-pricing-description">
				<p>{description}</p>
			</div>
			<div className="aximo-pricing-description2">
				<p>{description2}</p>
			</div>
			<div className="aximo-pricing-body2">
				<ul>
					{features.map((feature) => (
						<li key={feature}>
							<Image src={CheckImg} alt="check" />
							{feature}
						</li>
					))}
				</ul>
			</div>
			<Link className={`aximo-pricing-btn2 ${highlighted && "active"}`} href="/pricing">
				Select the package
			</Link>
		</div>
	);
}

export default PricingCard;
