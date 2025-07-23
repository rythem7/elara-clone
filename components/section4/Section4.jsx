import React from "react";
import CartLayout from "@/ui/CartLayout";
import CardText from "@/ui/CardText";

function Section4() {
	return (
		<div className="p-10 flex flex-col lg:flex-row lg:justify-center justify-center items-center gap-2 h-screen snap-start">
			<CartLayout>
				<CardText
					title="Rings"
					text="Lightweight, comfortable, and expertly crafted to add sophistication to any look."
					themeType="dark"
					width="w-[90%]"
					btnTextClass="text-xs"
				/>
			</CartLayout>
			<CartLayout>
				<CardText
					title="Necklaces"
					text="Designed to stand out, premium metals and timeless designs for effortless luxury."
					themeType="dark"
					width="w-[90%]"
					btnTextClass="text-xs"
				/>
			</CartLayout>
		</div>
	);
}

export default Section4;
