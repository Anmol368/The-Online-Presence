import Image from "next/image";

function TestimonialCard({ testimonial: { rating, title, description, author, designation, img } }) {
	return (
		<div className="aximo-testimonial-wrap">
			<div className="aximo-testimonial-rating">
				<ul>
					{[...Array(rating)].map(() => (
						<li key={crypto.randomUUID()}>
							<i className="icon-star"></i>
						</li>
					))}
				</ul>
			</div>
			<div className="aximo-testimonial-data">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<div className="aximo-testimonial-author">
				<div className="aximo-testimonial-author-thumb">
					<Image src={img} alt={title} />
				</div>
				<div className="aximo-testimonial-author-data1">
					<p>
						{author} <span>{designation}</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
