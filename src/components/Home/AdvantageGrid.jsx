import React from "react";
import Container from "../Container";

export default function AdvantageGrid({ advantages, title, subtitle, bg }) {
	return (
		<Container className="relative flex flex-col items-center gap-[90px]">
			{/* Decorative SVG background */}
			<svg
				width="1276"
				height="1104"
				viewBox="0 0 1276 1104"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="absolute -right-[10px] -bottom-44 opacity-40 w-[1411px] h-[1104px] pointer-events-none"
			>
				<path
					opacity="0.4"
					d="M528.995 0.75H882.396C905.238 0.755375 927.562 7.55514 946.527 20.2842C965.493 33.0134 980.244 51.0968 988.903 72.2334L1048.52 218.212L1139.53 440.906L1234.14 672.366L1319.99 882.402V882.403L1320.43 883.539L1320.44 883.551L1410.28 1103.34H1094.82L1004.31 881.848L1004.12 881.381H488.638C465.253 881.39 442.4 888.356 422.986 901.394C403.573 914.431 388.478 932.95 379.622 954.593V954.594L318.826 1103.31H1.11621L90.8965 883.521L130.294 787.211V787.21L180.967 663.256H914.943L914.521 662.222L818.889 428.254C811.129 409.274 797.894 393.034 780.87 381.604C763.846 370.173 743.805 364.07 723.3 364.072H303.228L362.757 218.463L422.504 72.2334C431.147 51.0888 445.891 32.9968 464.857 20.2656C483.527 7.73336 505.455 0.954782 527.925 0.754883L528.995 0.75Z"
					stroke="#3D8C58"
					strokeWidth="1.5"
				/>
			</svg>

			{/* Heading */}
			<div className="flex flex-col items-center lg:items-start gap-4 w-full text-center lg:text-left">
				<p className="text-[#3D8C58] font-henju text-base font-medium tracking-[0.12em]">
					{title}
				</p>
				<p className="text-[#FFF] font-henju text-4xl sm:text-5xl lg:text-[54px] font-bold leading-tight">
					{subtitle}
				</p>
			</div>

			{/* Advantages List */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 w-full justify-items-center">
				{advantages.map((adv, i) => (
					<div
						key={i}
						className="flex flex-col items-start gap-4 w-full max-w-[544px]"
					>
						{/* Icon */}

						<img
							src={adv.icon}
							alt={adv.title}
							className="w-16 h-16 object-contain"
						/>

						{/* Text */}
						<div className="flex flex-col gap-2.5">
							<p className="text-[#FFF] font-henju text-2xl sm:text-[28px] lg:text-[34px] font-medium">
								{adv.title}
							</p>
							<p className="text-[#F5F5F5] font-henju text-lg sm:text-xl lg:text-2xl leading-7 sm:leading-8 lg:leading-9">
								{adv.desc}
							</p>
						</div>
					</div>
				))}
			</div>
		</Container>
	);
}
