import FadeInStagger from "@/components/animation/FadeInStagger";
import Image from "next/image";
import Star2Img from "../../../public/images/v1/star2.png";
import Thumb1Img from "../../../public/images/v1/t_thumb1.png";
import Thumb2Img from "../../../public/images/v1/t_thumb2.png";
import Thumb3Img from "../../../public/images/v1/t_thumb3.png";
import Thumb4Img from "../../../public/images/v1/t_thumb4.png";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Super customer service!",
		description:
			"I have worked with them since October 2023 .they have redone my website and are currently performing some SEO work. They have used the latest technology to make vast improvements for my web site. It looks great. They have been exceptionally responsive to my requests and continue to keep me abreast of all updates and Tweeks. I look forward to a long business relationship with them.",
		author: "Don Ward | ",
		designation: "Owner, Taylor tasting tours",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Innovative and professional",
		description:
			"We have benefitted greatly from working with Tony and theonlinepresence.com. Tony runs a very professional operation, and Tony is personally involved in all aspects of it. Theonlinepresence.com has helped us take the marketing aspect of our business to a higher level. We recommend using theonlinepresence.com to get your business name out there for the whole world to see, as well as your local working area.",
		author: "Arnie Castro | ",
		designation: "One of the client's",
		img: Thumb3Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 4,
		title: "Exceptional creativity and vision",
		description:
			"I was looking for someone to put me on the internet map, so to speak… and I’m so glad I found Tony and the online presence. I was told to be patient, because it takes around 3 months to really see the difference and now my Enquiries and bookings have more than doubled. I couldn’t be happier with my website and the SEO service Tony and his team offer me. Best thing is there’s always someone to speak to and they deal with any of my questions or queries immediately.",
		author: "Marnie Spicer | ",
		designation: "One of the client's",
		img: Thumb2Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 4,
		title: "Transformed Our Online Visibility - From Page 19 to the Top!",
		description:
			"The results from The Online Presence have been outstanding – a definite 5-star experience! Before working with them, our practice website, ACES Psychiatry (acespsychiatry.com), was buried around page 19 of search results – basically invisible to potential clients searching for psychiatric services in Orlando. The Online Presence implemented their SEO strategies, and the results were remarkable. Our website quickly climbed the rankings, and now ACES Psychiatry consistently appears on the first or second page for key searches. Moving from page 19 to the top pages is a huge improvement! This increased visibility is a game-changer, especially in a competitive area like Lake Nona. Being found easily online is crucial for connecting with the children, adolescents, and adults who need our psychiatric services. Their SEO expertise delivered tangible, significant results. If your website is buried in search results, I highly recommend The Online Presence. They were instrumental in boosting our online visibility. Thank you!",

		author: "Dr. Ishdeep Narang | ",
		designation: "Founder, ACES Psychiatry, Orlando FL",
		img: Thumb4Img,
	},
];

function Testimonial() {
	return (
		<div className="section aximo-section-padding3">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						Clients are always satisfied with us
						<span className="aximo-title-animation">
							{/* <span className="aximo-title-icon">
								<Image src={Star2Img} alt="Star2Img" />
							</span> */}
						</span>
					</h2>
				</div>
				<div className="row">
					{testimonialsData.map((testimonial, index) => (
						<FadeInStagger index={index} className="col-lg-6" key={testimonial.id}>
							<TestimonialCard testimonial={testimonial} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
