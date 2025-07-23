// components/header/AnimatedImage.jsx
import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedImage({ scale, imgRef, className, src }) {
    return (
        <motion.div ref={imgRef} style={scale} className={className}>
            <Image
                src={src}
                alt="hero"
                className={`object-contain w-full h-full rounded-box`}
            />
        </motion.div>
    );
}
