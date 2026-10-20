"use client"

import gsap from "gsap"
import {useGSAP} from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {ReactNode, useRef} from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function PinReveal({children}: {children: ReactNode}) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
            gsap.from(".job-text", {
                clipPath: "inset(0 0 100% 0)",
                duration: 1,
                stagger: 1,
                scrollTrigger:{
                    trigger: ref.current,
                    start: () => ref.current!.offsetHeight > window.innerHeight ? "bottom bottom" : "top top",
                    end: "+=1500",
                    pin: true,
                    scrub: true,
                    invalidateOnRefresh: true
                },
            });
        });
    }, {scope: ref});

    return <div ref={ref}>{children}</div>;
}
