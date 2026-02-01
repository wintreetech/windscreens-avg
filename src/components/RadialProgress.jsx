import React from "react";

export default function RadialProgress({
	value = 0,
	size = 96,
	thickness = 12,
	label,
}) {
	const radius = (size - thickness) / 2;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - (value / 100) * circumference;

	return (
		<svg width={size} height={size} className="block mx-auto">
			<circle
				cx={size / 2}
				cy={size / 2}
				r={radius}
				stroke="#E5E7EB" // neutral background color
				strokeWidth={thickness}
				fill="transparent"
			/>
			<circle
				cx={size / 2}
				cy={size / 2}
				r={radius}
				stroke="#024F2D" // main progress color
				strokeWidth={thickness}
				fill="transparent"
				strokeDasharray={circumference}
				strokeDashoffset={offset}
				strokeLinecap="round"
				transform={`rotate(-90 ${size / 2} ${size / 2})`}
			/>
			<text
				x="50%"
				y="50%"
				dominantBaseline="middle"
				textAnchor="middle"
				className="text-[#024F2D] font-bold text-lg sm:text-xl"
			>
				{label || `${value}%`}
			</text>
		</svg>
	);
}
