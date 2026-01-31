import React from "react";
import Button from "../Button";
import SectionHeading from "../SectionHeading";

export default function SplitImageText({
	kicker,
	title,
	description,
	imageUrl,
	reverse = false,
	primaryCta,
	secondaryCta,
}) {
	return (
		<div className="relative w-full">
			<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[100px]">
				{/* IMAGE – FULL BLEED */}
				<div
					className={`relative h-[320px] sm:h-[420px] lg:h-[620px] ${
						reverse ? "lg:order-2" : ""
					}`}
				>
					<img
						src={imageUrl}
						alt=""
						className="absolute inset-0 w-full h-full object-cover"
					/>
				</div>

				{/* TEXT */}
				<div className={`${reverse ? "lg:order-1" : ""}`}>
					<div
						className={`
              w-full
              max-w-[720px]
              ${reverse ? "lg:pl-[120px]" : "lg:pr-[120px]"}
            `}
					>
						<div className="flex flex-col ">
							<SectionHeading kicker={kicker} title={title} align="left" />

							{description && (
								<p className="text-lg my-8 sm:text-2xl leading-relaxed text-black">
									{description}
								</p>
							)}

							{(primaryCta || secondaryCta) && (
								<div className="flex flex-wrap gap-4 ">
									{primaryCta && (
										<Button variant={primaryCta.variant || "primary"}>
											{primaryCta.label}
										</Button>
									)}
									{secondaryCta && (
										<Button variant={secondaryCta.variant || "outline"}>
											{secondaryCta.label}
										</Button>
									)}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
