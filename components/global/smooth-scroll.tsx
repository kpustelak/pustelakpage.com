"use client"

import {ReactNode, useEffect, useRef} from "react";
import {LenisRef, ReactLenis, useLenis} from "lenis/react";
import {usePathname} from "next/navigation";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

function ScrollTriggerSync() {
    useLenis(ScrollTrigger.update);
    return null;
}

function HashScroll() {
    const lenis = useLenis();
    const pathname = usePathname();

    useEffect(() => {
        if (!lenis) return;
        const frame = requestAnimationFrame(() => {
            ScrollTrigger.refresh();
            lenis.resize();
            const hash = window.location.hash;
            const target = hash ? document.querySelector(hash) : null;
            lenis.scrollTo(target instanceof HTMLElement ? target : 0, {immediate: true, force: true});
        });
        return () => cancelAnimationFrame(frame);
    }, [lenis, pathname]);

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
            <HashScroll />
            {children}
        </ReactLenis>
    );
}
