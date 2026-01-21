import React from "react";

export default function IconFeatureCard({ icon, title, description }) {
	return (
		<div className="text-center flex flex-col items-center gap-5">
			<div className="h-20 w-20 rounded-3xl bg-green-600/10 flex items-center justify-center">
				{icon ? icon : <div className="h-10 w-10 rounded-xl bg-green-600" />}
			</div>

			<div>
				<h3 className="text-2xl sm:text-3xl font-semibold text-emerald-900">
					{title}
				</h3>
				<p className="mt-3 text-base sm:text-lg leading-relaxed text-black">
					{description}
				</p>
			</div>
		</div>
	);
}
