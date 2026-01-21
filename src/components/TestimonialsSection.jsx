import React, { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

function QuoteMarks() {
	return (
		<div className="h-20 w-20 relative overflow-hidden shrink-0">
			<div className="absolute left-[11.38px] top-[20.13px] w-7 h-11 bg-emerald-900" />
			<div className="absolute left-[46.38px] top-[20.13px] w-7 h-11 bg-emerald-900" />
		</div>
	);
}

function ArrowIcon({ dir = "right" }) {
	return (
		<span className="h-3 w-3 relative block">
			<span
				className={`absolute inset-0 border-[1.5px] border-white ${
					dir === "left"
						? "rotate-45 border-t-0 border-r-0"
						: "-rotate-135 border-t-0 border-r-0"
				}`}
			/>
		</span>
	);
}

export default function TestimonialsSection({
	image = "https://placehold.co/1005x727",
	logo = "https://placehold.co/189x60",
	title,
	kicker = "Testimonials",
	testimonials = [],
}) {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [canPrev, setCanPrev] = useState(false);
	const [canNext, setCanNext] = useState(false);

	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: "start",
		skipSnaps: false,
	});

	const snaps = useMemo(() => testimonials.map((_, i) => i), [testimonials]);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
		setCanPrev(emblaApi.canScrollPrev());
		setCanNext(emblaApi.canScrollNext());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		onSelect();
		emblaApi.on("select", onSelect);
		emblaApi.on("reInit", onSelect);
		return () => {
			emblaApi.off("select", onSelect);
			emblaApi.off("reInit", onSelect);
		};
	}, [emblaApi, onSelect]);

	const scrollPrev = useCallback(
		() => emblaApi && emblaApi.scrollPrev(),
		[emblaApi],
	);
	const scrollNext = useCallback(
		() => emblaApi && emblaApi.scrollNext(),
		[emblaApi],
	);
	const scrollTo = useCallback(
		(i) => emblaApi && emblaApi.scrollTo(i),
		[emblaApi],
	);

	if (!testimonials.length) return null;

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-25 items-center">
			{/* Left image */}
			<div className="rounded-3xl overflow-hidden">
				<img
					src={image}
					alt=""
					className="w-full h-[280px] sm:h-[420px] lg:h-[727px] object-cover"
				/>
			</div>

			{/* Right content */}
			<div className="flex flex-col gap-8 pr-30">
				<SectionHeading align="left" kicker={kicker} title={title} />

				{/* Slider + Controls */}
				<div className="flex flex-col gap-6">
					{/* Carousel */}
					<div ref={emblaRef} className="overflow-hidden w-full">
						<div className="flex">
							{testimonials.map((t, i) => (
								<div key={i} className="flex-[0_0_100%] min-w-0">
									<div className="w-full rounded-[34px] bg-white p-6 shadow-[0px_4px_34px_0px_rgba(58,58,58,0.09)] flex flex-col gap-8">
										<div className="flex items-center justify-between gap-6">
											<QuoteMarks />
											<img
												className="h-12 sm:h-14 w-auto"
												src={logo}
												alt="logo"
											/>
										</div>

										<p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-black whitespace-pre-line">
											{t.quote}
										</p>

										<div>
											<p className="text-2xl sm:text-3xl lg:text-4xl text-emerald-900">
												{t.name}
											</p>
											<p className="text-green-600 text-base sm:text-lg">
												{t.role}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Controls row: arrows + dots (like design) */}
					<div className="flex items-center justify-between gap-4">
						{/* Arrows */}
						<div className="flex items-center gap-3">
							<button
								onClick={scrollPrev}
								disabled={!canPrev}
								className={`
                      h-12 w-12 rounded-2xl flex items-center justify-center
                      bg-emerald-900 shadow-sm transition
                      disabled:opacity-40 disabled:cursor-not-allowed
                      hover:opacity-95
                    `}
								aria-label="Previous testimonial"
							>
								<ArrowIcon dir="left" />
							</button>

							<button
								onClick={scrollNext}
								disabled={!canNext}
								className={`
                      h-12 w-12 rounded-2xl flex items-center justify-center
                      bg-yellow-600 shadow-sm transition
                      disabled:opacity-40 disabled:cursor-not-allowed
                      hover:opacity-95
                    `}
								aria-label="Next testimonial"
							>
								<ArrowIcon dir="right" />
							</button>
						</div>

						{/* Dots */}
						<div className="flex items-center gap-2">
							{snaps.map((i) => (
								<button
									key={i}
									onClick={() => scrollTo(i)}
									className={`rounded-full transition ${
										i === selectedIndex
											? "h-5 w-5 bg-green-600"
											: "h-4 w-4 bg-zinc-400 hover:bg-zinc-500"
									}`}
									aria-label={`Go to testimonial ${i + 1}`}
								/>
							))}
						</div>
					</div>
				</div>
				{/* end slider */}
			</div>
		</div>
	);
}
