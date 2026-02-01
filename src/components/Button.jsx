import React from "react";

export default function Button({
	children,
	variant = "primary",
	className = "",
	as: Comp = "button",
	...props
}) {
	const base =
		"inline-flex w-full sm:w-fit items-center justify-center px-6 py-4 text-base sm:text-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2";

	const variants = {
		primary: "bg-[#024F2D] text-white font-semibold focus:ring-[#024F2D]",

		secondary: "bg-[#D69212] text-white font-semibold focus:ring-yellow-600",

		outline:
			"border border-[#024F2D] text-[#024F2D] bg-transparent font-normal focus:ring-[#024F2D]",
	};

	return (
		<Comp className={`${base} ${variants[variant]} ${className}`} {...props}>
			{children}
		</Comp>
	);
}
