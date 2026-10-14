"use client"

import {ReactNode, useEffect, useRef} from "react";
import {LenisRef, ReactLenis, useLenis} from "lenis/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

function ScrollTriggerSync() {
    useLenis(ScrollTrigger.update);
    return null;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
    const lenisRef = useRef<LenisRef>(null);

    useEffect(() => {
        function update(time: number) {
            lenisRef.current?.lenis?.raf(time * 1000);
        }

        gsap.ticker.add(update);
        gsap.ticker.lagSmoothing(0);
        return () => { gsap.ticker.remove(update); }
    }, []);

    return (
        <ReactLenis root options={{ autoRaf: false, anchors: true }} ref={lenisRef}>
            <ScrollTriggerSync />
            {children}
        </ReactLenis>
    );
}
