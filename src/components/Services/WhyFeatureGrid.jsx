import React from "react";

import SectionHeading from "../SectionHeading";
import IconFeatureCard from "../IconFeatureCard";
import Container from "../Container";

export default function WhyFeatureGrid({
	title,
	kicker,
	items = [],
	bg = "white",
	extraClass,
}) {
	return (
		<Container className="sm:gap-25 gap-8 flex flex-col">
			<div className="flex justify-center">
				<SectionHeading align="center" kicker={kicker} title={title} />
			</div>

			<div
				className={`grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 ${extraClass}`}
			>
				{items.map((item) => (
					<IconFeatureCard
						key={item.title}
						icon={item.icon}
						title={item.title}
						description={item.description}
					/>
				))}
			</div>
		</Container>
	);
}
