import React from "react";

const Card = ({ title, description, icon }) => (
	<div className="flex flex-col items-center gap-6 text-center">
		<div className="h-28 w-28 rounded-[28px] bg-yellow-600/10 flex items-center justify-center">
			{icon ? icon : <div className="h-20 w-20 rounded-2xl bg-yellow-600" />}
		</div>

		<div className="flex flex-col gap-4">
			<h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#024F2D]">
				{title}
			</h3>
			<p className="text-lg sm:text-xl lg:text-2xl leading-8 sm:leading-9 text-black">
				{description}
			</p>
		</div>
	</div>
);

export default function PreventiveMeasuresGrid({ items = [] }) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-16">
			{items.map((x) => (
				<Card key={x.title} {...x} />
			))}
		</div>
	);
}
