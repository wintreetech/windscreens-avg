import React from "react";

function StepCard({ icon, step, text }) {
	return (
		<div className="w-full max-w-[520px] flex flex-col items-center gap-4">
			<img
				src={icon}
				alt="icon"
				width={112}
				height={112}
				className="object-contain"
			/>

			<p className="text-[#3D8C58] text-xl sm:text-2xl font-medium text-center">
				{step}
			</p>

			<p className="text-black text-lg sm:text-xl lg:text-2xl leading-relaxed text-center">
				{text}
			</p>
		</div>
	);
}

export default function StepsGrid({ steps = [] }) {
	return (
		<div className="flex flex-wrap justify-center gap-10 xl:gap-16">
			{steps.map((s, idx) => (
				<StepCard key={idx} icon={s.icon} step={s.step} text={s.text} />
			))}
		</div>
	);
}
