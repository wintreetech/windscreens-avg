import React from "react";

export default function SectionHeading({
	kicker,
	title,
	align = "left",
	extraclass,
}) {
	const alignCls =
		align === "center"
			? "items-center text-center"
			: "items-center text-center sm:items-start sm:text-left";

	return (
		<div className={`flex flex-col ${alignCls}`}>
			{kicker ? (
				<p className="text-[#D69212] text-base font-medium uppercase tracking-widest">
					{kicker}
				</p>
			) : null}
			{title ? (
				<h2
					className={`text-2xl  ${kicker ? "mt-2 sm:mt-6" : ""} sm:text-4xl lg:text-5xl font-bold leading-tight ${extraclass}`}
				>
					{title}
				</h2>
			) : null}
		</div>
	);
}
