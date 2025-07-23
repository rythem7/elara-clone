'use client';

import Header from "@/components/header/Header.jsx";
import Section2 from "@/components/section2/Section2";
import Section3 from "@/components/section3/Section3";
import Section4 from "@/components/section4/Section4";
import Section5 from "@/components/section5/Trending";
import Spinner from "@/components/spinner/Spinner";
import { ReactLenis } from "lenis/react";
import { cancelFrame, frame, motion } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Home() {
    const lenisRef = useRef(null);

    useEffect(() => {
        function update(data) {
            const time = data.timestamp;
            if (lenisRef.current?.lenis) {
                lenisRef.current.lenis.raf(time);
            }
        }

        frame.update(update, true);
        return () => cancelFrame(update);
    }, []);
    return (
        <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
            <div className="max-w-screen flex flex-col items-center">
                <Header />
                <Spinner lenisRef={lenisRef} />
                {/* <div className="h-screen overflow-y-scroll snap-y snap-mandatory"> */}
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                {/* </div> */}
            </div>
        </ReactLenis>
    );
}
