import React from "react";
import Container from "../Container";
import Button from "../Button";

export default function CTAQuoteBar() {
	return (
		<section className="bg-[#024F2D]">
			<Container className="py-16 sm:py-20 lg:py-30 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
				<div className="max-w-2xl">
					<p className="text-white text-sm font-medium uppercase tracking-widest">
						Get a Quote
					</p>
					<h3 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
						Need a quote for your vehicle glass requirement?
					</h3>
				</div>

				<Button variant="secondary">Get A Quote Now</Button>
			</Container>
		</section>
	);
}
