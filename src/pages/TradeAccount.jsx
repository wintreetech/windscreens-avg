import React, { useState } from "react";
import HeroTwo from "../components/HeroTwo";
import Container from "../components/Container";

// if you already have these sections
import TestimonialsSection from "../components/TestimonialsSection";
import TradeAccountBenefits from "../components/TradeAccountBenefits";
import TradeAccountApplication from "../components/TradeAccountApplication";
import Section from "../components/Section";

export default function TradeAccount() {
	const [step, setStep] = useState(1);

	return (
		<div className="font-henju">
			<HeroTwo
				title="Trade Account"
				breadcrumb={[{ label: "Home", href: "/" }, { label: "Trade Account" }]}
				images={["https://placehold.co/1920x482"]}
				// ✅ make rectangle dynamic / same feel as figma
				cardClassName="
          lg:w-[834px] lg:h-[384px]
          lg:left-[64px] lg:top-[241px]
        "
				contentClassName="
          lg:w-[523px]
          lg:left-[120px] lg:top-[318px]
        "
			/>

			{/* SECTION 1: Intro + Benefits */}
			<Section spacing="large">
				<Container>
					<div className="max-w-[1458px] mx-auto flex flex-col items-center gap-16">
						<div className="text-center flex flex-col gap-4">
							<h2 className="text-3xl sm:text-4xl lg:text-5xl text-emerald-900">
								Trade Account
							</h2>
							<p className="text-lg sm:text-xl lg:text-2xl text-black leading-relaxed">
								At AVG Windscreens, we hold accounts for all types of trade
								customers and pride ourselves on a friendly and efficient
								service. If you would like to open a trade account with AVG
								Windscreens, please fill out the form below:
							</p>
						</div>

						<TradeAccountBenefits
							leftItems={[
								"Certified and Experienced Technicians",
								"Nationwide Coverage",
								"Account Customer Discount",
								"Instant 30 Day Account",
							]}
							rightItems={[
								"Account Customer Priority Service",
								{
									title: "Insurance Direct Billing For Fleet Vehicles",
									note: "(terms and conditions apply)",
								},
								"Fast and Efficient Service",
								"Comprehensive range of glass held in stock",
							]}
						/>
					</div>
				</Container>
			</Section>

			{/* SECTION 2: Application (Stepper + Form) */}
			<Section spacing="large" className="bg-[#F5F5F5]">
				<Container>
					<TradeAccountApplication step={step} onStepChange={setStep} />
				</Container>
			</Section>

			{/* Testimonials (you already have component) */}
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
		</div>
	);
}
