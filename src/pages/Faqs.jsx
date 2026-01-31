import React from "react";
import Container from "../components/Container";
import FAQAccordion from "../components/FAQAccordion";

import TestimonialsSection from "../components/TestimonialsSection";
import TradeAccountsBanner from "../components/TradeAccountsBanner";
import Section from "../components/Section";
import { Testimonial } from "../data";
import { IMAGES } from "../assets/images";

export default function Faqs() {
	const leftFaqs = [
		{
			q: "How much does a new windscreen cost?",
			a: (
				<>
					A new windscreen costs on average between <b>£250</b> and <b>£500</b>,
					including VAT.
				</>
			),
		},
		{
			q: "Where can I get the work done?",
			a: (
				<>
					We offer a <b>fully mobile service</b>, meaning we come to your home,
					workplace, or any other preferred location of your choice.
				</>
			),
		},
		{
			q: "What size of chip is repairable?",
			a: (
				<>
					Any chip smaller than a £1 coin can usually be repaired. However,
					certain factors such as the location and depth of the damage can
					affect repairability. For full details on what can and cannot be{" "}
					<a
						href="/services/windscreen-chip-repairs"
						className="text-[#3D8C58] underline"
					>
						repaired
					</a>
					, please refer to our repairs page.
				</>
			),
		},
		{
			q: "Will the chip disappear completely after repair?",
			a: (
				<>
					While repairs prevent further damage, minor air bubbles may remain
					visible after the repair is complete. The purpose of a chip repair is
					to prevent the damage from spreading and turning into a costlier
					crack.
				</>
			),
		},
		{
			q: "How long does a repair or replacement take?",
			a: (
				<>
					Repairs take approximately 30 minutes and replacements take
					approximately an hour.
				</>
			),
		},
		{
			q: "Can I continue driving with a cracked windscreen?",
			a: (
				<>
					Driving with a cracked windscreen can be considered a motoring offence
					and could impact the safety of you and others on the road. That’s why
					we recommend booking a windscreen replacement as soon as possible.
				</>
			),
		},
	];

	const rightFaqs = [
		{
			q: "How to care for a newly replaced windscreen?",
			a: (
				<>
					You should not drive the vehicle for one hour. Do not wash the vehicle
					for 7 days after a replacement.
				</>
			),
		},
		{
			q: "Will a windscreen claim affect my No Claims Discount?",
			a: (
				<>
					No, windscreen claims do not affect your No Claims Discount, but your
					insurer may factor it into future premiums. For further details you
					should contact your insurer.
				</>
			),
		},
		{
			q: "When does my windscreen need calibration?",
			a: (
				<>
					ADAS camera controlling safety features (like Lane Assist) are
					positioned behind the windscreen. After your windscreen has been
					replaced, the camera needs to be calibrated to ensure they function
					correctly.
				</>
			),
		},
		{
			q: "Do you offer interest-free finance?",
			a: (
				<>
					Yes, through <b>Payment Assist</b>. Ask one of our advisors for
					details.
				</>
			),
		},
		{
			q: "Do you offer a warranty on the replacements?",
			a: (
				<>
					AVG Windscreens offers a one-year workmanship warranty on all
					replacements. This means that if there are any issues, we will repair
					it free of charge.
				</>
			),
		},
	];

	return (
		<>
			{/* ✅ FAQ SECTION */}
			<Section spacing="large">
				<Container>
					<h1 className="text-center text-3xl sm:text-4xl lg:text-5xl text-[#024F2D] font-henju">
						Frequently Asked Questions
					</h1>

					<div className="mt-10 lg:mt-16 grid grid-cols-1 xl:grid-cols-2 gap-6">
						<FAQAccordion items={leftFaqs} defaultOpenIndex={0} />
						<FAQAccordion items={rightFaqs} defaultOpenIndex={-1} />
					</div>
				</Container>
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

			<Section spacing="large">
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
		</>
	);
}
