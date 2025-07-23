// components/header/ForegroundHeadings.jsx
import { motion } from "framer-motion";

export default function ForegroundHeadings({
	scaleImg,
	bigHeadingX,
	bigHeadingOpacity,
	opacityShortHeading,
	scaledWidth,
	className,
	filterBlur,
}) {
	return (
		<motion.div
			style={{ width: scaledWidth }}
			className={`w-[10rem] h-[25rem] z-25 bg-transparent rounded-box overflow-hidden ${className} transform-gpu origin-center`}
		>
			<motion.h1
				style={{ opacity: opacityShortHeading, filter: filterBlur }}
				className={`text-3xl text-white font-bold pointer-events-none ${className}`}
			>
				Where Luxury Finds Its True Form
			</motion.h1>
			<motion.h1
				style={{
					scale: scaleImg,
					x: bigHeadingX,
					opacity: bigHeadingOpacity,
				}}
				className={`text-9xl text-white font-bold pointer-events-none ${className} transform-gpu will-change-auto`}
			>
				Designed to be admired, crafted to be remembered!
			</motion.h1>
		</motion.div>
	);
}
