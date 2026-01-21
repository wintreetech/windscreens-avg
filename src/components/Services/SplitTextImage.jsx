import React from "react";
import SectionHeading from "../SectionHeading";
import Container from "../Container";

export default function SplitTextImage({
	kicker,
	title,
	description,
	imageUrl,
	bg = "neutral",
	reverse = false,
}) {
	return (
		<Container>
			<div
				className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
					reverse ? "lg:[&>*:first-child]:order-2" : ""
				}`}
			>
				<div className="flex flex-col gap-6">
					<SectionHeading align="left" kicker={kicker} title={title} />

					{description ? (
						<p className="text-lg sm:text-xl leading-relaxed text-black">
							{description}
						</p>
					) : null}
				</div>

				<div className="rounded-3xl overflow-hidden">
					<img
						src={imageUrl}
						alt=""
						className="w-full h-[280px] sm:h-[420px] lg:h-[520px] object-cover"
					/>
				</div>
			</div>
		</Container>
	);
}
