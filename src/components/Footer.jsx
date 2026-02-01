import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Button from "./Button";
import CTAQuoteBar from "./Home/CTAQuoteBar";
import Section from "./Section";

const socials = [
	{ label: "Facebook", href: "#" },
	{ label: "Instagram", href: "#" },
	{ label: "LinkedIn", href: "#" },
	{ label: "X", href: "#" },
];

export default function Footer() {
	return (
		<>
			<Section className="bg-[#024F2D] py-20 sm:!py-30">
				<CTAQuoteBar
					title={
						<>
							<span className="text-white">
								Need a quote for your vehicle glass requirement?{" "}
							</span>
						</>
					}
					kicker="Get a Quote"
				/>
			</Section>
			<footer className="w-full bg-white font-henju">
				{/* Contact section */}
				<section className="py-16 sm:py-24 lg:py-35">
					<Container>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
							<div className="flex flex-col gap-6">
								<p className="text-yellow-600 text-sm font-medium uppercase tracking-widest">
									Contact Us
								</p>

								<h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#024F2D] leading-tight">
									Our friendly team is here to help you get back on the road
									safely.
								</h3>

								<p className="text-lg sm:text-xl leading-relaxed text-black">
									Contact AVG Windscreens today to schedule a mobile glass
									replacement service. If your vehicle’s wing mirror glass is
									damaged, don’t wait!
								</p>

								<div className="flex flex-wrap gap-3">
									<Button variant="primary" as={Link} to="/quote">
										Get a Quote
									</Button>
									<Button variant="outline" as={Link} to="/trade-account">
										Trade Account
									</Button>
								</div>

								<div className="mt-6 flex flex-wrap items-center gap-6">
									<div className="h-16 w-28 bg-neutral-100 rounded" />
									<div className="h-12 w-44 bg-neutral-100 rounded" />
									<div className="h-10 w-32 bg-neutral-100 rounded" />
								</div>
							</div>

							<div className="rounded-3xl overflow-hidden">
								<img
									src="https://placehold.co/1005x727"
									alt="Contact"
									className="w-full h-[260px] sm:h-[360px] lg:h-[480px] object-cover"
								/>
							</div>
						</div>
					</Container>
				</section>

				{/* Bottom bar stays compact */}
				<div className="bg-yellow-600">
					<Container className="py-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
						<div className="text-white text-sm flex flex-col sm:flex-row sm:items-center gap-2">
							<span>
								© 2025 AVG Windscreens. Registered in England & Wales (02892561)
							</span>
							<span className="hidden sm:inline opacity-60">|</span>
							<Link to="/privacy" className="underline underline-offset-4">
								Privacy Policy
							</Link>
						</div>

						<div className="flex items-center gap-3 text-white">
							<span className="text-sm font-medium">Connect with us:</span>
							<div className="flex items-center gap-2">
								{socials.map((s) => (
									<a
										key={s.label}
										href={s.href}
										className="h-9 w-9 rounded-lg bg-white/15 hover:bg-white/25 transition flex items-center justify-center text-xs font-semibold"
									>
										{s.label.slice(0, 2).toUpperCase()}
									</a>
								))}
							</div>
						</div>
					</Container>
				</div>
			</footer>
		</>
	);
}
