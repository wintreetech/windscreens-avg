import React from "react";

export default function SectionHeading({ kicker, title, align = "left" }) {
	const alignCls =
		align === "center" ? "text-center items-center" : "text-left items-start";

	return (
		<div className={`flex flex-col gap-3 ${alignCls}`}>
			{kicker ? (
				<p className="text-yellow-600 text-sm font-medium uppercase tracking-widest">
					{kicker}
				</p>
			) : null}
			{title ? (
				<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
					{title}
				</h2>
			) : null}
		</div>
	);
}
