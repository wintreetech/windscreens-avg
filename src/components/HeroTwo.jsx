import React from "react";
import { IMAGES } from "../assets/images";

export default function HeroTwo({
	bgImage,
	breadcrumb,
	title,
	topOffset = 98,
}) {
	return (
		<section className=" relative w-full overflow-hidden h-[32vh] sm:h-[45vh] lg:h-[50vh] min-h-[200px] sm:min-h-[320px] lg:min-h-[420px] max-h-[300px] sm:max-h-[460px] lg:max-h-[600px] ">
			{/* Background */}
			<img
				src={bgImage}
				alt="header"
				className="absolute inset-0 w-full h-full object-cover object-[60%_top] sm:object-center"
			/>
			<div className="absolute inset-0 bg-black/10" />

			{/* SVG:
          - Mobile: flush to LEFT (left-0) and bottom-aligned (bottom-0)
          - sm+: keep your existing placement
      */}
			<svg
				viewBox="0 0 1075 583"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className=" hidden sm:block 
          absolute
          left-0 bottom-0
          sm:left-6 sm:bottom-auto sm:top-16
          lg:left-16 lg:top-36
          w-[78vw] sm:w-[640px] lg:w-[1087px]
          h-auto
          pointer-events-none
        "
				aria-hidden="true"
			>
				<path
					d="M0 30.5513C0 13.6783 13.6783 0 30.5513 0H865.531C878.589 0 890.204 8.29958 894.435 20.6538L1073.15 542.551C1079.94 562.379 1065.2 583 1044.25 583H30.5513C13.6782 583 0 569.322 0 552.449V30.5513Z"
					fill="url(#overlayGrad)"
				/>
				<defs>
					<linearGradient
						id="overlayGrad"
						x1="834.702"
						y1="59.0328"
						x2="308.721"
						y2="391.059"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="white" stopOpacity="0.88" />
						<stop offset="1" stopColor="white" stopOpacity="0.98" />
					</linearGradient>
				</defs>
			</svg>

			<img
				src={IMAGES.MobileRectangle} // your mobile image file
				alt=""
				aria-hidden="true"
				className="
    block        // show on mobile
    sm:hidden    // hide on tablet/desktop
   absolute
          left-0 bottom-0
          
          w-[78vw]
          h-auto
          pointer-events-none
  "
			/>

			{/* Content:
          - Mobile: positioned relative to bottom-aligned SVG
          - sm+: your existing placement
      */}
			<div
				className="
          absolute
          left-6 bottom-10
          sm:left-10 sm:bottom-auto sm:top-24
          lg:left-[120px] lg:top-[200px]
          flex flex-col items-start
          gap-2 sm:gap-4
          w-[62vw] sm:w-[420px] lg:w-[890px]
        "
			>
				{/* Breadcrumb */}
				<div className="flex flex-wrap items-center gap-x-2 gap-y-1">
					{breadcrumb.map((item, i) => {
						const isLast = i === breadcrumb.length - 1; // last item = current page
						return (
							<span
								key={i}
								className={`${i > 1 ? "hidden sm:inline" : "inline"} ${isLast ? "font-bold" : ""}`}
							>
								{item.href && !isLast ? (
									<a href={item.href} className="hover:underline">
										{item.label}
									</a>
								) : (
									item.label
								)}
								{i < breadcrumb.length - 1 && " / "}
							</span>
						);
					})}
				</div>

				{/* Title */}
				<h1
					className="
            text-[#3D8C58] font-henju font-bold leading-[1.05]
            text-[22px] sm:text-[38px] lg:text-[64px]
            max-w-[220px] sm:max-w-[420px] lg:max-w-none
          "
				>
					{title}
				</h1>
			</div>
		</section>
	);
}
