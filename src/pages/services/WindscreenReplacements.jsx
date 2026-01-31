import React from "react";
import HeroTwo from "../../components/HeroTwo";
import SectionHeading from "../../components/SectionHeading";
import Button from "../../components/Button";
import IntroParagraph from "../../components/Services/IntroParagraph";
import BulletFeatureList from "../../components/Services/BulletFeatureList";
import PreventiveMeasuresGrid from "../../components/Services/PreventiveMeasuresGrid";
import Section from "../../components/Section";
import Container from "../../components/Container";
import WhyFeatureGrid from "../../components/services/WhyFeatureGrid";
import { IMAGES } from "../../assets/images";
import { WhyReplace, WhyFeature } from "../../data";

export default function WindscreenReplacements() {
	return (
		<main className="font-henju">
			<HeroTwo
				title="Windscreen Replacements"
				images={[
					"https://placehold.co/1920x482",
					"https://placehold.co/2367x1046",
				]}
				breadcrumb={[
					{ label: "Home", href: "/" },
					{ label: "Our Services", href: "/services" },
					{ label: "Windscreen Replacements" },
				]}
			/>

			{/* Image + Why Replace list */}
			<Section spacing="large">
				<Container>
					<IntroParagraph text="If the damage on your windscreen is too large for a repair, our team provides an efficient, reliable replacement service. We use the highest-quality glass, with the most experienced technicians to restore your vehicle's structural integrity and visibility." />
				</Container>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-25 items-center">
					<div className=" overflow-hidden">
						<img
							src={IMAGES.Why_Replace_Your_Windscreen_}
							alt=""
							className="w-full h-[280px] sm:h-[420px] lg:h-[727px] object-cover"
						/>
					</div>

					<div className="flex flex-col gap-8 pr-30">
						<SectionHeading
							align="left"
							title={
								<>
									<span className="text-[#024F2D]">Why </span>
									<span className="text-[#3D8C58]">Replace </span>
									<span className="text-[#024F2D]">Your Windscreen?</span>
								</>
							}
						/>

						<BulletFeatureList items={WhyReplace} />
					</div>
				</div>
				<Container>
					<p className="mt-25 text-2xl sm:text-3xl lg:text-4xl text-[#024F2D] font-medium leading-snug">
						After a windscreen replacement, it's crucial to allow the adhesive
						to cure properly to ensure safety. We recommend not driving your
						vehicle for one hour after the windscreen replacement and to not
						wash your vehicle for 7 days.
					</p>
				</Container>
			</Section>

			{/* Preventive Measures */}
			<Section spacing="large" className="bg-[#F5F5F5]">
				<div className="mb-12 flex justify-center items-center flex-col gap-2">
					<h2 className="text-[#024F2D] font-henju text-4xl sm:text-5xl font-bold">
						Preventive Measures
					</h2>
					<p className="text-lg sm:text-xl lg:text-2xl font-medium text-black leading-8 sm:leading-9">
						To avoid windscreen damage, follow these best practices:
					</p>
				</div>
				<WhyFeatureGrid items={WhyFeature} />
			</Section>

			{/* Our Commitment */}
			<Section spacing="large">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-25 items-center">
					<div className="flex flex-col gap-8 pl-30">
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

					<div className="overflow-hidden ">
						<img
							src={IMAGES.Our_Commitment_One}
							alt=""
							className="w-full h-[280px] sm:h-[420px] lg:h-[727px] object-cover"
						/>
					</div>
				</div>
			</Section>
		</main>
	);
}
