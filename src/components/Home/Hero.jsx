import React from "react";
import { IMAGES } from "../../assets/images";
import SectionHeading from "../SectionHeading";

function TickBadge({ className = "" }) {
	return (
		<span
			className={`
        inline-flex items-center justify-center w-8 h-8
        sm:w-[54px] sm:h-[54px]
        ${className}
      `}
			aria-hidden="true"
		>
			<img src={IMAGES.Green_Right} alt="" className="sm:w-[45px] h-[45px]" />
		</span>
	);
}

export default function Hero({
	bgImage,
	title,
	points = [],
	ctaText,
	ctaHref,
	onCtaClick,
}) {
	const handleCta = (e) => {
		if (onCtaClick) {
			e.preventDefault();
			onCtaClick();
		}
	};

	return (
		<section
			className="
    relative w-full overflow-hidden
    h-[62svh] sm:h-[68svh] lg:h-[900px]
    min-h-[500px] sm:min-h-[560px] lg:min-h-[900px]
  "
		>
			<div className="absolute inset-0">
				<img
					src={bgImage}
					alt=""
					className="
      block
      w-full h-full
      object-cover
      object-[70%_center]
      lg:object-center
    "
					loading="eager"
					decoding="async"
				/>
			</div>
			{/* MOBILE overlay – POSITION UNCHANGED */}
			<div className="sm:hidden absolute -left-[145px] top-[120px] w-[596px] h-[500px]">
				<svg
					viewBox="0 0 390 500"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="absolute left-0 top-0 w-[596px] h-[500px]"
					aria-hidden="true"
				>
					<path
						d="M-175 23.2548C-175 10.4115 -164.588 0 -151.745 0H338.656C350.374 0 360.261 8.71786 361.728 20.3431L417.698 463.833C419.451 477.722 408.625 490 394.626 490H-151.745C-164.588 490 -175 479.588 -175 466.745V23.2548Z"
						fill="url(#mGrad)"
					/>
					<defs>
						<linearGradient
							id="mGrad"
							x1="327.462"
							y1="49.6159"
							x2="-23.3257"
							y2="354.502"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="white" stopOpacity="0.9" />
							<stop offset="1" stopColor="white" />
						</linearGradient>
					</defs>
				</svg>

				<div className="absolute left-[160px] top-[42px] flex flex-col items-start gap-5 w-[300px]">
					<p className="text-[#024F2D] text-[28px] leading-[1.1] w-full">
						<SectionHeading title={title} />
					</p>

					<div className="flex flex-col items-start gap-2 w-full">
						{points.map((text, idx) => (
							<div
								key={idx}
								className="flex items-center gap-3 sm:gap-4 w-full"
							>
								<TickBadge />

								<p
									className="
      text-black font-medium
      text-[16px] sm:text-[24px] lg:text-[34px]
      
    "
								>
									{text}
								</p>
							</div>
						))}
					</div>

					<a
						href={ctaHref}
						onClick={handleCta}
						className="text-[#D69212] text-2xl  font-bold"
					>
						{ctaText}
					</a>
				</div>
			</div>

			{/* TABLET + DESKTOP overlay – POSITION UNCHANGED */}
			<svg
				viewBox="0 0 1047 716"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="
          hidden sm:block absolute pointer-events-none
          left-0 bottom-0
          w-[120vw] h-auto
          sm:left-0 sm:top-1/2 sm:-translate-y-1/2 sm:bottom-auto sm:w-[1020px]
          lg:-left-[165px] lg:top-[265px] lg:translate-y-0 lg:w-[1217px]
        "
				aria-hidden="true"
			>
				<path
					d="M-165 30.5513C-165 13.6783 -151.322 0 -134.449 0H900.093C914.919 0 927.605 10.6445 930.18 25.2452L1045.68 680.143C1048.98 698.849 1034.58 716 1015.59 716H-134.449C-151.322 716 -165 702.322 -165 685.449V30.5513Z"
					fill="url(#homeHeroGrad)"
				/>
				<defs>
					<linearGradient
						id="homeHeroGrad"
						x1="861"
						y1="72.5"
						x2="353"
						y2="689.5"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="white" stopOpacity="0.9" />
						<stop offset="1" stopColor="white" />
					</linearGradient>
				</defs>
			</svg>

			<div
				className="
          hidden sm:flex absolute
          left-5 bottom-8 w-[88%]
          sm:left-10 sm:top-1/2 sm:-translate-y-[42%] sm:bottom-auto sm:w-[640px]
          lg:left-[120px] lg:top-[346px] lg:translate-y-0 lg:w-[747px]
          flex-col items-start gap-6 sm:gap-7 lg:gap-8
        "
			>
				<h1 className="font-bold leading-[1.05] text-[#024F2D] text-[28px] sm:text-[46px] lg:text-[64px]">
					{title}
				</h1>

				<div className="flex flex-col items-center gap-3 w-full lg:w-[668px]">
					{points.map((text, idx) => (
						<div key={idx} className="flex items-center gap-3 sm:gap-4 w-full">
							<TickBadge />

							<p
								className="
      text-black font-medium
      text-[16px] sm:text-[24px] lg:text-[34px]
      
    "
							>
								{text}
							</p>
						</div>
					))}
				</div>

				<a
					href={ctaHref}
					onClick={handleCta}
					className="font-bold text-[#D69212] text-[18px] sm:text-[26px] lg:text-[32px] "
				>
					{ctaText}
				</a>
			</div>
		</section>
	);
}
