import React from "react";

export default function Container({ children, className = "" }) {
	return (
		<div
			className={` mx-auto w-full px-[10px] sm:px-6 md:px-8 lg:px-12 xl:px-[120px] ${className} `}
		>
			{children}
		</div>
	);
}
