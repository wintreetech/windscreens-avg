import React, { useState } from "react";

function YellowIcon() {
	return (
		<span className="h-7 w-7 relative overflow-hidden shrink-0">
			<span className="absolute left-[1.5px] top-[1.5px] h-6 w-6 bg-yellow-600" />
		</span>
	);
}

export default function FAQAccordion({ items = [], defaultOpenIndex = 0 }) {
	const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

	return (
		<div className="flex flex-col gap-6">
			{items.map((faq, idx) => {
				const isOpen = idx === openIndex;

				return (
					<div key={idx} className="bg-neutral-100 p-6 overflow-hidden">
						<button
							type="button"
							onClick={() => setOpenIndex(isOpen ? -1 : idx)}
							className="w-full flex items-center gap-3.5 text-left"
						>
							<YellowIcon />
							<p className="flex-1 text-emerald-900 text-xl sm:text-2xl font-henju">
								{faq.q}
							</p>

							{/* caret */}
							<span
								className={`h-6 w-6 shrink-0 transition-transform ${
									isOpen ? "rotate-180" : ""
								}`}
							>
								<span className="block h-2 w-3 border-[1.5px] border-black rotate-45 translate-y-2 translate-x-1 border-t-0 border-l-0" />
							</span>
						</button>

						{/* answer */}
						<div
							className={`grid transition-[grid-template-rows,opacity] duration-300 ${
								isOpen
									? "grid-rows-[1fr] opacity-100"
									: "grid-rows-[0fr] opacity-0"
							}`}
						>
							<div className="overflow-hidden">
								<div className="pt-2 text-black text-base sm:text-lg leading-relaxed font-henju">
									{/* allow JSX answer */}
									{faq.a}
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
