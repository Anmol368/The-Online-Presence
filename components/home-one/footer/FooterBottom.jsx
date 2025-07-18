import Image from "next/image";
import LogoWhiteImg from "../../../public/images/logo/logo-light.png";
function FooterBottom() {
	return (
		<>
			<div className="col-lg-6">
				<div className="aximo-footer-logo">
					<a href="#">
						<Image src={LogoWhiteImg} className="aximo-footer-logo-img" alt="Logo" />
					</a>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="aximo-copywright one">
					<p> &copy; Copyright 2025, All Rights Reserved by The Online Presence</p>
				</div>
			</div>
		</>
	);
}

export default FooterBottom;
