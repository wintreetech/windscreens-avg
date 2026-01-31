import React from "react";
import QuoteProcess from "../components/QuoteProcess";
import HeroTwo from "../components/HeroTwo";
import TradeAccountsBanner from "../components/TradeAccountsBanner";
import TestimonialsSection from "../components/TestimonialsSection";
import Section from "../components/Section";
import GReviews from "../components/GReviews";

function Quote() {
	return (
		<div>
			<HeroTwo
				title="Quote"
				images={[
					"https://placehold.co/1920x482",
					"https://placehold.co/2394x740",
				]}
				breadcrumb={[{ label: "Home", href: "/quote" }, { label: "quote" }]}
			/>
			<Section spacing="large" className="#f5f5f5">
				<QuoteProcess />
			</Section>
			<Section spacing="large">
				<GReviews />
			</Section>
			<Section spacing="large" className="bg-[#024F2D]">
				<TradeAccountsBanner onCtaHref="/trade-account" />
			</Section>
			<Section spacing="large">
				<TestimonialsSection
					image="https://placehold.co/1005x727"
					logo="https://placehold.co/189x60"
					title={
						<>
							<span className="text-[#024F2D]">What </span>
							<span className="text-[#3D8C58]">our customers say </span>
							<span className="text-[#024F2D]">about their clearer view</span>
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
		</div>
	);
}

export default Quote;
