// components/IntroParagraph.jsx
import React from "react";

export default function IntroParagraph({ text }) {
	return (
		<p className="mx-auto mb-16 max-w-[1560px] text-center text-xl sm:text-2xl lg:text-3xl leading-relaxed text-black">
			{text}
		</p>
	);
}
