import React from "react";
import Container from "../Container";

export default function GetQuote() {
	return (
		<Container>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
				{/* LEFT CONTENT */}
				<div className="flex flex-col gap-10 max-w-xl">
					<div>
						<p className="text-[#D69212] tracking-widest font-henju uppercase text-sm">
							Get a Quote
						</p>

						<h2 className="mt-4 text-[#024F2D] font-henju text-4xl lg:text-5xl leading-tight">
							Need a quote for your vehicle glass requirement?
						</h2>
					</div>

					{/* PHONE */}
					<div className="flex items-center gap-6">
						<div className="w-16 h-16 rounded-full bg-[#D69212] flex items-center justify-center text-white text-2xl">
							📞
						</div>

						<div>
							<p className="text-black font-henju text-xl">Call us today</p>
							<p className="text-[#D69212] font-henju text-3xl">
								0333 015 38 83
							</p>
						</div>
					</div>

					<div className="rounded-2xl overflow-hidden">
						<img
							src="https://placehold.co/700x420"
							alt="Vehicle glass service"
							className="w-full h-[260px] sm:h-[320px] object-cover"
						/>
					</div>

					{/* FOOTNOTE */}
					<p className="text-[#D69212] font-henju text-xl leading-relaxed">
						We are here to help you. If you have several vehicles and would like
						to understand our fleet offerings, please email{" "}
						<span className="underline">sales@avgwindscreens.co.uk</span>
					</p>
				</div>

				{/* RIGHT FORM */}
				<div className="bg-white p-8 flex flex-col gap-4 w-full max-w-[880px]">
					{/* NAME */}
					<div className="pb-6 border-b border-[#F3F3F3] flex flex-col gap-4">
						<FormField label="Name" />

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<FormField label="Email" />
							<FormField label="Phone Number" />
						</div>
					</div>

					<FormField label="First Line of Address" />
					<FormField label="Post Code" />

					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<FormField label="Vehicle Registration" />
						<SelectField label="Vehicle Make" />
						<SelectField label="Vehicle Model" />
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<SelectField label="Type of Damage" />
						<SelectField label="Personal or Company Vehicle" />
					</div>

					<div className="p-6 bg-[#F3F3F3] min-h-[140px]">
						<p className="text-black/50 font-henju text-lg">
							Additional Information
						</p>
					</div>

					<button className="mt-4 w-fit bg-[#024F2D] px-6 py-4">
						<span className="text-white font-henju text-lg font-bold">
							Send Message
						</span>
					</button>
				</div>
			</div>
		</Container>
	);
}

/* ---------- Small internal helpers ---------- */

function FormField({ label }) {
	return (
		<div className="flex p-6 items-center bg-[#F3F3F3] w-full">
			<p className="text-black/50 font-henju text-lg w-full">{label}</p>
		</div>
	);
}

function SelectField({ label }) {
	return (
		<div className="flex p-6 items-center justify-between bg-[#F3F3F3] w-full">
			<p className="text-black/50 font-henju text-lg">{label}</p>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
