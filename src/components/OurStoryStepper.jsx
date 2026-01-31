import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import { stepsWhoWeAre } from "../data";

export default function OurStoryStepper() {
	const [activeIndex, setActiveIndex] = useState(0);
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	return (
		<>
			{/* ================= STEPPER ================= */}
			<div className="relative w-full my-[64px]">
				<div className="w-full border-t border-dotted border-[#B7B7B7]" />

				<div className="absolute -top-[16px] left-0 w-full flex justify-between">
					{stepsWhoWeAre.map((step, index) => {
						const isActive = index === activeIndex;

						return (
							<div
								key={index}
								className={`flex flex-col ${
									step.isMilestone ? "items-start" : "items-center"
								}`}
							>
								<p
									className={`font-henju text-sm whitespace-nowrap ${
										isActive ? "text-[#D69212]" : "text-[#B7B7B7]"
									}`}
								>
									{step.label ?? step.year}
								</p>

								<div
									className={`mt-2 w-[12px] h-[12px] rounded-full transition-colors ${
										isActive ? "bg-[#D69212]" : "bg-[#B7B7B7]"
									}`}
								/>
							</div>
						);
					})}
				</div>
			</div>

			{/* ================= SLIDER ================= */}
			<Swiper
				modules={[Navigation]}
				slidesPerView={1}
				onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
				onBeforeInit={(swiper) => {
					swiper.params.navigation.prevEl = prevRef.current;
					swiper.params.navigation.nextEl = nextRef.current;
				}}
				onInit={(swiper) => {
					swiper.navigation.init();
					swiper.navigation.update();
				}}
				navigation
			>
				{stepsWhoWeAre.map((step, index) => (
					<SwiperSlide key={index}>
						<div className="flex w-full items-center overflow-hidden">
							{/* ========== LEFT (50%) ========== */}
							<div className="w-1/2 pr-16 flex flex-col gap-6">
								<p className="text-[#024F2D] font-henju font-medium text-4xl">
									{step.title}
								</p>

								<p className="text-black text-lg">{step.description}</p>

								<p className="text-[#D69212] font-bold text-2xl">
									Speak to our team today: 0333 015 3883
								</p>
								{/* ================= NAVIGATION ================= */}
								<div className="flex gap-4 mb-12">
									<button
										ref={prevRef}
										type="button"
										className="p-3 border border-[#024F2D] rounded-full cursor-pointer"
									>
										<ArrowLeft className="text-[#024F2D]" />
									</button>

									<button
										ref={nextRef}
										type="button"
										className="p-3 bg-[#024F2D] rounded-full cursor-pointer"
									>
										<ArrowRight className="text-white" />
									</button>
								</div>
							</div>

							{/* ========== RIGHT (50%) ========== */}
							<div className="relative w-1/2 h-[564px] overflow-hidden">
								{/* Vertical Year */}
								<p
									className={`absolute top-1/2 -translate-y-1/2 
                  font-henju text-[160px] leading-none opacity-20 text-[#024F2D]
                  rotate-[-90deg] pointer-events-none select-none
                  ${index === 0 ? "left-0" : "-left-[120px]"}`}
								>
									{step.year}
								</p>

								{/* Image */}
								<div className="absolute right-0 top-0 w-[617px] h-[564px] overflow-hidden">
									<img
										src={step.image}
										alt={step.year}
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
