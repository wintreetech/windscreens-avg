// components/IntroParagraph.jsx
import React from "react";

export default function IntroParagraph({ text }) {
	return (
		<p className="mx-auto mb-4 sm:mb-10 max-w-[1560px] text-center text-xl sm:text-2xl leading-relaxed text-black">
			{text}
		</p>
	);
}
