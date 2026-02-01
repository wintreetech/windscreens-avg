import React, { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { IMAGES } from "../assets/images/index.js";

function QuoteMarks() {
	return (
		<div className="flex justify-center items-center">
			<img src={IMAGES.Quote} />
		</div>
	);
}

export default function TestimonialsSection({
	image,
	logo,
	title,
	kicker,
	testimonials = [],
}) {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

	useEffect(() => {
		if (!emblaApi) return;
		const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
		emblaApi.on("select", onSelect);
		onSelect();
	}, [emblaApi]);

	if (!testimonials.length) return null;

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-25 items-center px-4 lg:px-0 lg:py-0">
			{/* Left image */}
			<div className="overflow-hidden">
				<img
					src={image}
					alt=""
					className="w-full h-[280px] sm:h-[420px] lg:h-[700px] object-cover"
				/>
			</div>

			{/* Right content */}
			<div className="flex flex-col sm:gap-6 gap-8  pr-0 sm:pr-30">
				<SectionHeading align="left" kicker={kicker} title={title} />

				{/* Carousel */}
				<div ref={emblaRef} className="overflow-hidden">
					<div className="flex">
						{testimonials.map((t, i) => (
							<div
								key={i}
								className="flex-[0_0_100%] " // 👈 THIS IS CRITICAL
							>
								<div className="px-2 sm:px-6">
									{/* Shadow container */}
									<div className="relative">
										<div
											className="
              absolute inset-0
              rounded-[34px]
              shadow-[0_4px_34px_rgba(58,58,58,0.09)]
            "
										/>

										{/* Card */}
										<div className="relative bg-white p-6 rounded-[34px] flex flex-col gap-8">
											{/* Top row */}
											<div className="flex items-center justify-between">
												<QuoteMarks />
												{logo && (
													<img
														src={logo}
														alt="logo"
														className="h-12 w-auto object-contain"
													/>
												)}
											</div>

											{/* Quote */}
											<p className="text-lg leading-relaxed text-black sm:text-xl lg:text-2xl">
												{t.quote}
											</p>

											{/* Author */}
											<div>
												<p className="text-2xl font-bold text-[#024F2D] sm:text-3xl lg:text-4xl">
													{t.name}
												</p>
												<p className="text-base font-medium text-[#3D8C58] sm:text-lg">
													{t.role}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* DOTS */}
				<div className="mt-8 flex items-center justify-center gap-2">
					{testimonials.map((_, index) => {
						const active = index === selectedIndex;

						return (
							<button
								key={index}
								onClick={() => emblaApi?.scrollTo(index)}
								className="relative w-6 h-6"
								aria-label={`Go to testimonial ${index + 1}`}
							>
								{/* Inner circle */}
								<span
									className={`absolute inset-[3px] rounded-full transition-colors ${
										active ? "bg-[#024F2D]" : "bg-[#BDBDBD]"
									}`}
								/>
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
}
