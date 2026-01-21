import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function GReviews() {
	const reviews = [
		{
			text: "What great service! Quick, easy and fantastic value for money. Big Dave came to replace my windscreen the very next day, explained everything clearly and did an excellent job. Will certainly use again.",
			name: "Heidi Sellick",
			time: "3 weeks ago",
		},
		{
			text: "Highly recommend. Rear heated window replaced quickly and professionally. Kept up to date with arrival time and the price was far better than other quotes I received.",
			name: "Ryan K",
			time: "1 month ago",
		},
		{
			text: "Ryan arrived on time and repaired my broken windscreen professionally. Very tidy work and great attention to detail. Excellent service from start to finish.",
			name: "Charles",
			time: "2 weeks ago",
		},
		{
			text: "Ryan arrived on time and repaired my broken windscreen professionally. Very tidy work and great attention to detail. Excellent service from start to finish.",
			name: "Charles",
			time: "2 weeks ago",
		},
		{
			text: "Ryan arrived on time and repaired my broken windscreen professionally. Very tidy work and great attention to detail. Excellent service from start to finish.",
			name: "Charles",
			time: "2 weeks ago",
		},
		{
			text: "Ryan arrived on time and repaired my broken windscreen professionally. Very tidy work and great attention to detail. Excellent service from start to finish.",
			name: "Charles",
			time: "2 weeks ago",
		},
		{
			text: "Ryan arrived on time and repaired my broken windscreen professionally. Very tidy work and great attention to detail. Excellent service from start to finish.",
			name: "Charles",
			time: "2 weeks ago",
		},
		{
			text: "Ryan arrived on time and repaired my broken windscreen professionally. Very tidy work and great attention to detail. Excellent service from start to finish.",
			name: "Charles",
			time: "2 weeks ago",
		},
	];

	return (
		<section className="bg-[#F5F5F5] py-32">
			<div className="max-w-7xl mx-auto px-6">
				{/* HEADER */}
				<div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">
					<div>
						<h2 className="text-[#024F2D] font-henju text-4xl sm:text-5xl mb-4">
							Customer reviews on Google
						</h2>

						<div className="flex items-center gap-3">
							<Stars />
							<p className="text-[#1A1A1A] font-henju text-lg">
								5.0 rating of 12 reviews
							</p>
						</div>
					</div>

					<button className="bg-[#024F2D] text-white font-henju px-6 py-4">
						Leave a Review
					</button>
				</div>

				{/* SLIDER */}
				<Swiper
					modules={[Autoplay, Pagination]}
					spaceBetween={24}
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
					}}
					pagination={{ clickable: true }}
					breakpoints={{
						0: { slidesPerView: 1 },
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
				>
					{reviews.map((review, index) => (
						<SwiperSlide key={index}>
							<div className="bg-white p-6 flex flex-col gap-6 h-full">
								<div className="flex justify-between items-center">
									<Stars />
									<GoogleIcon />
								</div>

								<p className="font-henju text-black text-lg leading-7">
									{review.text}
								</p>

								<div className="flex items-center gap-3 mt-auto">
									<div className="w-9 h-9 rounded-full bg-[#024F2D] flex items-center justify-center text-white font-henju">
										{review.name.charAt(0)}
									</div>

									<div>
										<p className="font-henju text-black">{review.name}</p>
										<p className="text-xs text-black">{review.time}</p>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}

/* -------------------- */
/* HELPER COMPONENTS   */
/* -------------------- */

function Stars() {
	return (
		<div className="flex gap-1">
			{Array.from({ length: 5 }).map((_, i) => (
				<svg key={i} viewBox="0 0 20 20" fill="#FFC107" className="w-5 h-5">
					<path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
				</svg>
			))}
		</div>
	);
}

function GoogleIcon() {
	return (
		<svg viewBox="0 0 48 48" className="w-8 h-8">
			<path
				fill="#FFC107"
				d="M43.611 20.083H42V20H24v8h11.303C33.629 32.045 29.164 35 24 35c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.957 3.043l5.657-5.657C34.125 4.152 29.304 2 24 2 12.955 2 4 10.955 4 22s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
			/>
			<path
				fill="#FF3D00"
				d="M6.306 14.691l6.571 4.819C14.655 16.108 19.01 13 24 13c3.059 0 5.842 1.154 7.957 3.043l5.657-5.657C34.125 4.152 29.304 2 24 2 16.318 2 9.656 6.337 6.306 14.691z"
			/>
			<path
				fill="#4CAF50"
				d="M24 42c5.165 0 9.986-1.977 13.571-5.197l-6.271-5.298C29.192 33.091 26.715 34 24 34c-5.134 0-9.482-3.032-11.013-7.357l-6.49 5.002C9.823 38.556 16.387 42 24 42z"
			/>
			<path
				fill="#1976D2"
				d="M43.611 20.083H42V20H24v8h11.303c-1.01 2.852-3.059 5.201-5.768 6.732l.003-.002 6.271 5.298C34.345 37.021 44 30 44 22c0-1.341-.138-2.65-.389-3.917z"
			/>
		</svg>
	);
}
