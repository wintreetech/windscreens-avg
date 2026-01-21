import React from "react";
import HeroTwo from "../../components/HeroTwo";
import SectionHeading from "../../components/SectionHeading";
import Button from "../../components/Button";
import IntroParagraph from "../../components/Services/IntroParagraph";
import BulletFeatureList from "../../components/Services/BulletFeatureList";
import PreventiveMeasuresGrid from "../../components/Services/PreventiveMeasuresGrid";
import Section from "../../components/Section";
import Container from "../../components/Container";

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
					<div className="rounded-3xl overflow-hidden">
						<img
							src="https://placehold.co/1508x920"
							alt=""
							className="w-full h-[280px] sm:h-[420px] lg:h-[727px] object-cover"
						/>
					</div>

					<div className="flex flex-col gap-8 pr-30">
						<SectionHeading
							align="left"
							title={
								<>
									<span className="text-emerald-900">Why </span>
									<span className="text-green-600">Replace </span>
									<span className="text-emerald-900">Your Windscreen?</span>
								</>
							}
						/>

						<BulletFeatureList
							items={[
								{
									title: "Safety:",
									description:
										"A cracked windscreen can compromise your vehicle’s safety by reducing visibility and weakening structural support.",
								},
								{
									title: "Compliance:",
									description:
										"UK regulations require windscreens to be free from excessive damage. Large cracks can make your vehicle unroadworthy.",
								},
								{
									title: "Efficiency:",
									description:
										"Our replacement services are designed to be quick and hassle-free, minimizing downtime for your vehicle.",
								},
							]}
						/>
					</div>
				</div>
				<Container>
					<p className="mt-16 text-2xl sm:text-3xl lg:text-4xl text-emerald-900 font-medium leading-snug">
						After a windscreen replacement, it's crucial to allow the adhesive
						to cure properly to ensure safety. We recommend not driving your
						vehicle for one hour after the windscreen replacement and to not
						wash your vehicle for 7 days.
					</p>
				</Container>
			</Section>

			{/* Preventive Measures */}
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

			{/* Our Commitment */}
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
