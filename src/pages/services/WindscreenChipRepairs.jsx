import React from "react";
import HeroTwo from "../../components/HeroTwo";

import SplitTextImage from "../../components/Services/SplitTextImage";

import Section from "../../components/Section";
import Container from "../../components/Container";
import GetQuote from "../../components/Services/GetQuote";
import { IMAGES } from "../../assets/images";
import { WhyRepair } from "../../data";
import WhyFeatureGrid from "../../components/services/WhyFeatureGrid";

export default function WindscreenChipRepairs() {
	return (
		<main className="font-henju">
			<HeroTwo
				title="Windscreen Chip Repairs"
				bgImage={IMAGES.HeroWindscreenChipRepairs}
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
							<span className="text-[#024F2D]">Why </span>
							<span className="text-[#3D8C58]">Repair</span>
							<span className="text-[#024F2D]"> Your Windscreen?</span>
						</>
					}
					items={WhyRepair}
				/>
			</Section>

			{/* Split section: text + image */}
			<Section spacing="large" className="bg-[#F5F5F5]">
				<SplitTextImage
					reverse={true}
					title={
						<>
							<span className="text-[#024F2D]">A small chip </span>
							<span className="text-[#3D8C58]">
								can quickly turn into a large crack
							</span>
							<span className="text-[#024F2D]">if not addressed promptly.</span>
						</>
					}
					description="Acting early can save you from a much more expensive fix later. Our chip repair service involves injecting a high-quality epoxy or acrylic adhesive into the chip, sealing it effectively to prevent further damage. This process restores the integrity of your windscreen and maintains clear visibility."
					imageUrl={IMAGES.Windscreen_Chip_Repair_with_crack}
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
							<h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3D8C58]">
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
								<div className="flex justify-center items-start gap-2">
									<img src={IMAGES.Bullet_icon_gold} />
									<div>
										<h4 className="text-2xl sm:text-3xl font-semibold text-[#024F2D]">
											Zone A:
										</h4>
										<p className="mt-2 text-lg sm:text-xl leading-relaxed text-black">
											This is the area directly in front of the driver. Damage
											up to 10mm in diameter (about the size of a 5p coin) is
											repairable.
										</p>
									</div>
								</div>

								<div className="flex justify-center items-start gap-2">
									<img src={IMAGES.Bullet_icon_gold} />
									<div>
										<h4 className="text-2xl sm:text-3xl font-semibold text-[#024F2D]">
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
								src={IMAGES.Repair_And_Replacement}
								alt="Repair zones"
								className="w-full h-[260px] sm:h-[360px] lg:h-[420px] object-cover"
							/>
						</div>
					</div>

					<p className="mt-10 text-lg sm:text-xl leading-relaxed text-black">
						If you’re unsure whether your windscreen damage can be repaired,
						simply send us a photo of the chip. You can email it to{" "}
						<a
							className="text-[#D69212]  font-bold"
							href="mailto:info@avgwindscreens.co.uk"
						>
							info@avgwindscreens.co.uk
						</a>{" "}
						or WhatsApp us to{" "}
						<span className="text-[#024F2D] font-bold">+44 333 015 3883</span>.
						Our team will promptly assess the damage and let you know the best
						course of action.
					</p>
				</Container>
			</Section>

			<Section spacing="large" className="bg-[#F5F5F5]">
				<GetQuote
					img={IMAGES.QuotePhotoVan}
					kicker="Get a Quote"
					title={
						<>
							<span className="text-[#3D8C58]">Need a quote</span>
							<span className="text-[#024F2D]">
								{" "}
								for your vehicle glass requirement?
							</span>
						</>
					}
				/>
			</Section>
		</main>
	);
}
