import React from "react";

export default function IconFeatureCard({ icon, title, description }) {
	return (
		<div className="text-center flex flex-col items-center gap-6">
			<img
				src={icon}
				alt={title}
				width={120}
				height={120}
				className="object-contain"
			/>

			<div>
				<h3 className="text-2xl sm:text-3xl font-semibold text-[#024F2D]">
					{title}
				</h3>
				<p className="mt-4 text-base sm:text-lg leading-relaxed text-black">
					{description}
				</p>
			</div>
		</div>
	);
}
