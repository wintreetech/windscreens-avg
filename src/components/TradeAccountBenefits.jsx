import React from "react";
import { IMAGES } from "../assets/images";

function TickIcon() {
	return (
		<span className="h-14 w-14 relative overflow-hidden shrink-0">
			<img src={IMAGES.Green_Right} />
		</span>
	);
}

function BenefitRow({ title, note }) {
	return (
		<div className="flex items-start gap-4">
			<TickIcon />
			<div className="min-w-0">
				<p className="text-black text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight">
					{title}
				</p>
				{note ? (
					<p className="text-[#595959]/50 text-base sm:text-lg font-semibold">
						{note}
					</p>
				) : null}
			</div>
		</div>
	);
}

export default function TradeAccountBenefits({
	leftItems = [],
	rightItems = [],
}) {
	return (
		<div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-16">
			<div className="flex-1 flex flex-col gap-3">
				{leftItems.map((it, idx) => (
					<BenefitRow
						key={idx}
						title={typeof it === "string" ? it : it.title}
						note={it.note}
					/>
				))}
			</div>

			<div className="flex-1 flex flex-col gap-3">
				{rightItems.map((it, idx) => (
					<BenefitRow
						key={idx}
						title={typeof it === "string" ? it : it.title}
						note={it.note}
					/>
				))}
			</div>
		</div>
	);
}
