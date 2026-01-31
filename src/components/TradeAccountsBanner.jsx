import React from "react";
import Container from "./Container";
import Button from "./Button";
import SectionHeading from "./SectionHeading";
import { IMAGES } from "../assets/images";
import { MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function TickIcon() {
	return (
		<div className="h-12 w-12 relative overflow-hidden shrink-0">
			<img src={IMAGES.Yellow_Right} />
		</div>
	);
}

export default function TradeAccountsBanner({
	onCtaHref = "/trade-account",
	title,
	kicker = "Trade Accounts",
	darkBg,
}) {
	const bullets = [
		"Next working day service",
		"Competitive Pricing",
		"A large stock of glass for quick turnaround",
		"An exclusive portal in order to book replacements",
		"A dedicated and experienced account manager",
	];

	return (
		<Container>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
				{/* Left Side */}
				<div className="flex flex-col gap-6">
					<SectionHeading align="left" kicker={kicker} title={title} />

					<Link to={onCtaHref}>
						<Button
							variant="secondary"
							as="a"
							className="w-fit font-medium flex justify-center items-center gap-2 text-white bg-[#D69212] hover:bg-[#bf7f0f] transition-colors duration-300"
						>
							Trade Account
							<MoveUpRight className="w-6 h-6" />
						</Button>
					</Link>
				</div>

				{/* Right Side: Bullets */}
				<div className="flex flex-col gap-3 items-start">
					{bullets.map((t) => (
						<div key={t} className="flex items-start gap-4">
							<TickIcon />

							<p
								className={`text-xl sm:text-2xl lg:text-3xl font-medium leading-snug ${
									darkBg ? "text-white" : "text-black"
								}`}
							>
								{t}
							</p>
						</div>
					))}
				</div>
			</div>
		</Container>
	);
}
