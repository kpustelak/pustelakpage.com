"use client"

import {ReactNode, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function ImageScroller({children, video}: {children: ReactNode; video: string}) {
    const section = useRef<HTMLElement>(null);
    const frame = useRef<HTMLDivElement>(null);
    const clip = useRef<HTMLVideoElement>(null);
    const image = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const v = clip.current;
        if (!v) return;

        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section.current,
                    start: "top top",
                    end: "+=3000",
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    onUpdate: () => {
                        const inVideoPhase = tl.time() >= (tl.labels.video ?? 0);
                        if (inVideoPhase && v.paused) {
                            v.play().catch(() => {});
                        } else if (!inVideoPhase && !v.paused) {
                            v.pause();
                            v.currentTime = 0;
                        }
                    },
                },
            });

            tl.to(frame.current, {
                height: () => (window.innerWidth * 9) / 21,
                duration: 1,
                ease: "none",
            })
                .to(image.current, {scale: 1.15, duration: 1, ease: "none"})
                .addLabel("video")
                .to(v, {opacity: 1, duration: 0.3, ease: "none"}, "video")
                .to({}, {duration: 1});
        });
    }, {scope: section});

    return (
        <section ref={section} className="flex h-svh w-full items-center justify-center overflow-hidden">
            <div ref={frame} className="relative h-svh w-full overflow-hidden">
                <div ref={image} className="absolute inset-0 will-change-transform">
                    {children}
                </div>
                <video
                    ref={clip}
                    src={video}
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="absolute inset-0 h-full w-full object-cover opacity-0"
                />
            </div>
        </section>
    )
}
