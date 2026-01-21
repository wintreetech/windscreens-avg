import React from "react";
import HeroTwo from "../../components/HeroTwo";
import WhyFeatureGrid from "../../components/services/WhyFeatureGrid";
import SplitTextImage from "../../components/services/SplitTextImage";
import Section from "../../components/Section";
import Container from "../../components/Container";
import GetQuote from "../../components/Services/GetQuote";

export default function WindscreenChipRepairs() {
	return (
		<main className="font-henju">
			<HeroTwo
				title="Windscreen Chip Repairs"
				images={[
					"https://placehold.co/1920x482",
					"https://placehold.co/2130x1132",
				]}
				breadcrumb={[
					{ label: "Home", href: "/" },
					{ label: "Our Services", href: "/services" },
					{ label: "Windscreen Chip Repairs", href: null },
				]}
			/>

			{/* Why Repair */}
			<Section spacing="large">
				<WhyFeatureGrid
					title={
						<>
							<span className="text-emerald-900">Why </span>
							<span className="text-green-600">Repair</span>
							<span className="text-emerald-900"> Your Windscreen?</span>
						</>
					}
					items={[
						{
							title: "Safety",
							description:
								"Your windscreen is a key structural component of your vehicle. Even minor damage can weaken it, affecting visibility and the integrity of your car in the event of an accident.",
						},
						{
							title: "Compliance",
							description:
								"A chipped windscreen—especially in the driver’s line of sight—can cause your vehicle to fail its MOT test. A chip repair keeps you compliant and on the road.",
						},
						{
							title: "Cost-Effective",
							description:
								"Chip repairs are far cheaper than full windscreen replacements. Acting early can save you from a much more expensive fix later.",
						},
					]}
				/>
			</Section>

			{/* Split section: text + image */}
			<Section spacing="large" className="bg-[#F5F5F5]">
				<SplitTextImage
					title={
						<>
							<span className="text-emerald-900">A small chip </span>
							<span className="text-green-600">
								can quickly turn into a large crack
							</span>
							<span className="text-emerald-900">
								if not addressed promptly.
							</span>
						</>
					}
					description="Acting early can save you from a much more expensive fix later. Our chip repair service involves injecting a high-quality epoxy or acrylic adhesive into the chip, sealing it effectively to prevent further damage. This process restores the integrity of your windscreen and maintains clear visibility."
					imageUrl="https://placehold.co/1418x951"
				/>
			</Section>

			{/* Repair or Replacement + image */}
			<Section spacing="large">
				<Container>
					<p className="text-lg sm:text-xl leading-relaxed text-black">
						At AVG Windscreens, we know that even a small chip can compromise
						your safety and lead to costly repairs if left untreated. Our highly
						trained technicians specialise in reliable windscreen chip
						repairs—helping you stay safe, roadworthy, and fully compliant with
						UK MOT and safety regulations.
					</p>

					<div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
						<div>
							<h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-green-600">
								Repair or Replacement?
							</h3>

							<p className="mt-5 text-lg sm:text-xl leading-relaxed text-black">
								The type, size, and position of the damage on your windscreen
								determines whether it can be repaired.
								<br />
								<br />
								Here’s a quick guide:
							</p>

							<div className="mt-8 space-y-6">
								<div className="flex gap-4">
									<div className="mt-1 h-8 w-8 rounded-xl bg-yellow-600" />
									<div>
										<h4 className="text-2xl sm:text-3xl font-semibold text-emerald-900">
											Zone A:
										</h4>
										<p className="mt-2 text-lg sm:text-xl leading-relaxed text-black">
											This is the area directly in front of the driver. Damage
											up to 10mm in diameter (about the size of a 5p coin) is
											repairable.
										</p>
									</div>
								</div>

								<div className="flex gap-4">
									<div className="mt-1 h-8 w-8 rounded-xl bg-yellow-600" />
									<div>
										<h4 className="text-2xl sm:text-3xl font-semibold text-emerald-900">
											All Other Zones:
										</h4>
										<p className="mt-2 text-lg sm:text-xl leading-relaxed text-black">
											For the rest of the windscreen, damage up to 25mm in
											diameter (about the size of a 2p coin) can be repaired.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="rounded-3xl overflow-hidden">
							<img
								src="https://placehold.co/724x524"
								alt="Repair zones"
								className="w-full h-[260px] sm:h-[360px] lg:h-[420px] object-cover"
							/>
						</div>
					</div>

					<p className="mt-10 text-lg sm:text-xl leading-relaxed text-black">
						If you’re unsure whether your windscreen damage can be repaired,
						simply send us a photo of the chip. You can email it to{" "}
						<a
							className="text-yellow-600 underline underline-offset-4"
							href="mailto:info@avgwindscreens.co.uk"
						>
							info@avgwindscreens.co.uk
						</a>{" "}
						or WhatsApp us to{" "}
						<span className="text-emerald-900 font-semibold">
							+44 333 015 3883
						</span>
						. Our team will promptly assess the damage and let you know the best
						course of action.
					</p>
				</Container>
			</Section>

			<Section spacing="large" className="bg-[#F5F5F5]">
				<GetQuote />
			</Section>
		</main>
	);
}
