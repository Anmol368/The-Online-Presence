import Image from "next/image";

function TestimonialCard({ testimonial: { author, designation, title, description, img } }) {
	return (
		<div className="aximo-testimonial-slider-column">
			<div className="aximo-testimonial-slider-wrap">
				<div className="aximo-testimonial-slider-thumb">
					<Image src={img} alt={title} sizes="100vw" />
				</div>
				<div className="aximo-testimonial-slider-author">
					<h5>{author}</h5>
					<p>{designation}</p>
				</div>
			</div>
			<div className="aximo-testimonial-slider-data">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default TestimonialCard;
