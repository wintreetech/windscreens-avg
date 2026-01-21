import React from "react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { ArrowUpRight } from "lucide-react";

const ServiceCard = ({ title, imageUrl, colSpan }) => (
	<div className={`flex flex-col gap-4 ${colSpan}`}>
		{/* Image */}
		<div className="relative h-[320px] sm:h-[360px] lg:h-[397px] overflow-hidden rounded-3xl bg-white">
			<img
				src={imageUrl}
				alt={title}
				className="absolute inset-0 w-full h-full object-cover scale-[1.1]"
			/>
		</div>

		{/* Title */}
		<div className="flex items-start justify-between gap-4 pl-4">
			<h3 className="text-[28px] sm:text-[32px] font-medium text-black leading-tight">
				{title}
			</h3>

			<div className="shrink-0 h-12 w-12 rounded-xl bg-green-600 flex items-center justify-center p-3">
				<ArrowUpRight className=" text-white" />
			</div>
		</div>
	</div>
);

export default function ServicesGrid() {
	const services = [
		// 🔹 Row 1 (3 items)
		{
			title: "Windscreen Chip Repair",
			imageUrl: "https://placehold.co/710x473",
			colSpan: "col-span-12 md:col-span-4",
		},
		{
			title: "Windscreen Replacement",
			imageUrl: "https://placehold.co/656x442",
			colSpan: "col-span-12 md:col-span-4",
		},
		{
			title: "ADAS Calibration",
			imageUrl: "https://placehold.co/666x444",
			colSpan: "col-span-12 md:col-span-4",
		},

		// 🔹 Row 2 (2 items)
		{
			title: "Body Glass Replacement",
			imageUrl: "https://placehold.co/931x620",
			colSpan: "col-span-12 md:col-span-6",
		},
		{
			title: "Mobile Wing Mirror Replacement",
			imageUrl: "https://placehold.co/868x447",
			colSpan: "col-span-12 md:col-span-6",
		},
	];

	return (
		<Container className="flex flex-col items-center gap-[42px]">
			<SectionHeading
				kicker="Our Services"
				align="center"
				title={
					<>
						<span className="text-emerald-900">
							AVG Windscreens provide a mobile vehicle glass repair and
							replacement service for{" "}
						</span>
						<span className="text-green-600">
							all types of vehicles on the next working day anywhere in the
							country
						</span>
					</>
				}
			/>

			<div className="grid grid-cols-12 gap-10 w-full">
				{services.map((service) => (
					<ServiceCard key={service.title} {...service} />
				))}
			</div>
		</Container>
	);
}
