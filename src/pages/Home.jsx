import React from "react";

import Section from "../components/Section";
import Container from "../components/Container";

import Hero from "../components/Home/Hero";
import SplitImageText from "../components/Home/SplitImageText";
import ServicesGrid from "../components/Home/ServicesGrid";
import AdvantageGrid from "../components/Home/AdvantageGrid";
import TestimonialsSection from "../components/TestimonialsSection";
import TradeAccountsBanner from "../components/TradeAccountsBanner";

import bgimage from "/Image.png";

export default function Home() {
	return (
		<main className="min-h-screen bg-white">
			<Hero
				bgImage={bgimage}
				title="Windscreen Replacement & Vehicle Glass Repair Specialists"
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
							<span className="text-green-600">AVG Windscreens</span>
							<span className="text-emerald-900">
								{" "}
								is a trusted partner for fleet operators across the UK.
							</span>
						</>
					}
					description="We understand that managing large fleets of vehicles requires efficient, reliable, and flexible suppliers. That’s why our fully mobile service operates nationwide on a next-day service, ensuring that your fleet always stays on the road without any disruption."
					imageUrl="https://placehold.co/1155x770"
					primaryCta={{ label: "Trade Account", variant: "primary" }}
					secondaryCta={{ label: "Learn More", variant: "outline" }}
				/>
			</Section>

			<Section spacing="large" className="bg-[#F5F5F5]">
				<ServicesGrid />
			</Section>

			<Section spacing="large" className="bg-[#024F2D]">
				<AdvantageGrid />
			</Section>

			<Section spacing="large">
				<TestimonialsSection
					image="https://placehold.co/1005x727"
					logo="https://placehold.co/189x60"
					title={
						<>
							<span className="text-emerald-900">What </span>
							<span className="text-green-600">our customers say </span>
							<span className="text-emerald-900">about their clearer view</span>
						</>
					}
					testimonials={[
						{
							quote:
								"We have a fleet of over 3,500 vehicles and AVG manage these with a fast & efficient service.\nPrices are very competitive.\n\nWould recommend to anybody needing glass repair.",
							name: "Shaun Dwyer",
							role: "Transport Manager",
						},
						{
							quote:
								"Super quick and professional service. Great communication throughout and the job was done perfectly.",
							name: "John Smith",
							role: "Fleet Supervisor",
						},
						{
							quote:
								"Excellent mobile service — saved us a lot of downtime. Highly recommended.",
							name: "Emily Johnson",
							role: "Operations Lead",
						},
						{
							quote:
								"Very efficient team and pricing was competitive. We’ll keep using AVG for our fleet.",
							name: "Michael Brown",
							role: "Transport Coordinator",
						},
						{
							quote:
								"Friendly support team and fast scheduling. The portal is very helpful for tracking jobs.",
							name: "Sarah Lee",
							role: "Admin Manager",
						},
						{
							quote:
								"Technicians were on time, the work was clean, and the vehicle was ready quickly.",
							name: "David Wilson",
							role: "Fleet Manager",
						},
					]}
				/>
			</Section>

			<Section spacing="large" className="bg-[#F5F5F5]">
				<TradeAccountsBanner />
			</Section>
		</main>
	);
}
