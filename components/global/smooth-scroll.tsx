"use client"

import {ReactNode, useEffect, useRef} from "react";
import {LenisRef, ReactLenis} from "lenis/react";
import gsap from "gsap";

export default function SmoothScroll({ children }: { children: ReactNode }) {
    const lenisRef = useRef<LenisRef>(null);

    useEffect(() => {
        function update(time: number) {
            lenisRef.current?.lenis?.raf(time * 1000);
        }

        gsap.ticker.add(update);
        return () => { gsap.ticker.remove(update); }
    }, []);

    return (
        <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
            {children}
        </ReactLenis>
    );
}