import Link from "next/link";
function HeaderButton() {
	return (
		<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
			<Link className="aximo-default-btn aximo-header-btn" href="/contact-us">
				<span className="aximo-label-up">Hire Us!</span>
				<span className="aximo-label-up">Hire Us!</span>
			</Link>
		</div>
	);
}

export default HeaderButton;
