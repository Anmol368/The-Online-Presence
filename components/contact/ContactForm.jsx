"use client";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ContactThumb from "../../public/images/contact/contact-thumb.png";
import Star2Img from "../../public/images/v1/star2.png";
import FadeInRight from "../animation/FadeInRight";
import Field from "../common/Field";


const initValues = { fullname: "", email: "", url: "", phone: "", type: "", budget: "", message: "",};

const initState = { values: initValues };


function ContactForm() {

	const [state, setState] = useState(initState);
  	const [submitting, setSubmitting] = useState(false);

  	const { values } = state; 

	// const {
	// 	register,
	// 	formState: { errors },
	// } = useForm();
	// const submitForm = (formData) => {
	// 	console.log("Submited Form Data = ", formData);
	// };
	const handleInputChange = ({ target }) =>
		setState((prev) => ({
		  ...prev,
		  values: {
			...prev.values,
			[target.name]: target.value,
		  },
	}));


	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitting(true);
	
		// send email
		const response = await fetch('/api/contact-us-form', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			"Access-Control-Allow-Origin" : "*", 
			"Access-Control-Allow-Credentials" : true 
		  },
		  body: JSON.stringify(values),
		});
		console.log(response);
		const { success, error } = await response.json();
	
		  if (success) {
			setState(initState);
			toast.success("Message Sent Successfully");
	
		  } else if (error) {
			toast.error("Error Sending Message");
			throw new Error("Error while submitting your inquiry");
			
		  }
	
		  setSubmitting(false);
	
	  }

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
							{/* <form onSubmit={(e) => {handleSubmit(submitForm)}}> */}
							<form onSubmit={handleSubmit}>
								<div className="aximo-main-field">
									{/* <Field label="Your Full Name*" error={errors.name}> */}
									<Field label="Your Full Name*">
										<input
											// {...register("name", { required: "Name is required." })}
											type="text"
											name="fullname"
											id="fullname"
											value={values.fullname}
            								onChange={handleInputChange}
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									{/* <Field label="Enter Email Address*" error={errors.email}> */}
									<Field label="Enter Email Address*">
										<input
											// {...register("email", { required: "Email is required." })}
											type="email"
											name="email"
											id="email"
											value={values.email}
            								onChange={handleInputChange}
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									{/* <Field label="Enter Website URL*" error={errors.url}> */}
									<Field label="Enter Website URL*">
										<input
											// {...register("url", { required: "Website url is required." })}
											type="url"
											name="url"
											id="url"
											value={values.url}
            								onChange={handleInputChange}
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									{/* <Field label="Enter Phone Number*" error={errors.phone}> */}
									<Field label="Enter Phone Number*">
										<input
											// {...register("phone", { required: "Phone is required." })}
											type="number"
											name="phone"
											id="phone"
											value={values.phone}
            								onChange={handleInputChange}
										/>
									</Field>
								</div>
								{/* <div className="aximo-main-field">
									<Field label="Project Type*" error={errors.budget}>
									<Field label="Project Type*">
  										<select 
										name="type" 
										id="type" 
										className="project-budget"
										value={values.type}
            							onChange={handleInputChange}
										>
											<option></option>
    										<option value="seo">SEO</option>
    										<option value="website-development">Website Development</option>
    										<option value="ui-ux">UI/UX ( Website Design )</option>
    										<option value="va">Virtual Assistance</option>
  										</select>
									</Field>
								</div> */}
								{/* <div className="aximo-main-field">
									<Field label="Project Budget*" error={errors.budget}>
									<Field label="Project Budget*">
  										<select 
										name="budget" 
										id="budget" 
										className="project-budget"
										value={values.budget}
            							onChange={handleInputChange}
										>
											<option></option>
    										<option value="0-500-month">$0-$500/month</option>
    										<option value="500-1000-month">$500-$1000/month</option>
    										<option value="1000-2000-month">$1000-$2000/month</option>
    										<option value="2000-4000-month">$2000-$4000/month</option>
    										<option value="5000+-month">$5000+/month</option>
    										<option value="custom">Custom</option>
  										</select>
									</Field>
								</div> */}
								<div className="aximo-main-field">
									<label>Write your message here...</label>
									<textarea 
									id="message"
									name="message"
									value={values.message}
            						onChange={handleInputChange}
									></textarea>
								</div>
								<button id="aximo-main-btn" type="submit">
									{submitting ? "Loading..." : "Send Us Message"}
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
