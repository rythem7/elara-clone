"use client";

import React from "react";
import { motion } from "framer-motion";

function BtnBrdrlessUline({ label, themeType = "light", textClass = "" }) {
	return (
		<motion.div
			role="button"
			className={`relative cursor-pointer select-none ${textClass} w-fit ${
				themeType === "dark" ? "text-white" : "text-black"
			}`}
			initial="rest"
			whileHover="hover"
			animate="rest"
		>
			{label} &rarr;
			<motion.div
				className={`absolute left-0 bottom-[0.5px] h-[1px] ${
					themeType === "dark" ? "bg-white" : "bg-black"
				}`}
				variants={{
					rest: { width: 0 },
					hover: { width: "100%" },
				}}
				transition={{ duration: 0.3, ease: "easeOut" }}
			/>
		</motion.div>
	);
}

export default BtnBrdrlessUline;
