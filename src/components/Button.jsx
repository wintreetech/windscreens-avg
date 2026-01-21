import React from "react";

export default function Button({
	children,
	variant = "primary",
	className = "",
	as: Comp = "button",
	...props
}) {
	const base =
		"inline-flex items-center justify-center rounded-xl px-6 py-4 text-base sm:text-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";
	const variants = {
		primary: "bg-emerald-900 text-white focus:ring-emerald-900",
		secondary: "bg-yellow-600 text-white focus:ring-yellow-600",
		outline:
			"border border-emerald-900 text-emerald-900 bg-transparent focus:ring-emerald-900",
	};

	return (
		<Comp className={`${base} ${variants[variant]} ${className}`} {...props}>
			{children}
		</Comp>
	);
}
