// components/BulletFeatureList.jsx
import React from "react";
import { IMAGES } from "../../assets/images";

export default function BulletFeatureList({ items = [] }) {
	return (
		<div className="flex flex-col gap-8">
			{items.map((item, idx) => (
				<div key={idx} className="flex items-start gap-4">
					<img src={IMAGES.Bullet_icon_gold} />
					<div>
						<h4 className="text-2xl sm:text-3xl font-medium text-[#024F2D]">
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
