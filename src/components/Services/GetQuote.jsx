import React, { useState, useEffect } from "react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { PhoneCall } from "lucide-react";

export default function GetQuote({ title, kicker, img }) {
	// ----------- Form state -----------
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		address: "",
		postcode: "",
		vehicleRegistration: "",
		vehicleMake: "",
		vehicleModel: "",
		typeOfDamage: "",
		personalOrCompany: "",
		additionalInfo: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);
	const [errors, setErrors] = useState({});

	// ----------- Handle field changes -----------
	const handleChange = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	// ----------- Basic validation -----------
	const validate = () => {
		const newErrors = {};
		if (!formData.name) newErrors.name = "Name is required";
		if (!formData.email) newErrors.email = "Email is required";
		if (!formData.phone) newErrors.phone = "Phone is required";
		return newErrors;
	};

	// ----------- Handle submit -----------
	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validate();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		setErrors({});
		setIsSubmitting(true);

		// Simulate API call
		setTimeout(() => {
			console.log("Form submitted:", formData);
			setIsSubmitting(false);
			setSubmitSuccess(true);

			// Reset form after submit (optional)
			setFormData({
				name: "",
				email: "",
				phone: "",
				address: "",
				postcode: "",
				vehicleRegistration: "",
				vehicleMake: "",
				vehicleModel: "",
				typeOfDamage: "",
				personalOrCompany: "",
				additionalInfo: "",
			});
		}, 1500);
	};

	// ----------- Optional effect on success -----------
	useEffect(() => {
		if (submitSuccess) {
			const timer = setTimeout(() => setSubmitSuccess(false), 4000);
			return () => clearTimeout(timer);
		}
	}, [submitSuccess]);

	return (
		<Container>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
				{/* LEFT CONTENT */}
				<div>
					<div className="flex flex-col gap-6">
						<SectionHeading title={title} kicker={kicker} />

						{/* PHONE */}
						<div className="flex items-center gap-4">
							<div className="w-16 h-16 p-3 rounded-full bg-[#D69212] flex items-center justify-center text-white text-2xl">
								<PhoneCall className="w-10 h-10" />
							</div>

							<div>
								<p className="text-black font-henju text-xl">Call us today</p>
								<p className="text-[#D69212] font-bold font-henju mt-2 text-3xl">
									0333 015 38 83
								</p>
							</div>
						</div>

						<div className="overflow-hidden">
							<img
								src={img}
								alt="Vehicle glass service"
								className="w-full h-[260px] sm:h-[320px] object-cover"
							/>
						</div>
					</div>

					{/* FOOTNOTE */}
					<p className="font-henju font-medium text-xl mt-2 leading-relaxed">
						We are here to help you. If you have several vehicles and would like
						to understand our fleet offerings, please email{" "}
						<span className="text-[#D69212] font-bold ">
							sales@avgwindscreens.co.uk
						</span>
					</p>
				</div>

				{/* RIGHT FORM */}
				<form
					onSubmit={handleSubmit}
					className="bg-white p-8 flex flex-col gap-4 w-full max-w-[880px]"
				>
					{/* NAME */}
					<div className="pb-6 border-b border-[#F3F3F3] flex flex-col gap-4">
						<FormField
							label="Name"
							value={formData.name}
							onChange={(val) => handleChange("name", val)}
							error={errors.name}
						/>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<FormField
								label="Email"
								value={formData.email}
								onChange={(val) => handleChange("email", val)}
								error={errors.email}
							/>
							<FormField
								label="Phone Number"
								value={formData.phone}
								onChange={(val) => handleChange("phone", val)}
								error={errors.phone}
							/>
						</div>
					</div>

					<FormField
						label="First Line of Address"
						value={formData.address}
						onChange={(val) => handleChange("address", val)}
					/>
					<FormField
						label="Post Code"
						value={formData.postcode}
						onChange={(val) => handleChange("postcode", val)}
					/>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<FormField
							label="Vehicle Registration"
							value={formData.vehicleRegistration}
							onChange={(val) => handleChange("vehicleRegistration", val)}
						/>
						<SelectField
							label="Vehicle Make"
							value={formData.vehicleMake}
							onChange={(val) => handleChange("vehicleMake", val)}
						/>
						<SelectField
							label="Vehicle Model"
							value={formData.vehicleModel}
							onChange={(val) => handleChange("vehicleModel", val)}
						/>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<SelectField
							label="Type of Damage"
							value={formData.typeOfDamage}
							onChange={(val) => handleChange("typeOfDamage", val)}
						/>
						<SelectField
							label="Personal or Company Vehicle"
							value={formData.personalOrCompany}
							onChange={(val) => handleChange("personalOrCompany", val)}
						/>
					</div>

					<div className="p-6 bg-[#F3F3F3] min-h-[140px]">
						<textarea
							placeholder="Additional Information"
							className="w-full h-full bg-[#F3F3F3] text-black font-henju text-lg resize-none outline-none"
							value={formData.additionalInfo}
							onChange={(e) => handleChange("additionalInfo", e.target.value)}
						/>
					</div>

					<button
						type="submit"
						className="mt-4 w-fit bg-[#024F2D] px-6 py-4 hover:bg-[#023a1d] transition-colors duration-300"
						disabled={isSubmitting}
					>
						<span className="text-white font-henju text-lg font-semibold">
							{isSubmitting ? "Sending..." : "Send Message"}
						</span>
					</button>

					{submitSuccess && (
						<p className="text-green-600 font-henju mt-4">
							Your message has been sent successfully!
						</p>
					)}
				</form>
			</div>
		</Container>
	);
}

/* ---------- Small internal helpers ---------- */

function FormField({ label, value, onChange, error }) {
	return (
		<div>
			<div className="flex p-6 items-center bg-[#F3F3F3] w-full">
				<input
					type="text"
					placeholder={label}
					className="w-full bg-[#F3F3F3] text-black font-henju text-lg outline-none"
					value={value}
					onChange={(e) => onChange(e.target.value)}
				/>
			</div>
			{error && <p className="text-red-500 text-sm mt-1">{error}</p>}
		</div>
	);
}

function SelectField({ label, value, onChange }) {
	return (
		<div className="flex p-6 items-center justify-between bg-[#F3F3F3] w-full cursor-pointer">
			<span className="text-black/50 font-henju text-lg">{label}</span>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				onClick={() => {
					// you can hook a select dropdown here in future
				}}
			>
				<path
					d="M6 9L12 15L18 9"
					stroke="#024F2D"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	);
}
