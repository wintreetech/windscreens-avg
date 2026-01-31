import React from "react";

import Section from "../components/Section";
import Hero from "../components/Home/Hero";
import SplitImageText from "../components/Home/SplitImageText";
import ServicesGrid from "../components/Home/ServicesGrid";
import AdvantageGrid from "../components/Home/AdvantageGrid";
import TestimonialsSection from "../components/TestimonialsSection";
import TradeAccountsBanner from "../components/TradeAccountsBanner";
import { IMAGES } from "../assets/images";
import { services, advantages, Testimonial } from "../data";

export default function Home() {
	return (
		<main className="min-h-screen bg-white">
			<Hero
				bgImage={IMAGES.HomeHeroMain}
				title={
					<>
						<span className="text-[#3D8C58]">Windscreen</span>
						<span className="text-[#024F2D]"> Replacement & Vehicle</span>
						<span className="text-[#3D8C58]"> Glass Repair Specialists</span>
					</>
				}
				points={[
					"Quick turnaround",
					"Nationwide Mobile Service",
					"Fleet-Focused Account Management",
				]}
				ctaText="Contact Us Now!"
				ctaHref="/contact"
			/>

			<Section spacing="large">
				<SplitImageText
					kicker="Established in 1994"
					title={
						<>
							<span className="text-[#3D8C58]">AVG Windscreens</span>
							<span className="text-[#024F2D]">
								{" "}
								is a trusted partner for fleet operators across the UK.
							</span>
						</>
					}
					description="We understand that managing large fleets of vehicles requires efficient, reliable, and flexible suppliers. That’s why our fully mobile service operates nationwide on a next-day service, ensuring that your fleet always stays on the road without any disruption."
					imageUrl={IMAGES.Established_in_1994}
					primaryCta={{ label: "Trade Account", variant: "primary" }}
					secondaryCta={{ label: "Learn More", variant: "outline" }}
				/>
			</Section>

			<Section spacing="large" className="bg-[#F5F5F5]">
				<ServicesGrid services={services} />;
			</Section>

			<Section spacing="large" className="bg-[#024F2D]">
				<AdvantageGrid
					advantages={advantages}
					title="The AVG Advantage"
					subtitle="Here’s what sets us apart:"
				/>
			</Section>

			<Section spacing="large">
				<TestimonialsSection
					image={IMAGES.TestimonialImages}
					logo="https://placehold.co/189x60"
					kicker="Testimonials"
					title={
						<>
							<span className="text-[#024F2D]">What </span>
							<span className="text-[#3D8C58]">our customers say </span>
							<span className="text-[#024F2D]">about their clearer view</span>
						</>
					}
					testimonials={Testimonial}
				/>
			</Section>

			<Section spacing="large" className="bg-[#F5F5F5]">
				<TradeAccountsBanner
					title={
						<>
							<span className="text-[#3D8C58]">
								We offer exclusive benefits for businesses
							</span>
							<span className="text-[#024F2D]">
								{" "}
								with regular vehicle glass needs.
							</span>
						</>
					}
				/>
			</Section>
		</main>
	);
}
