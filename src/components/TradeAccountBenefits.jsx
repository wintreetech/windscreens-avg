import React from "react";
import { IMAGES } from "../assets/images";

function TickIcon() {
	return (
		<span className="sm:h-14 sm:w-14 w-8 h-8 relative overflow-hidden shrink-0">
			<img src={IMAGES.Green_Right} />
		</span>
	);
}

function BenefitRow({ title, note }) {
	return (
		<div
			className="
      flex items-start
      gap-3 sm:gap-4
    "
		>
			<TickIcon />

			<div className="flex flex-col gap-1 min-w-0">
				<p
					className="
            text-black font-medium leading-snug
            text-lg sm:text-2xl lg:text-3xl
          "
				>
					{title}
				</p>

				{note && (
					<p
						className="
              text-[#595959]/70
              text-sm sm:text-base
              font-medium
            "
					>
						{note}
					</p>
				)}
			</div>
		</div>
	);
}

export default function TradeAccountBenefits({
	leftItems = [],
	rightItems = [],
}) {
	return (
		<div className="w-full flex flex-col lg:flex-row gap-3 lg:gap-16">
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
