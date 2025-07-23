// hooks/useLenisSnap.js
import { useEffect } from 'react';
import { animate, useSpring } from 'framer-motion';

/**
 * @param {Object} params
 * @param {MotionValue} params.input - The raw motion value (like scroll-based rotateY)
 * @param {MotionValue} params.output - The spring output to animate to
 * @param {number} params.step - The angle or unit per snap (e.g., 72° for 5 images)
 * @param {RefObject} params.lenisRef - Ref to Lenis instance (ReactLenis)
 * @param {Object} params.springConfig - Optional spring config
 */
export function useLenisSnap({ input, output, step, lenisRef, springConfig }) {
    const config = springConfig || {
        stiffness: 600,
        damping: 35,
    };

    useEffect(() => {
        const lenis = lenisRef.current?.lenis;
        if (!lenis) return;

        let timeout;

        const unsubscribe = input.on('change', (v) => {
            output.set(v); // follow scroll while scrolling

            clearTimeout(timeout);
            timeout = setTimeout(() => {
                const velocity = lenis.velocity;

                if (Math.abs(velocity) < 0.01) {
                    const snapped = Math.round(v / step) * step;
                    animate(output, snapped, {
                        type: 'spring',
                        ...config,
                    });
                }
            }, 30); // delay before snap (ms)
        });

        return () => {
            unsubscribe();
            clearTimeout(timeout);
        };
    }, [input, output, step, lenisRef, springConfig]);
}
