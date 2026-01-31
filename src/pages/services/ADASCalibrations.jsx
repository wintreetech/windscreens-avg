import React from "react";
import { Link } from "react-router-dom";

import HeroTwo from "../../components/HeroTwo";

import SectionHeading from "../../components/SectionHeading";
import Container from "../../components/Container";
import Button from "../../components/Button";
import Section from "../../components/Section";
import WhyFeatureGrid from "../../components/services/WhyFeatureGrid";
import { IMAGES } from "../../assets/images";
import { BenefitsOfMobileCalibration } from "../../data";

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
							src={IMAGES.What_is_ADAS_}
							alt=""
							className="w-full object-cover"
						/>
					</div>

					<div className="flex flex-col gap-8 pr-30">
						<SectionHeading
							align="left"
							title={<span className="text-[#024F2D]">What is ADAS?</span>}
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
								<span className="text-[#024F2D]">Why do we use ADAS?</span>
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

					<div className="overflow-hidden lg:order-2 order-1">
						<img
							src={IMAGES.Why_do_we_ADAS_}
							alt=""
							className="w-full object-cover"
						/>
					</div>
				</div>
			</Section>

			{/* WHY CALIBRATION REQUIRED */}
			<Section spacing="large">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-25 items-center">
					<div className="overflow-hidden">
						<img
							src={IMAGES.ADAS_Calibration_Section}
							alt=""
							className="w-full h-[280px] sm:h-[420px] lg:h-[800px] object-cover"
						/>
					</div>

					<div className="flex flex-col gap-8 pr-30">
						<SectionHeading
							align="left"
							title={
								<>
									<span className="text-[#024F2D]">
										Why is ADAS Calibration{" "}
									</span>
									<span className="text-[#3D8C58]">
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
				<WhyFeatureGrid
					title={
						<>
							<span className="text-[#024F2D]">
								{" "}
								Benefits of Mobile Calibration
							</span>
						</>
					}
					items={BenefitsOfMobileCalibration}
				/>
			</Section>

			{/* OUR COMMITMENT */}
			<Section spacing="large">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-25 items-center">
					<div className="overflow-hidden">
						<img
							src={IMAGES.Our_Commitment_Two}
							alt=""
							className="w-full h-[280px] sm:h-[420px] lg:h-[600px] object-cover"
						/>
					</div>

					<div className="flex flex-col gap-8 pr-30">
						<SectionHeading
							align="left"
							title={<span className="text-[#024F2D]">Our Commitment</span>}
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
