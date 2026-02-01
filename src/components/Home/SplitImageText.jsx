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
		<div className="relative w-full px-4 lg:px-0 lg:py-0">
			<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-[100px]">
				{/* IMAGE */}
				<div
					className={`relative h-[320px] sm:h-[420px] lg:h-[620px] ${
						reverse ? "lg:order-2" : ""
					} `}
				>
					<img src={imageUrl} alt="" className="w-full h-full object-cover" />
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
						<div className="flex flex-col">
							{/* Kicker + Title */}
							<SectionHeading
								kicker={kicker}
								title={title}
								align="left"
								kickerClassName="text-[24px] mb-2 lg:text-base lg:mb-4"
								titleClassName="text-[24px] lg:text-[48px]"
							/>

							{/* Description */}
							{description && (
								<p className="text-lg sm:text-2xl leading-relaxed text-black my-6">
									{description}
								</p>
							)}

							{/* CTA Buttons */}
							{(primaryCta || secondaryCta) && (
								<div className="flex flex-col gap-4 sm:flex-row sm:w-auto">
									{primaryCta && (
										<Button
											variant={primaryCta.variant || "primary"}
											className="w-full sm:w-auto"
										>
											{primaryCta.label}
										</Button>
									)}
									{secondaryCta && (
										<Button
											variant={secondaryCta.variant || "outline"}
											className="w-full sm:w-auto"
										>
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
