import React from "react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import ServiceFeatureCard from "./Services/ServiceFeatureCard";

export default function AvgAdvantageSection({
	kicker,
	title,
	items = [],
	bottomLine,
}) {
	return (
		<Container>
			<div className="flex flex-col gap-16">
				<div className="flex flex-col gap-4 text-center items-center">
					<SectionHeading
						extraclass="sm:!mt-4"
						align="center"
						kicker={<span className="text-[#024F2D]">{kicker}</span>}
						title={<span className="text-[#024F2D] ">{title}</span>}
					/>
				</div>

				{/* ✅ fixed: always 3 cols on xl, 2 cols on sm */}
				<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-16">
					{items.map((it, idx) => (
						<ServiceFeatureCard
							key={idx}
							icon={it.icon}
							title={it.title}
							description={it.desc}
						/>
					))}
				</div>

				{bottomLine ? (
					<p className="text-center text-2xl sm:text-3xl lg:text-4xl font-medium text-[#024F2D] leading-snug">
						{bottomLine}
					</p>
				) : null}
			</div>
		</Container>
	);
}
