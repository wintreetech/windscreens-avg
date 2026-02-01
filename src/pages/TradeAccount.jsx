import React, { useState } from "react";
import HeroTwo from "../components/HeroTwo";
import Container from "../components/Container";

// if you already have these sections
import TestimonialsSection from "../components/TestimonialsSection";
import TradeAccountBenefits from "../components/TradeAccountBenefits";
import TradeAccountApplication from "../components/TradeAccountApplication";
import Section from "../components/Section";
import AvgAdvantageSection from "../components/AvgAdvantageSection";
import TradeAccountsBanner from "../components/TradeAccountsBanner";
import QuoteProcess from "../components/QuoteProcess";
import { advantages, Testimonial } from "../data";
import { IMAGES } from "../assets/images";

export default function TradeAccount() {
	const [step, setStep] = useState(1);

	return (
		<div className="font-henju">
			<HeroTwo
				title="Trade Account"
				bgImage={IMAGES.HeroTradeAccount}
				breadcrumb={[{ label: "Home", href: "/" }, { label: "Trade Account" }]}
			/>

			<Section spacing="large" className="bg-[#F5F5F5]">
				<AvgAdvantageSection
					kicker="The AVG Advantage"
					title="Here’s what sets us apart:"
					items={advantages}
					bottomLine={
						<>
							When you choose AVG Windscreens, you're choosing a partner that
							values quality, <br className="hidden sm:block" />
							convenience, and customer service.
						</>
					}
				/>
			</Section>

			{/* ✅ the rest sections like figma */}
			<Section spacing="large" className="bg-[#024F2D]">
				<TradeAccountsBanner
					darkBg
					title={
						<>
							<span className="text-[#ffffff]">
								We offer exclusive benefits for businesses
							</span>
							<span className="text-[#ffffff]">
								{" "}
								with regular vehicle glass needs.
							</span>
						</>
					}
				/>
			</Section>

			{/* SECTION 1: Intro + Benefits */}
			<Section spacing="large">
				<Container>
					<div className="mx-auto flex flex-col items-center gap-8 sm:gap-16">
						<div className="text-center flex flex-col gap-4">
							<h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-[#024F2D]">
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

			<Section spacing="large" className="#f5f5f5">
				<QuoteProcess />
			</Section>

			{/* Testimonials (you already have component) */}
			<Section spacing="large" className="bg-[#F5F5F5]">
				<TestimonialsSection
					image={IMAGES.testimonial1}
					logo="https://placehold.co/189x60"
					title={
						<>
							<span className="text-[#024F2D]">What </span>
							<span className="text-[#3D8C58]">our customers say </span>
							<span className="text-[#024F2D]">about their clearer view</span>
						</>
					}
					kicker="Testimonials"
					testimonials={Testimonial}
				/>
			</Section>
		</div>
	);
}
