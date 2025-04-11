"use client";
import { useForm } from "react-hook-form";
import Field from "../../common/Field";
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
		<form onSubmit={handleSubmit(submitForm)}>
			<div className="aximo-form-field2">
				<Field error={errors.fname}>
					<input
						{...register("fname", { required: "Full Name is required." })}
						type="number"
						name="fname"
						id="fname"
						placeholder="Enter your 10 digits contact number"
					/>
				</Field>
			</div>
			<div className="aximo-form-field2">
				<Field error={errors.email}>
					<input
						{...register("email", { required: "Email is required." })}
						type="email"
						name="email"
						id="email"
						placeholder="Enter your Email Address"
					/>
				</Field>
			</div>
			<div className="aximo-form-field2">
				<input name="url" placeholder="Enter your website URL"></input>
			</div>
			<button id="aximo-submit-btn2" type="submit">
				<span className="aximo-label-up">Get A Quote!</span>
				<span className="aximo-label-up">Get A Quote!</span>
			</button>
		</form>
	);
}

export default ContactForm;
