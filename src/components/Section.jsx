import React from "react";

export default function Section({
	children,
	className = "",
	spacing = "default", // default | large | none
}) {
	const spacingClasses = {
		default: "py-[60px] lg:py-[140px]",
		large: "py-[60px] lg:py-[180px]",
		none: "",
	};

	return (
		<section
			className={`relative w-full ${spacingClasses[spacing]} ${className}`}
		>
			{children}
		</section>
	);
}
