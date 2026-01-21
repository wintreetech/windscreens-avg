import React from "react";
import HeroTwo from "../../components/HeroTwo";

import SectionHeading from "../../components/SectionHeading";
import Button from "../../components/Button";

import StepsGrid from "../../components/Services/StepsGrid";
import BulletFeatureList from "../../components/Services/BulletFeatureList";
import Section from "../../components/Section";
import Container from "../../components/Container";

export default function BodyglassReplacements() {
	return (
		<main className="font-henju">
			{/* HERO */}
			<HeroTwo
				title="Bodyglass Replacements"
				images={[
					"https://placehold.co/1920x482",
					"https://placehold.co/2144x780",
				]}
				breadcrumb={[
					{ label: "Home", href: "/" },
					{ label: "Our Services", href: "/services" },
					{ label: "Bodyglass Replacements" },
				]}
			/>

			{/* BENEFITS + IMAGE (white) */}
			<Section spacing="large">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-25 items-center">
					{/* Left content */}
					<div className="flex flex-col gap-8 pl-30 order-2 lg:order-1">
						<SectionHeading
							align="left"
							title={
								<>
									<span className="text-green-600">Benefits</span>
									<span className="text-emerald-900"> of Our Service</span>
								</>
							}
						/>

						<BulletFeatureList
							items={[
								{
									title: "Convenience:",
									description:
										"We offer a mobile service, coming to the location of your choice to replace your window.",
								},
								{
									title: "Expert Technicians:",
									description:
										"Our team is highly trained and certified, using manufacturer-approved tools and techniques.",
								},
								{
									title: "Quick Service:",
									description:
										"We aim to minimise downtime, getting your vehicle watertight quickly and safely.",
								},
							]}
							titleClassName="text-2xl sm:text-3xl lg:text-4xl"
							descClassName="text-lg sm:text-xl lg:text-2xl leading-relaxed"
							bulletSizeClassName="h-8 w-8 rounded-[12px]"
						/>

						<p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-black">
							As part of our replacement process, we will hoover the vehicle to
							remove any glass shards and debris. However, please note that we
							do not provide a full valet service, and it is always recommended
							to get a full valet done after to ensure all the vents and tiny
							specs of glass have been moved.
						</p>
					</div>

					{/* Right image */}
					<div className="rounded-3xl overflow-hidden order-1 lg:order-2">
						<img
							src="https://placehold.co/1005x727"
							alt=""
							className="w-full h-[280px] sm:h-[420px] lg:h-[727px] object-cover"
						/>
					</div>
				</div>
			</Section>

			{/* MAINTAINING WATERTIGHT INTEGRITY (grey) */}
			<Section spacing="large" className="bg-[#F5F5F5]">
				<Container>
					<div className="flex flex-col gap-10">
						<h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-emerald-900">
							Maintaining Watertight Integrity
						</h2>

						<StepsGrid
							steps={[
								{
									step: "Step 1",
									text: "Wear thick gloves to protect yourself from the sharp shards of glass.",
									icon: (
										<div className="h-28 w-28 rounded-3xl bg-emerald-900" />
									),
								},
								{
									step: "Step 2",
									text: "Clean the area - a portable vacuum cleaner will do the job.",
									icon: (
										<div className="h-28 w-28 rounded-3xl bg-emerald-900" />
									),
								},
								{
									step: "Step 3",
									text: "Cut a plastic sheet (or thick trash bag) to cover the entire window (recommend an additional 4 inches on each side of the window).",
									icon: (
										<div className="h-28 w-28 rounded-3xl bg-emerald-900" />
									),
								},
								{
									step: "Step 4",
									text: "Using Duct Tape or packing tape, place the plastic sheeting around the window. Where possible, try to tape from the inside to prevent paint damage.",
									icon: (
										<div className="h-28 w-28 rounded-3xl bg-emerald-900" />
									),
								},
							]}
						/>
					</div>
				</Container>
			</Section>

			{/* OUR COMMITMENT (white) */}
			<Section spacing="large">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-25 items-center">
					<div className="rounded-3xl overflow-hidden">
						<img
							src="https://placehold.co/1093x729"
							alt=""
							className="w-full h-[280px] sm:h-[420px] lg:h-[727px] object-cover"
						/>
					</div>

					<div className="flex flex-col gap-8 pr-30">
						<SectionHeading
							align="left"
							title={<span className="text-emerald-900">Our Commitment</span>}
						/>

						<p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-black">
							At AVG Windscreens, we are dedicated to providing a quick body
							glass replacement service. Our technicians are highly trained and
							use the latest technology to deliver efficient and reliable
							replacements.
						</p>

						<div>
							<Button variant="primary">Learn More</Button>
						</div>
					</div>
				</div>
			</Section>
		</main>
	);
}
