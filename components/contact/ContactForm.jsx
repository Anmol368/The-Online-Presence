"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import ContactThumb from "../../public/images/contact/contact-thumb.png";
import Star2Img from "../../public/images/v1/star2.png";
import FadeInRight from "../animation/FadeInRight";
import Field from "../common/Field";
function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		console.log("Submite Form Data = ", formData);
	};
	return (
		<div className="section aximo-section-padding">
			<div className="container">
				<div className="row">
					<div className="">
						<div className="aximo-section-title-contact-us">
							<h2>
								Contact us for the best consultation
							</h2>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="aximo-contact-thumb ">
							<Image src={ContactThumb} alt="Contact Thumb" />
						</FadeInRight>
					</div>
					<div className="col-lg-7">
						<div className="aximo-main-form">
							<form onSubmit={handleSubmit(submitForm)}>
								<div className="aximo-main-field">
									<Field label="Your Full Name*" error={errors.name}>
										<input
											{...register("name", { required: "Name is required." })}
											type="name"
											name="name"
											id="name"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<Field label="Enter Email Address*" error={errors.email}>
										<input
											{...register("email", { required: "Email is required." })}
											type="email"
											name="email"
											id="email"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<Field label="Enter Website URL*" error={errors.url}>
										<input
											{...register("url", { required: "Website url is required." })}
											type="url"
											name="url"
											id="url"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<Field label="Enter Phone Number*" error={errors.phone}>
										<input
											{...register("phone", { required: "Phone is required." })}
											type="phone"
											name="phone"
											id="phone"
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<Field label="Project Type*" error={errors.budget}>
  										<select name="type" id="type" className="project-budget">
											<option></option>
    										<option value="seo">SEO</option>
    										<option value="website-development">Website Development</option>
    										<option value="ui-ux">UI/UX ( Website Design )</option>
    										<option value="va">Virtual Assistance</option>
  										</select>
									</Field>
								</div>
								<div className="aximo-main-field">
									<Field label="Project Budget*" error={errors.budget}>
  										<select name="budget" id="budget" className="project-budget">
											<option></option>
    										<option value="0-500-month">$0-$500/month</option>
    										<option value="500-1000-month">$500-$1000/month</option>
    										<option value="1000-2000-month">$1000-$2000/month</option>
    										<option value="2000-4000-month">$2000-$4000/month</option>
    										<option value="5000+-month">$5000+/month</option>
    										<option value="custom">Custom</option>
  										</select>
									</Field>
								</div>
								<div className="aximo-main-field">
									<label>Write your message here...</label>
									<textarea name="textarea"></textarea>
								</div>
								<button id="aximo-main-btn" type="submit">
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
