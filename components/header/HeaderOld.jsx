"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import img from "@/assets/images/black-bg.jpg";
import imgInv from "@/assets/images/img-inv.jpg";
import { absCenter as absolutCntr } from "@/utility/u-text";
import MainImg from "./MainImg";
function Header() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	// Map scroll progress to animation values
	const y = useTransform(scrollYProgress, [0, 0.5], [200, 0]);
	const scaleImg = useTransform(scrollYProgress, [0.2, 0.6], [1, 1.3]);
	const scaleText = useTransform(scaleImg, (val) => 1 / val);

	const opacityShortHeading = useTransform(
		scrollYProgress,
		[0, 0.2, 0.3],
		[1, 0.9, 0]
	);
	const shortHeadingBlur = useTransform(scrollYProgress, [0.2, 0.3], [0, 10]);
	const bigHeadingX = useTransform(
		scrollYProgress,
		[0.225, 0.3, 0.7],
		[2300, 2000, -3000]
	);
	const bigHeadingOpacity = useTransform(
		scrollYProgress,
		[0.2, 0.27],
		[0, 1]
	);

	return (
		<section ref={ref} className="h-[500vh] mt-[-4rem] relative">
			<div className="sticky top-0 h-screen w-screen text-nowrap overflow-hidden">
				<motion.div
					style={{ scale: scaleImg }}
					className={`w-[10rem] aspect-[3/4] rounded-box overflow-hidden ${absolutCntr} transform-gpu origin-center`}
				>
					<MainImg />
					<motion.h1
						style={{
							opacity: opacityShortHeading,
							scale: scaleText,
						}}
						className={`text-3xl text-white font-bold pointer-events-none ${absolutCntr}`}
					>
						Where Luxury Finds Its True Form
					</motion.h1>
					<motion.h1
						style={{
							x: bigHeadingX,
							opacity: bigHeadingOpacity,
						}}
						className={`${absolutCntr} z-10 text-9xl text-white font-bold pointer-events-none`}
					>
						Designed to be admired, crafted to be remembered!
					</motion.h1>
				</motion.div>

				{/* <motion.div
					style={{ scale: scaleImg }}
					className={`w-[10rem] aspect-[3/4] rounded-box overflow-hidden ${absolutCntr}`}
				></motion.div> */}

				<motion.h1
					style={{
						// scale: scaleImg,
						opacity: opacityShortHeading,
					}}
					className={`text-3xl z-[-20] font-bold pointer-events-none ${absolutCntr}`}
				>
					Where Luxury Finds Its True Form
				</motion.h1>

				<motion.h1
					style={{
						x: bigHeadingX,
						opacity: bigHeadingOpacity,
						scale: scaleImg,
					}}
					className={`${absolutCntr} text-9xl font-bold pointer-events-none`}
				>
					Designed to be admired, crafted to be remembered!
				</motion.h1>
			</div>
		</section>
	);
}

export default Header;
