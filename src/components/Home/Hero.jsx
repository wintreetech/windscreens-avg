import React from "react";

function TickBadge({ className = "" }) {
	return (
		<span className={`relative inline-block ${className}`} aria-hidden="true">
			{/* green badge */}
			<svg viewBox="0 0 27 27" className="absolute inset-0 w-full h-full">
				<path
					d="M11.4013 0.87113C12.4592 -0.290377 14.2866 -0.290377 15.3445 0.87113L16.7048 2.36477C17.2393 2.9518 18.0077 3.27006 18.8009 3.233L20.8189 3.13869C22.3881 3.06534 23.6805 4.35765 23.6072 5.92694L23.5128 7.94496C23.4757 8.73806 23.794 9.50644 24.381 10.041L25.8746 11.4013C27.0362 12.4592 27.0362 14.2866 25.8746 15.3445L24.381 16.7048C23.794 17.2393 23.4757 18.0077 23.5128 18.8009L23.6072 20.8189C23.6805 22.3881 22.3881 23.6805 20.8189 23.6072L18.8009 23.5128C18.0077 23.4757 17.2393 23.794 16.7048 24.381L15.3445 25.8746C14.2866 27.0362 12.4592 27.0362 11.4013 25.8746L10.041 24.381C9.50644 23.794 8.73806 23.4757 7.94496 23.5128L5.92693 23.6072C4.35765 23.6805 3.06534 22.3881 3.13869 20.8189L3.233 18.8009C3.27006 18.0077 2.9518 17.2393 2.36477 16.7048L0.87113 15.3445C-0.290377 14.2866 -0.290377 12.4592 0.87113 11.4013L2.36477 10.041C2.9518 9.50644 3.27006 8.73806 3.233 7.94496L3.13869 5.92693C3.06534 4.35765 4.35765 3.06534 5.92694 3.13869L7.94496 3.233C8.73806 3.27006 9.50644 2.9518 10.041 2.36477L11.4013 0.87113Z"
					fill="#3D8C58"
				/>
			</svg>

			{/* check */}
			<svg
				viewBox="0 0 14 10"
				className="absolute left-[32%] top-[38%] w-[44%] h-[44%]"
			>
				<path
					d="M0.888672 4.64275L4.64275 8.39682L12.1509 0.888672"
					stroke="white"
					strokeWidth="1.77778"
					strokeLinecap="round"
					strokeLinejoin="round"
					fill="none"
				/>
			</svg>
		</span>
	);
}

