import React from "react";
import HeroTwo from "../../components/HeroTwo";

import SectionHeading from "../../components/SectionHeading";
import Button from "../../components/Button";
import IconFeatureCard from "../../components/IconFeatureCard";
import BulletFeatureList from "../../components/Services/BulletFeatureList";
import Section from "../../components/Section";
import Container from "../../components/Container";
import { BenefitsOfOurService2, mirrorRules } from "../../data";
import { IMAGES } from "../../assets/images";
import SplitTextImage from "../../components/Services/SplitTextImage";

export default function WingMirrorReplacements() {
	return (
		<main className="font-henju">
			{/* HERO */}

			<HeroTwo
				bgImage={IMAGES.HeroWingMirrorReplacements}
				breadcrumb={[
					{ label: "Home", href: "/" },
					{ label: "Our Services", href: "/services" },
					{ label: "Wing Mirror Replacements" },
				]}
				title="Wing Mirror Replacements"
			/>

			{/* INTRO + 2 CARDS (white, centered like figma) */}
			<Section spacing="large">
				<Container>
					<div className="flex flex-col items-center gap-10 sm:gap-15">
						<p className="text-center text-lg sm:text-xl lg:text-2xl leading-relaxed text-black">
							At AVG Windscreens, we understand the importance of having fully
							functional wing mirrors for safe and legal driving. Our mobile
							wing mirror glass replacement service brings our expert
							technicians directly to you, ensuring your vehicle is back on the
							road quickly and safely
						</p>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 w-full">
							{mirrorRules.map((item) => (
								<IconFeatureCard
									key={item.id}
									icon={item.icon}
									title={item.title}
									description={item.description}
								/>
							))}
						</div>
					</div>
				</Container>
			</Section>

			{/* BENEFITS + IMAGE (grey like figma) */}
			<Section spacing="large" className="bg-[#F5F5F5]">
				<div className="grid px-4 sm:px-0 grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-25 items-center">
					<div className="flex flex-col gap-8 sm:pl-30">
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
							items={BenefitsOfOurService2}
							titleClassName="text-2xl sm:text-3xl lg:text-4xl"
							descClassName="text-lg sm:text-xl lg:text-2xl leading-relaxed"
							bulletSizeClassName="h-8 w-8 rounded-[12px]"
						/>
					</div>

					<div className="overflow-hidden">
						<img
							src={IMAGES.Benefits_of_Our_Service_Two}
							alt=""
							className="w-full h-[280px] sm:h-[420px] lg:h-[500px] object-cover"
						/>
					</div>
				</div>
			</Section>

			{/* OUR COMMITMENT (white) */}
			<Section spacing="large">
				<SplitTextImage
					title={
						<>
							<span className="text-[#024F2D]">Our Commitment</span>
						</>
					}
					description={
						<>
							At AVG Windscreens, we are dedicated to providing the highest
							quality service and ensuring your windscreen is in optimal
							condition.
							<br />
							<br />
							Our technicians are highly trained and use the latest technology
							to deliver efficient and reliable replacements.
						</>
					}
					imageUrl={IMAGES.Mobile_Wing_Mirror_Replacement}
					primaryCta={{
						label: "Learn More",
						variant: "primary",
					}}
					descriptionClassName="text-lg sm:text-xl lg:text-2xl"
				/>
			</Section>
		</main>
	);
}
