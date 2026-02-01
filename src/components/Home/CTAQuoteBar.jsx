import React from "react";
import Container from "../Container";
import Button from "../Button";
import SectionHeading from "../SectionHeading";

export default function CTAQuoteBar({ title, kicker }) {
	return (
		<Container className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
			<div className="max-w-2xl">
				<SectionHeading align="left" kicker={kicker} title={title} />
			</div>

			<Button variant="secondary">Get A Quote Now</Button>
		</Container>
	);
}
