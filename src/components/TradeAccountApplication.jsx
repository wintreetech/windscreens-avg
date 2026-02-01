import React, { useState } from "react";
import RadialProgress from "./RadialProgress";

/* ---------- STEP DOT ---------- */
function StepDot({ active }) {
	return (
		<span className="h-14 w-14 flex items-center justify-center shrink-0">
			<span
				className={`h-9 w-9 rounded-full ${
					active ? "bg-[#024F2D]" : "bg-neutral-200"
				}`}
			/>
		</span>
	);
}

/* ---------- TEXT INPUT ---------- */
function Input({ label, name, value, onChange }) {
	return (
		<input
			type="text"
			name={name}
			value={value}
			onChange={onChange}
			placeholder={label}
			className="
				w-full p-6 bg-zinc-100
				text-black text-base sm:text-lg
				placeholder-black/50
				outline-none
			"
		/>
	);
}

/* ---------- SELECT (DaisyUI) ---------- */
function Select({ label, name, value, onChange, options }) {
	return (
		<select
			name={name}
			value={value}
			onChange={onChange}
			className="
        w-full
        px-4 py-5
        bg-zinc-100
        text-black text-base sm:text-lg
        rounded-none
        outline-none
      "
		>
			<option value="">{label}</option>
			{options.map((opt) => (
				<option key={opt} value={opt}>
					{opt}
				</option>
			))}
		</select>
	);
}
/* ---------- RADIO GROUP (DaisyUI) ---------- */
function RadioGroup({ label, name, value, onChange }) {
	return (
		<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 bg-zinc-100">
			<p className="text-black/60 text-base sm:text-lg">{label}</p>

			<div className="flex items-center gap-6">
				<label className="flex items-center gap-2">
					<input
						type="radio"
						name={name}
						value="yes"
						checked={value === "yes"}
						onChange={onChange}
						className="radio radio-success"
					/>
					<span>Yes</span>
				</label>

				<label className="flex items-center gap-2">
					<input
						type="radio"
						name={name}
						value="no"
						checked={value === "no"}
						onChange={onChange}
						className="radio radio-success"
					/>
					<span>No</span>
				</label>
			</div>
		</div>
	);
}

