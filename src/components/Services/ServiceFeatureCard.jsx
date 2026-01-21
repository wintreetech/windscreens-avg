import React from "react";

export default function ServiceFeatureCard({ icon, title, description }) {
	return (
		<div className="w-full max-w-[544px] flex flex-col gap-4">
			<div className="h-16 w-16 flex items-center justify-center">
				{icon ? icon : <div className="h-16 w-16 rounded-2xl bg-yellow-600" />}
			</div>

			<div className="flex flex-col gap-2.5">
				<h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-emerald-900 leading-tight">
					{title}
				</h3>
				<p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-black">
					{description}
				</p>
			</div>
		</div>
	);
}
