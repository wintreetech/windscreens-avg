import React from "react";
import HeroTwo from "../components/HeroTwo";
import Section from "../components/Section";
import { IMAGES } from "../assets/images";
import SectionHeading from "../components/SectionHeading";
import TestimonialsSection from "../components/TestimonialsSection";
import { Testimonial } from "../data";
import OurStoryIntro from "../components/OurStoryIntro";
import OurStoryStepper from "../components/OurStoryStepper";
import Container from "../components/Container";

function WhoWeAre() {
	return (
		<main className="font-henju">
			{/* HERO */}
			<HeroTwo
				bgImage="/Hero.png"
				breadcrumb={["Home", "Our Services", "Windscreen Chip Repairs"]}
				title="Windscreen Chip Repairs"
			/>

			<Section spacing="large" className="bg-[#f5f5f5]">
				<Container>
					<OurStoryIntro />
					<OurStoryStepper />
				</Container>
			</Section>

			<Section spacing="large" className="bg-[#024F2D]">
				<Container>
					<div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
						{/* Left Heading */}
						<div className="flex-1">
							<p className="text-white font-bold  text-3xl sm:text-4xl lg:text-5xl leading-tight">
								We know that time is money, and vehicle downtime impacts your
								efficiency and bottom line.
							</p>
						</div>

						{/* Right Content */}
						<div className="flex-1">
							<p className="text-white  text-lg sm:text-xl lg:text-2xl leading-relaxed">
								Our streamlined process makes windscreen repairs and
								replacements effortless, with a priority service for repeat
								customers, including a helpful customer service team which
								answer your phone call within 20 seconds.
								<br />
								<br />
								Whether your fleet requires chip repairs, body glass
								replacements, wing mirror replacements, or full windscreen
								replacements, we deliver a hassle-free, responsive service
								designed for business continuity.
							</p>
						</div>
					</div>
				</Container>
			</Section>

			{/* WHY CALIBRATION REQUIRED */}
			<Section spacing="large">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-25 items-center">
					<div className="flex flex-col gap-8  pl-30 ">
						<SectionHeading
							align="left"
							title={
								<>
									<span className="text-[#024F2D]">At AVG Windscreens, </span>
									<span className="text-[#024F2D]">
										<span className="text-[#3D8C58]">quality</span> and{" "}
										<span className="text-[#3D8C58]">efficiency</span> come
										first
									</span>
								</>
							}
						/>

						<p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-black">
							Our IMI-accredited technicians fit only the highest quality glass
							from market-leading suppliers, ensuring compliance with safety
							regulations and fleet operational standards. Our expertise, speed,
							and commitment to excellence makes us the go-to vehicle glazing
							partner for everyone across the UK.
						</p>
					</div>
					<div className="overflow-hidden">
						<img
							src={IMAGES.Photo_1}
							alt=""
							className="w-full h-[280px] sm:h-[420px] lg:h-[550px] object-cover"
						/>
					</div>
				</div>
			</Section>

			<Section spacing="large">
				<TestimonialsSection
					image={IMAGES.testimonial1}
					logo="https://placehold.co/189x60"
					title={
						<>
							<span className="text-[#024F2D]">What </span>
							<span className="text-[#3D8C58]">our customers say </span>
							<span className="text-[#024F2D]">about their clearer view</span>
						</>
					}
					kicker="Testimonials"
					testimonials={Testimonial}
				/>
			</Section>
		</main>
	);
}

export default WhoWeAre;
