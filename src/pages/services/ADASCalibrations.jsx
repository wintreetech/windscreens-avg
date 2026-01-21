import React from "react";
import { Link } from "react-router-dom";

import HeroTwo from "../../components/HeroTwo";

import SectionHeading from "../../components/SectionHeading";
import Container from "../../components/Container";
import Button from "../../components/Button";
import Section from "../../components/Section";

export default function ADASCalibrations() {
	return (
		<main className="font-henju">
			{/* HERO */}
			<HeroTwo
				bgImage="/Hero.png"
				breadcrumb={["Home", "Our Services", "Windscreen Chip Repairs"]}
				title="Windscreen Chip Repairs"
			/>

			{/* WHAT IS ADAS */}
			<Section spacing="large">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-25 items-center">
					<div className="rounded-3xl overflow-hidden">
						<img
							src="https://placehold.co/1005x619"
							alt=""
							className="w-full h-[260px] sm:h-[420px] lg:h-[619px] object-cover"
						/>
					</div>

					<div className="flex flex-col gap-8 pr-30">
						<SectionHeading
							align="left"
							title={<span className="text-emerald-900">What is ADAS?</span>}
						/>
						<p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-black">
							ADAS, which stands for Advanced Driver Assistance Systems,
							includes a variety of technologies, all of which help improve the
							driver’s awareness on the road and vehicle safety. ADAS comes in
							many forms, from alerting the driver of everything from traffic
							sign speeds to covering their blind spots. They can operate with a
							wide range of technology, such as radars or cameras to complete
							the job of lowering the risk of a collision as much as they can.
						</p>
					</div>
				</div>
			</Section>

			{/* WHY WE USE ADAS (REVERSE) */}
			<Section spacing="large" className="bg-[#F5F5F5]">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-25 items-center">
					<div className="flex flex-col gap-8 pl-30 lg:order-1 order-2">
						<SectionHeading
							align="left"
							title={
								<span className="text-emerald-900">Why do we use ADAS?</span>
							}
						/>
						<p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-black">
							The majority of road collisions are caused by{" "}
							<span className="text-yellow-600">human error</span>, which are
							mistakes made directly by the driver which results in accidents.
							Advanced Driver Assistance Systems are developed to enhance
							vehicle safety by alerting the driver to a potential problem when
							it arises. ADAS are proven to minimise human error by alerting the
							driver to potential issues or taking over control of the vehicle.
							ADAS Systems are becoming mandatory in the UK for newly
							manufactured cars proving how useful the system can be to drivers.
						</p>
					</div>

					<div className="rounded-3xl overflow-hidden lg:order-2 order-1">
						<img
							src="https://placehold.co/1246x831"
							alt=""
							className="w-full h-[280px] sm:h-[420px] lg:h-[791px] object-cover"
						/>
					</div>
				</div>
			</Section>

			{/* WHY CALIBRATION REQUIRED */}
			<Section spacing="large">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-25 items-center">
					<div className="rounded-3xl overflow-hidden">
						<img
							src="https://placehold.co/1098x913"
							alt=""
							className="w-full h-[280px] sm:h-[420px] lg:h-[913px] object-cover"
						/>
					</div>

					<div className="flex flex-col gap-8 pr-30">
						<SectionHeading
							align="left"
							title={
								<>
									<span className="text-emerald-900">
										Why is ADAS Calibration{" "}
									</span>
									<span className="text-green-600">
										required after replacing a windscreen?
									</span>
								</>
							}
						/>

						<p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-black">
							Advanced Driver Assistance Systems (ADAS) rely on precise camera
							alignment to function correctly. These cameras are typically
							mounted on or near the windscreen, and even a slight shift during
							replacement can affect their accuracy. Misaligned sensors can
							compromise crucial features such as lane departure warnings,
							automatic emergency braking, and adaptive cruise control.
							<br />
							<br />
							At AVG Windscreens, we don’t just replace your windscreen — we
							also come to you to recalibrate your ADAS system on-site. This
							ensures your vehicle's safety systems work exactly as intended,
							giving you peace of mind and a hassle-free service.
						</p>
					</div>
				</div>
			</Section>

			{/* BENEFITS GRID (3 CARDS) */}
			<Section spacing="large" className="bg-[#F5F5F5]">
				<Container>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-25 items-center">
						{/* LEFT CONTENT */}
						<div>
							<div className="mb-12">
								<h2 className="text-[#024F2D] font-henju text-4xl sm:text-5xl mb-4">
									Preventive Measures
								</h2>
								<p className="text-lg sm:text-xl lg:text-2xl text-black leading-8 sm:leading-9">
									To avoid windscreen damage, follow these best practices:
								</p>
							</div>

							<div className="space-y-10">
								{[
									{
										title: "Avoid Sudden Temperature Changes",
										description:
											"Prevent cracks by putting hot water on cold glass.",
									},
									{
										title: "Regular Maintenance",
										description:
											"Replace windscreen wipers regularly to keep your windscreen clean and clear.",
									},
									{
										title: "Drive Carefully",
										description:
											"On rough roads, drive cautiously to avoid stones and gravel hitting your windscreen.",
									},
									{
										title: "Use Quality Washer Fluid",
										description:
											"Regularly top up your washer fluid to keep your windscreen clean.",
									},
								].map((item, index) => (
									<div key={index} className="flex gap-4 items-start">
										<div className="w-[34px] h-[34px] flex items-center justify-center">
											<div className="w-7 h-7 bg-[#D69212] rounded-full" />
										</div>

										<div>
											<h3 className="text-[#024F2D] font-henju text-2xl sm:text-[28px] mb-2">
												{item.title}
											</h3>
											<p className="text-black text-lg sm:text-xl leading-8">
												{item.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* RIGHT IMAGE PLACEHOLDER */}
						<div className="flex justify-center">
							<div className="w-full max-w-[915px] h-[400px] sm:h-[550px] lg:h-[727px] bg-gray-300 rounded-xl" />
						</div>
					</div>
				</Container>
			</Section>

			{/* OUR COMMITMENT */}
			<Section spacing="large">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-25 items-center">
					<div className="rounded-3xl overflow-hidden">
						<img
							src="https://placehold.co/1005x727"
							alt=""
							className="w-full h-[280px] sm:h-[420px] lg:h-[727px] object-cover"
						/>
					</div>

					<div className="flex flex-col gap-8 pr-30">
						<SectionHeading
							align="left"
							title={<span className="text-emerald-900">Our Commitment</span>}
						/>

						<p className="text-lg sm:text-xl lg:text-2xl leading-8 sm:leading-9 text-black">
							At AVG Windscreens, we are dedicated to providing the highest
							quality service and ensuring your windscreen is in optimal
							condition.
							<br />
							<br />
							Our technicians are highly trained and use the latest technology
							to deliver efficient and reliable replacements.
						</p>

						<Button variant="primary" className="w-fit">
							Learn More
						</Button>
					</div>
				</div>
			</Section>
		</main>
	);
}

/* ------------ small reusable local card ------------ */

function BenefitCard({ title, desc }) {
	return (
		<div className="flex flex-col items-center text-center gap-6">
			<div className="h-28 w-28 rounded-[32px] bg-emerald-900/10 flex items-center justify-center">
				<div className="h-16 w-16 rounded-2xl bg-yellow-600" />
			</div>

			<div className="flex flex-col gap-3">
				<h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-emerald-900">
					{title}
				</h3>
				<p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-black">
					{desc}
				</p>
			</div>
		</div>
	);
}
