"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef, useLayoutEffect, useEffect, useState } from "react";
import { absCenter as absolutCntr } from "@/utility/u-text";
import { motion } from "framer-motion";
import ScrollSectionWrapper from "./ScrollSectionWrapper";
import AnimatedImage from "./AnimatedImg";
import ForegroundHeadings from "./ForegroundHeadings";
// import BackgroundHeadings from "./BackgroundHeadings";

function Header() {
	const ref = useRef(null);
	const imgRef = useRef(null);
	const [baseWidth, setBaseWidth] = useState(0);
	const [filterBlur, setFilterBlur] = useState("blur(0px)");

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	useLayoutEffect(() => {
		if (imgRef.current) {
			setBaseWidth(imgRef.current.offsetWidth);
		}
	}, []);

	const scaleImg = useTransform(scrollYProgress, [0.3, 0.6], [1, 1.4]);
	const scaledWidth = useTransform(scaleImg, (s) => baseWidth * s);

	const opacityShortHeading = useTransform(
		scrollYProgress,
		[0, 0.2, 0.35],
		[1, 0.9, 0]
	);
	const shortHeadingBlur = useTransform(scrollYProgress, [0.2, 0.35], [0, 7]);

	useEffect(() => {
		if (!shortHeadingBlur) return;

		const unsubscribe = shortHeadingBlur.on("change", (v) => {
			setFilterBlur(`blur(${v}px)`);
		});

		return () => unsubscribe();
	}, [shortHeadingBlur]);
	const bigHeadingX = useTransform(
		scrollYProgress,
		[0.225, 0.3, 0.7],
		[2300, 2000, -4000]
	);
	const bigHeadingOpacity = useTransform(
		scrollYProgress,
		[0.2, 0.27],
		[0, 1]
	);

	return (
		<ScrollSectionWrapper sectionRef={ref}>
			<AnimatedImage
				scale={scaleImg}
				imgRef={imgRef}
				className={absolutCntr}
			/>

			<ForegroundHeadings
				scaleImg={scaleImg}
				bigHeadingX={bigHeadingX}
				bigHeadingOpacity={bigHeadingOpacity}
				opacityShortHeading={opacityShortHeading}
				scaledWidth={scaledWidth}
				className={`${absolutCntr}`}
				shortHeadingBlur={shortHeadingBlur}
				filterBlur={filterBlur}
			/>

			<>
				<motion.h1
					style={{
						opacity: opacityShortHeading,
						filter: filterBlur,
					}}
					className={`text-3xl z-9 font-bold pointer-events-none ${absolutCntr}`}
				>
					Where Luxury Finds Its True Form
				</motion.h1>
				<motion.h1
					style={{
						x: bigHeadingX,
						opacity: bigHeadingOpacity,
						scale: scaleImg,
					}}
					className={`text-9xl z-10 font-bold pointer-events-none transform-gpu ${absolutCntr} will-change-auto`}
				>
					Designed to be admired, crafted to be remembered!
				</motion.h1>
			</>
		</ScrollSectionWrapper>
	);
}

export default Header;
