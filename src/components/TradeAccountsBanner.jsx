import React from "react";
import Container from "./Container";
import Button from "./Button";

function TickIcon() {
	return (
		<div className="h-14 w-14 relative overflow-hidden shrink-0">
			{/* White box instead of yellow */}
			<div className="absolute inset-[4.43px] bg-white rounded-xl" />
			{/* Green tick inside */}
			<div className="absolute left-[17px] top-[21px] w-5 h-3 border-[3px] border-green-600 border-t-0 border-r-0 rotate-[-45deg]" />
		</div>
	);
}

export default function TradeAccountsBanner({ onCtaHref = "/trade-account" }) {
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
					<p className="text-green-600 text-sm sm:text-base font-medium uppercase tracking-widest">
						Trade Accounts
					</p>

					<h2 className="text-green-900 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
						We offer exclusive benefits for businesses with regular vehicle
						glass needs.
					</h2>

					<Button
						variant="secondary"
						as="a"
						href={onCtaHref}
						className="w-fit bg-green-600 text-white hover:bg-green-700"
					>
						Trade Account
					</Button>
				</div>

				{/* Right Side: Bullets */}
				<div className="flex flex-col gap-3">
					{bullets.map((t) => (
						<div key={t} className="flex items-center gap-4">
							<TickIcon />
							<p className="text-green-900 text-xl sm:text-2xl lg:text-3xl font-medium leading-snug">
								{t}
							</p>
						</div>
					))}
				</div>
			</div>
		</Container>
	);
}
