// components/BulletFeatureList.jsx
import React from "react";

export default function BulletFeatureList({ items = [] }) {
	return (
		<div className="flex flex-col gap-8">
			{items.map((item, idx) => (
				<div key={idx} className="flex items-start gap-4">
					<div className="mt-2 h-8 w-8 rounded-lg bg-yellow-600 shrink-0" />
					<div>
						<h4 className="text-2xl sm:text-3xl font-medium text-emerald-900">
							{item.title}
						</h4>
						<p className="mt-2 text-lg sm:text-xl leading-relaxed text-black">
							{item.description}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
