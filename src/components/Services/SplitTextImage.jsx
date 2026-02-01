import React from "react";
import SectionHeading from "../SectionHeading";
import Button from "../Button";

export default function SplitTextImage({
	kicker,
	title,
	description,
	imageUrl,
	reverse,
	primaryCta,
	secondaryCta,
	descriptionClassName = "",
}) {
	return (
		<div
			className={`
        grid grid-cols-1 lg:grid-cols-2
        gap-10 lg:gap-25
        items-center px-4 sm:px-0
        
      `}
		>
			{/* TEXT */}
			<div
				className={`
    flex flex-col gap-8 
    order-2
    ${reverse ? "lg:order-1 p-0 sm:pl-30" : "lg:order-2 p-0 sm:pr-30"}
  `}
			>
				<SectionHeading align="left" kicker={kicker} title={title} />

				{description && (
					<p
						className={`
              text-lg sm:text-xl leading-relaxed text-black
              ${descriptionClassName}
            `}
					>
						{description}
					</p>
				)}

				{/* CTA(s) */}
				{(primaryCta || secondaryCta) && (
					<div className="flex flex-col gap-4 sm:flex-row">
						{primaryCta && (
							<Button
								variant={primaryCta.variant || "primary"}
								className="w-full sm:w-fit"
							>
								{primaryCta.label}
							</Button>
						)}

						{secondaryCta && (
							<Button
								variant={secondaryCta.variant || "outline"}
								className="w-full sm:w-fit"
							>
								{secondaryCta.label}
							</Button>
						)}
					</div>
				)}
			</div>

			{/* IMAGE */}
			<div
				className={`
    overflow-hidden
    order-1
    ${reverse ? "lg:order-2" : "lg:order-1"}
  `}
			>
				<img
					src={imageUrl}
					alt=""
					className="w-full h-[280px] sm:h-[420px] lg:h-[620px] object-cover"
				/>
			</div>
		</div>
	);
}