/* ---------- MAIN COMPONENT ---------- */
export default function TradeAccountApplication() {
	const [step, setStep] = useState(1);

	const [form, setForm] = useState({
		tradingAddress: "",
		streetAddress: "",
		address2: "",
		city: "",
		county: "",
		zip: "",
		country: "",
		invoiceEmail: "",
		purchaseOrder: "",
		statementEmail: "",
		accountsPerson: "",
		accountsEmail: "",
		accountsPhone: "",
		fleetPerson: "",
		fleetEmail: "",
		fleetPhone: "",
		fleetSize: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = () => {
		console.log("SUBMITTED FORM DATA 👉", form);
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-[560px_1fr] gap-10 lg:gap-16">
			{/* LEFT PANEL */}
			<div className="relative flex flex-col gap-12">
				{/* TITLE */}
				<h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#024F2D] font-bold">
					Trade Account Application
				</h2>

				{/* MOBILE radial */}
				<div className="lg:hidden flex items-center justify-center gap-4 my-2 px-2">
					{/* Radial Progress */}
					<div className="w-2/5 flex justify-center">
						<RadialProgress
							value={step === 1 ? 50 : 100}
							size={72} // smaller on mobile
							thickness={10}
							label={step === 1 ? "1" : "2"} // just show step number inside circle
						/>
					</div>

					{/* Step Titles */}
					<div className="w-3/5 flex flex-col justify-center gap-1">
						<p
							className={`text-lg font-medium ${
								step === 1 ? "text-[#024F2D]" : "text-black/50"
							}`}
						>
							1) Business Contact Information
						</p>
						<p
							className={`text-lg font-medium ${
								step === 2 ? "text-[#024F2D]" : "text-black/50"
							}`}
						>
							2)Company Information
						</p>
					</div>
				</div>

				{/* DESKTOP vertical timeline */}
				<div className="hidden lg:flex relative flex-col gap-10">
					<div className="absolute left-7 top-10 h-30 w-[3px] bg-neutral-200" />

					<div className="flex items-center gap-4 relative z-10">
						<StepDot active={step === 1} />
						<p
							className={`text-2xl sm:text-3xl lg:text-4xl font-medium ${step === 1 ? "text-black" : "text-black/50"}`}
						>
							Business Contact Information
						</p>
					</div>

					<div className="flex items-center gap-4 relative z-10">
						<StepDot active={step === 2} />
						<p
							className={`text-2xl sm:text-3xl lg:text-4xl font-medium ${step === 2 ? "text-black" : "text-black/50"}`}
						>
							Company Information
						</p>
					</div>
				</div>
			</div>

			{/* RIGHT FORM */}
			<div className="bg-white p-4 sm:p-8 flex flex-col gap-4">
				{step === 1 && (
					<>
						<Input
							label="Trading Address"
							name="tradingAddress"
							value={form.tradingAddress}
							onChange={handleChange}
						/>
						<Input
							label="Street Address"
							name="streetAddress"
							value={form.streetAddress}
							onChange={handleChange}
						/>
						<Input
							label="Address Line 2"
							name="address2"
							value={form.address2}
							onChange={handleChange}
						/>

						<div className="grid sm:grid-cols-2 gap-4">
							<Input
								label="City"
								name="city"
								value={form.city}
								onChange={handleChange}
							/>
							<Input
								label="County / State / Region"
								name="county"
								value={form.county}
								onChange={handleChange}
							/>
						</div>

						<div className="grid sm:grid-cols-2 gap-4">
							<Input
								label="ZIP / Postal Code"
								name="zip"
								value={form.zip}
								onChange={handleChange}
							/>
							<Select
								label="Country"
								name="country"
								value={form.country}
								onChange={handleChange}
								options={["UK", "Ireland", "Other"]}
							/>
						</div>

						<div className="grid sm:grid-cols-2 gap-4">
							<Input
								label="Invoice Email"
								name="invoiceEmail"
								value={form.invoiceEmail}
								onChange={handleChange}
							/>
							<RadioGroup
								label="Purchase Order Required?"
								name="purchaseOrder"
								value={form.purchaseOrder}
								onChange={handleChange}
							/>
						</div>

						<Input
							label="Statement Email"
							name="statementEmail"
							value={form.statementEmail}
							onChange={handleChange}
						/>

						<div className="pt-6 border-t border-zinc-100 flex flex-col gap-4">
							<div className="grid sm:grid-cols-2 gap-4">
								<Input
									label="Accounts Contact Person"
									name="accountsPerson"
									value={form.accountsPerson}
									onChange={handleChange}
								/>
								<Input
									label="Accounts Contact Email"
									name="accountsEmail"
									value={form.accountsEmail}
									onChange={handleChange}
								/>
							</div>
							<Input
								label="Accounts Contact Phone Number"
								name="accountsPhone"
								value={form.accountsPhone}
								onChange={handleChange}
							/>
						</div>

						<div className="pt-6 border-t border-zinc-100 flex flex-col gap-4">
							<div className="grid sm:grid-cols-2 gap-4">
								<Input
									label="Fleet Contact Person"
									name="fleetPerson"
									value={form.fleetPerson}
									onChange={handleChange}
								/>
								<Input
									label="Fleet Contact Email"
									name="fleetEmail"
									value={form.fleetEmail}
									onChange={handleChange}
								/>
							</div>

							<div className="grid sm:grid-cols-2 gap-4">
								<Input
									label="Fleet Contact Phone Number"
									name="fleetPhone"
									value={form.fleetPhone}
									onChange={handleChange}
								/>
								<Select
									label="Fleet Size"
									name="fleetSize"
									value={form.fleetSize}
									onChange={handleChange}
									options={["1–5", "6–20", "21–50", "50+"]}
								/>
							</div>
						</div>

						<button
							onClick={() => setStep(2)}
							className="mt-6 px-6 py-4 bg-[#024F2D] text-white text-lg w-full sm:w-fit"
						>
							Next
						</button>
					</>
				)}

				{step === 2 && (
					<>
						<div className="h-[360px] flex items-center justify-center text-black/40 text-xl">
							Company Information form will be added here
						</div>

						<div className="flex items-center gap-4">
							<button
								type="button"
								onClick={() => setStep(1)}
								className="px-6 py-4 bg-zinc-100 text-black text-lg"
							>
								Back
							</button>

							<button
								type="button"
								onClick={handleSubmit}
								className="px-6 py-4 bg-[#024F2D] text-white text-lg"
							>
								Submit
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
