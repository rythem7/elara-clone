// components/header/AnimatedImage.jsx
import { motion } from "framer-motion";
import Image from "next/image";
import one from "@/assets/images/1.jpg";

export default function AnimatedImage({ scale, imgRef, className }) {
	return (
		<motion.div
			ref={imgRef}
			style={{ scale }}
			className={`w-[10rem] aspect-[3/4] rounded-box overflow-hidden ${className} transform-gpu origin-center`}
		>
			<Image
				src={one}
				alt="hero"
				className={`object-cover w-full h-full rounded-box`}
			/>
		</motion.div>
	);
}