export default function Hero({
	bgImage = "/Hero (1).png",
	title = "Windscreen Replacement & Vehicle Glass Repair Specialists",
	points = [
		"Quick turnaround",
		"Nationwide Mobile Service",
		"Fleet-Focused Account Management",
	],
	ctaText = "Contact Us Now!",
	ctaHref = "/contact",
	topOffset = 139,
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
        h-[62vh] sm:h-[68vh] lg:h-[900px]
        min-h-[420px] sm:min-h-[560px] lg:min-h-[900px]
      "
		>
			{/* Background */}
			<img
				src={bgImage}
				alt="hero"
				className="absolute inset-0 w-full h-full object-cover object-right lg:object-center"
			/>

			{/* MOBILE overlay (matches your mobile reference EXACT layout) */}
			<div className="sm:hidden absolute -left-[175px] top-[339px] w-[596px] h-[490px]">
				<svg
					viewBox="0 0 390 490"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="absolute left-0 top-0 w-[596px] h-[490px]"
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

				<div className="absolute left-[199px] top-[42px] flex flex-col items-start gap-5 w-[325px]">
					<p className="text-[#024F2D] font-henju text-[28px] leading-[1.1] w-full">
						{title}
					</p>

					<div className="flex flex-col items-start gap-2 w-full">
						{points.slice(0, 2).map((t, idx) => (
							<div key={idx} className="flex items-center gap-2 w-fit">
								<TickBadge className="w-8 h-8" />
								<p className="text-black font-henju text-lg w-fit">{t}</p>
							</div>
						))}

						<div className="flex items-start gap-2 w-full">
							<TickBadge className="w-8 h-8 shrink-0" />
							<p className="text-black font-henju text-lg w-full">
								{points[2]}
							</p>
						</div>
					</div>

					<a
						href={ctaHref}
						onClick={handleCta}
						className="text-[#D69212] font-henju text-2xl w-[198px] h-[41px] flex flex-col justify-end"
					>
						{ctaText}
					</a>
				</div>
			</div>

			{/* TABLET + DESKTOP overlay (your already-perfect version) */}
			<svg
				viewBox="0 0 1047 716"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="
          hidden sm:block
          absolute pointer-events-none
          left-0 bottom-0
          w-[120vw] h-auto

          sm:left-0 sm:top-1/2 sm:-translate-y-1/2 sm:bottom-auto
          sm:w-[1020px]

          lg:-left-[165px] lg:top-[265px] lg:translate-y-0
          lg:w-[1217px]
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
          hidden sm:flex
          absolute
          left-5 bottom-8
          w-[88%]

          sm:left-10 sm:top-1/2 sm:-translate-y-[42%] sm:bottom-auto
          sm:w-[640px]

          lg:left-[120px] lg:top-[346px] lg:translate-y-0
          lg:w-[747px]

          flex-col items-start
          gap-6 sm:gap-7 lg:gap-8
        "
			>
				<h1 className="font-henju font-bold leading-[1.05] text-[#024F2D] text-[28px] sm:text-[46px] lg:text-[64px]">
					{title}
				</h1>

				<div className="flex flex-col items-start gap-3 w-full lg:w-[668px]">
					{points.map((text, idx) => (
						<div key={idx} className="flex items-center gap-3 sm:gap-4 w-full">
							<span className="relative inline-block w-10 h-10 sm:w-[54px] sm:h-[54px]">
								{/* reuse your big badge for sm+ */}
								<svg
									viewBox="0 0 46 46"
									className="absolute inset-0 w-full h-full"
								>
									<path
										d="M19.2397 1.47003C21.0248 -0.490011 24.1087 -0.490011 25.8938 1.47003L28.1893 3.99055C29.0913 4.98116 30.388 5.51823 31.7265 5.45568L35.1319 5.29654C37.7799 5.17277 39.9608 7.35353 39.8371 10.0017L39.6778 13.4071C39.6152 14.7455 40.1523 16.0421 41.143 16.9442L43.6634 19.2397C45.6236 21.0248 45.6236 24.1087 43.6634 25.8938L41.143 28.1893C40.1523 29.0913 39.6152 30.388 39.6778 31.7265L39.8371 35.1319C39.9608 37.7799 37.7799 39.9608 35.1319 39.8371L31.7265 39.6778C30.388 39.6152 29.0913 40.1523 28.1893 41.143L25.8938 43.6634C24.1087 45.6236 21.0248 45.6236 19.2397 43.6634L16.9442 41.143C16.0421 40.1523 14.7455 39.6152 13.4071 39.6778L10.0017 39.8371C7.35353 39.9608 5.17277 37.7799 5.29654 35.1319L5.45568 31.7265C5.51823 30.388 4.98116 29.0913 3.99055 28.1893L1.47003 25.8938C-0.490011 24.1087 -0.490011 21.0248 1.47003 19.2397L3.99055 16.9442C4.98116 16.0421 5.51823 14.7455 5.45568 13.4071L5.29654 10.0017C5.17277 7.35353 7.35353 5.17277 10.0017 5.29654L13.4071 5.45568C14.7455 5.51823 16.0421 4.98116 16.9442 3.99055L19.2397 1.47003Z"
										fill="#3D8C58"
									/>
								</svg>
								<svg
									viewBox="0 0 22 16"
									className="absolute left-[38%] top-[46%] w-[42%] h-[42%]"
								>
									<path
										d="M1.5 7.835L7.835 14.17L20.505 1.5"
										stroke="white"
										strokeWidth="3"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
									/>
								</svg>
							</span>

							<p className="text-black font-henju font-medium text-[16px] sm:text-[24px] lg:text-[34px]">
								{text}
							</p>
						</div>
					))}
				</div>

				<a
					href={ctaHref}
					onClick={handleCta}
					className="font-henju font-extrabold text-[#D69212] text-[18px] sm:text-[26px] lg:text-[32px] hover:underline underline-offset-4"
				>
					{ctaText}
				</a>
			</div>
		</section>
	);
}
