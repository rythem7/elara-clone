"use client";

// components/header/BackgroundHeadings.jsx
import { motion } from "framer-motion";

export default function BackgroundHeadings({
	scaleImg,
	bigHeadingX,
	bigHeadingOpacity,
	opacityShortHeading,
	filterBlur,
	className,
}) {
	return (
		<>
			<motion.h1
				style={{
					opacity: opacityShortHeading,
					filter: filterBlur,
				}}
				className={`text-3xl z-10 font-bold pointer-events-none ${className}`}
			>
				Where Luxury Finds Its True Form
			</motion.h1>
			<motion.h1
				style={{
					x: bigHeadingX,
					opacity: bigHeadingOpacity,
					scale: scaleImg,
				}}
				className={`text-9xl z-10 font-bold pointer-events-none transform-gpu ${className}`}
			>
				Designed to be admired, crafted to be remembered!
			</motion.h1>
		</>
	);
}
