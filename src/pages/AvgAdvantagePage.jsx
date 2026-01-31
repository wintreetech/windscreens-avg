import React from "react";
import HeroTwo from "../components/HeroTwo";
import AvgAdvantageSection from "../components/AvgAdvantageSection";
import TradeAccountsBanner from "../components/TradeAccountsBanner";
import TestimonialsSection from "../components/TestimonialsSection";
import Section from "../components/Section";

export default function AvgAdvantagePage() {
	return (
		<main className="font-henju">
			<Section spacing="large">
				<AvgAdvantageSection
					kicker="The AVG Advantage"
					heading="Here’s what sets us apart:"
					items={[
						{
							title: "Nationwide Mobile Service",
							description:
								"Our technicians come to you, whether at home, work, or any other location of your choice",
						},
						{
							title: "Quick Turnaround",
							description: "Replacements completed within 1 working day.",
						},
						{
							title: "IMI-Certified Technicians",
							description:
								"Our team is trained to the highest standards, ensuring a safe and professional job every time.",
						},
						{
							title: "Mobile ADAS Calibration",
							description:
								"We come to you for all our services ensuring that you never need to take your vehicle to the garage.",
						},
						{
							title: "Customer Portal",
							description:
								"When you are managing a large fleet, it is important for you to be able to see the status of all your vehicles. AVG Windscreens allows you to make bookings and see updates for all your bookings at any given moment.",
						},
						{
							title: "Efficient Customer Service",
							description:
								"Our phones are answered by our trusted service team in less than 20 seconds, and emails are answered within an hour.",
						},
					]}
					bottomLine={
						<>
							When you choose AVG Windscreens, you're choosing a partner that
							values quality, <br className="hidden sm:block" />
							convenience, and customer service.
						</>
					}
				/>
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
		</main>
	);
}
