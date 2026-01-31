import React from "react";

export default function ServiceFeatureCard({ icon, title, description }) {
	return (
		<div className="w-full max-w-[544px] flex flex-col gap-4">
			<img
				src={icon}
				alt="icon"
				width={64}
				height={64}
				className="object-contain"
			/>

			<div className="flex flex-col gap-2.5">
				<h3 className="text-2xl sm:text-3xl font-medium text-[#024F2D] leading-tight">
					{title}
				</h3>
				<p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-black">
					{description}
				</p>
			</div>
		</div>
	);
}
