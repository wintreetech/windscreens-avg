import React from "react";
import HeroTwo from "../../components/HeroTwo";

import SectionHeading from "../../components/SectionHeading";
import Button from "../../components/Button";

import StepsGrid from "../../components/Services/StepsGrid";
import BulletFeatureList from "../../components/Services/BulletFeatureList";
import Section from "../../components/Section";
import Container from "../../components/Container";
import { BenefitsOfOurService, MaintainingWaterIntegrity } from "../../data";
import { IMAGES } from "../../assets/images";

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
									<span className="text-[#3D8C58]">Benefits</span>
									<span className="text-[#024F2D]"> of Our Service</span>
								</>
							}
						/>

						<BulletFeatureList
							items={BenefitsOfOurService}
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
					<div className="overflow-hidden order-1 lg:order-2">
						<img
							src={IMAGES.Benefits_of_Our_Service_One}
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
						<h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-[#024F2D]">
							Maintaining Watertight Integrity
						</h2>

						<StepsGrid steps={MaintainingWaterIntegrity} />
					</div>
				</Container>
			</Section>

			{/* OUR COMMITMENT (white) */}
			<Section spacing="large">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-25 items-center">
					<div className="overflow-hidden">
						<img
							src={IMAGES.Our_Commitment_Three}
							alt=""
							className="w-full h-[280px] sm:h-[420px] lg:h-[600px] object-cover"
						/>
					</div>

					<div className="flex flex-col gap-8 pr-30">
						<SectionHeading
							align="left"
							title={<span className="text-[#024F2D]">Our Commitment</span>}
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
