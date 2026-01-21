import React from "react";

function TickIcon() {
	return (
		<span className="h-14 w-14 relative overflow-hidden shrink-0">
			<span className="absolute left-[4.43px] top-[4.43px] h-11 w-11 bg-green-600" />
			<span className="absolute left-[17px] top-[21px] h-3 w-5 border-[3px] border-white border-t-0 border-r-0 rotate-[-45deg]" />
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
					<p className="text-black/50 text-base sm:text-lg">{note}</p>
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
