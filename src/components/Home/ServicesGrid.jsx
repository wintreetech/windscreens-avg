import React from "react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { ArrowUpRight } from "lucide-react";

const ServiceCard = ({ title, imageUrl, colSpan }) => (
	<div className={`flex flex-col gap-4 ${colSpan}`}>
		{/* Image */}
		<div className="relative h-[320px] sm:h-[360px] lg:h-[397px] overflow-hidden  bg-white">
			<img
				src={imageUrl}
				alt={title}
				className="absolute inset-0 w-full h-full object-cover scale-[1.1]"
			/>
		</div>

		{/* Title */}
		<div className="flex items-start justify-between gap-4 pl-4">
			<h3 className="sm:text-[28px] text-[32px] font-medium text-black leading-tight">
				{title}
			</h3>

			<div className="shrink-0 h-10 w-10 bg-[#3D8C58] flex items-center justify-center p-3">
				<ArrowUpRight className="w-6 h-6 text-white" />
			</div>
		</div>
	</div>
);

export default function ServicesGrid({ services }) {
	return (
		<Container className="flex flex-col items-center gap-[42px]">
			<SectionHeading
				kicker="Our Services"
				align="center"
				title={
					<>
						<span className="text-[#024F2D]">
							AVG Windscreens provide a mobile vehicle glass repair and
							replacement service for{" "}
						</span>
						<span className="text-[#3D8C58]">
							all types of vehicles on the next working day anywhere in the
							country
						</span>
					</>
				}
			/>

			<div className="grid grid-cols-12 gap-6 w-full">
				{services.map((service) => (
					<ServiceCard key={service.id} {...service} />
				))}
			</div>
		</Container>
	);
}
