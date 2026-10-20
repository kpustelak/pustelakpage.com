"use client"

import {ReactNode, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function ImageScroller({children, overlay}: {children: ReactNode; overlay: ReactNode}) {
    const section = useRef<HTMLElement>(null);
    const frame = useRef<HTMLDivElement>(null);
    const layer = useRef<HTMLDivElement>(null);
    const image = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section.current,
                    start: "top top",
                    end: () => window.innerWidth < 768 ? "+=1800" : "+=3600",
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });

            tl.to(frame.current, {
                height: () => window.innerWidth < 768 ? window.innerHeight * 0.7 : (window.innerWidth * 9) / 21,
                duration: 1,
                ease: "none",
            })
                .to(image.current, {scale: 1.15, duration: 1, ease: "none"})
                .addLabel("overlay")
                .to(layer.current, {opacity: 1, duration: 0.3, ease: "none"}, "overlay")
                .set(layer.current, {pointerEvents: "auto"}, "overlay")
                .to({}, {duration: 0.8})
                .fromTo(".overlay-item",
                    {yPercent: (i: number) => i % 2 === 0 ? -130 : 130},
                    {yPercent: 0, duration: 0.6, stagger: 0.3, ease: "power2.out"})
                .to({}, {duration: 1});
        });
    }, {scope: section});

    return (
        <section ref={section} className="flex h-svh w-full items-center justify-center overflow-hidden">
            <div ref={frame} className="relative h-svh w-full overflow-hidden">
                <div ref={image} className="absolute inset-0 will-change-transform">
                    {children}
                </div>
                <div ref={layer} className="pointer-events-none absolute inset-0 opacity-0">
                    {overlay}
                </div>
            </div>
        </section>
    )
}
