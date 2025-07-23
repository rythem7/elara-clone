"use client";

import Image from "next/image";
import img from "@/assets/images/city.jpg";
import Heading from "./Heading";
import CardText from "@/ui/CardText";
import { motion } from "framer-motion";
import { absCenter } from "@/utility/u-text";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Section2() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    const translateY = useTransform(
        scrollYProgress,
        [0, 0.3, 0.6, 1],
        [-500, 0, 0, -200]
    );
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.25, 0.6, 0.8],
        [0, 0.98, 0.98, 0]
    );
    return (
        <motion.div
            ref={containerRef}
            style={{ opacity }}
            className="relative h-[200vh] snap-start mt-[-15rem] pb-[10rem]"
        >
            <motion.div className="sticky top-0 w-screen h-screen">
                <motion.div
                    style={{ translateY }}
                    className={`w-[20rem] ${absCenter}`}
                >
                    <Heading />
                    <CardText
                        title="A Symphony of Elegance"
                        text="Every piece in the Eclipse Collection is a celebration of
				timeless artistry, blending exquisite materials with modern
				sophistication."
                        themeType="light"
                    />
                    <Image
                        src={img}
                        alt="Image"
                        className="object-cover rounded-xl mt-3"
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Section2;
