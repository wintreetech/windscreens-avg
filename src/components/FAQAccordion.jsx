import React from "react";
import { MessageCircleQuestion } from "lucide-react";

export default function FAQAccordion({ items }) {
	return (
		<div className="flex flex-col gap-6">
			{items.map((item, index) => (
				<div key={index} className="bg-[#F5F5F5]  p-6">
					<div className="flex items-start gap-4">
						{/* Icon */}
						<div className="shrink-0 w-8 h-8 rounded-full bg-[#D69212] flex items-center justify-center">
							<MessageCircleQuestion className="w-5 h-5 text-white" />
						</div>

						{/* Content */}
						<div className="flex-1">
							<h3 className="text-[24px] font-bold text-[#024F2D]">{item.q}</h3>

							<div className="mt-2 text-black font-medium leading-relaxed">
								{item.a}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
