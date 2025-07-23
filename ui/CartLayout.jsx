import React from "react";
import Image from "next/image";
import one from "@/assets/images/1.jpg";

function CartLayout({ children, img }) {
	return (
		<div className="flex items-end p-[2rem] w-[17rem] lg:w-[25rem] aspect-[43/50] relative">
			<div className="absolute h-full w-full object-cover top-0 left-0">
				<Image
					src={one}
					alt="Image"
					className="w-full h-full rounded-xl"
				/>
			</div>
			{children}
		</div>
	);
}

export default CartLayout;
