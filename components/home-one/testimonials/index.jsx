import Thumb1Img from "../../../public/images/v1/t_thumb1.png";
import Thumb2Img from "../../../public/images/v1/t_thumb2.png";
import Thumb3Img from "../../../public/images/v1/t_thumb3.png";
import TestimonialCard from "./TestimonialCard";
const testimonialsData = [
	{
		id: crypto.randomUUID(),
		rating: 5,
		content:
			"I have worked with them since October 2023 .they have redone my website and are currently performing some SEO work. They have used the latest technology to make vast improvements for my web site. It looks great. They have been exceptionally responsive to my requests and continue to keep me abreast of all updates and Tweeks. I look forward to a long business relationship with them.",
		author: "Don Ward",
		designation: "Owner, Taylor tasting tours",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		content:
			"We have benefitted greatly from working with Tony and theonlinepresence.com. Tony runs a very professional operation, and Tony is personally involved in all aspects of it. Theonlinepresence.com has helped us take the marketing aspect of our business to a higher level. We recommend using theonlinepresence.com to get your business name out there for the whole world to see, as well as your local working area.",
		author: "Arnie Castro",
		designation: "One of the client's",
		img: Thumb2Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		content:
			"I was looking for someone to put me on the internet map, so to speak… and I’m so glad I found Tony and the online presence. I was told to be patient, because it takes around 3 months to really see the difference and now my Enquiries and bookings have more than doubled. I couldn’t be happier with my website and the SEO service Tony and his team offer me. Best thing is there’s always someone to speak to and they deal with any of my questions or queries immediately.",
		author: "Marnie Spicer",
		designation: "One of the client's",
		img: Thumb3Img,
	},
];
function Testimonials() {
	return (
		<div className="blue-bg aximo-section-padding extra-side-margin">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="aximo-default-content clash-grotesk aximo-sticky">
							<h2>Appreciation from our loving clients</h2>
							<p>
								Its wonderful to hear that our clients appreciate our services! Client appreciation is
								valuable proof of the quality of our work.
							</p>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="aximo-testimonial-column">
							{testimonialsData.map((testimonial) => (
								<TestimonialCard key={testimonial.id} testimonial={testimonial} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonials;
