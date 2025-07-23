"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import one from "@/assets/images/1.jpg";
import two from "@/assets/images/2.jpg";
import three from "@/assets/images/3.jpg";
import four from "@/assets/images/4.jpg";
import five from "@/assets/images/5.jpg";

const images = [one, two, three, four, five];

export default function Spinner() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // const marginTop = useTransform(
    //     scrollYProgress,
    //     [0, 0.3, 0.6, 1],
    //     [-1500, -450, -300, 0]
    // );
    const scale = useTransform(
        scrollYProgress,
        [0, 0.3, 0.7, 1],
        [1, 1.2, 1.4, 10]
    );
    const opacity = useTransform(
        scrollYProgress,
        [0.2, 0.3, 0.7, 0.76],
        [0, 0.95, 0.95, 0]
    );

    const rotateX = useTransform(
        scrollYProgress,
        [0, 0.3, 0.5, 0.6, 0.8],
        [-16, -12, -7, -7, 15] // Or whatever feels right visually
    );

    const anglePerImage = 360 / images.length;
    const rawRotateY = useTransform(scrollYProgress, [0.23, 0.75], [0, -360]);
    const rotateY = useSpring(0, {
        stiffness: 400,
        damping: 40,
    });
    useEffect(() => {
        const unsubscribe = rawRotateY.on("change", (v) => {
            rotateY.set(v);
        });
        return () => unsubscribe();
    }, [rawRotateY, rotateY]);

    return (
        <section ref={ref} className="relative h-[350vh] w-screen">
            <motion.div
                className="sticky top-0 h-[100vh] max-w-screen flex items-center justify-center overflow-hidden mix-blend-darken mt-[-40rem] mb-[10rem]"
                style={{ perspective: "1200px", opacity, perspectiveOrigin: '50% 50%' }}
            >
                <motion.div
                    className="absolute top-[35%] left-1/2 w-[10rem] h-[12rem] will-change-transform transform-gpu"
                    style={{
                        translateX: "-50%",
                        transformStyle: "preserve-3d",
                        scale,
                        rotateX,
                        rotateY,
                    }}
                >
                    {images.map((img, index) => {
                        const rotateY = index * anglePerImage;
                        return (
                            <div
                                key={index}
                                style={{
                                    width: "10rem",
                                    position: "absolute",
                                    inset: 0,
                                    transform: `rotateY(${rotateY}deg) translateZ(300px)`,
                                }}
                                className="pointer-events-none"
                            >
                                <Image
                                    src={img}
                                    alt={`Image ${index}`}
                                    className="w-full h-full object-cover relative mb-[2rem] will-change-transform transform-gpu"
                                    style={{
                                        imageRendering: "crisp-edges",
                                    }}
                                />
                                <p className="absolute bottom-[-1.25rem] left-7 text-xs text-black z-20">
                                    Name
                                </p>
                            </div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </section>
    );
}
