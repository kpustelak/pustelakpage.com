"use client"

import gsap from "gsap"
import {useGSAP} from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {ReactNode, useRef} from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function PinReveal({children}: {children: ReactNode}) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".job-text", {
            height: 0,
            opacity: 1,
            duration: 1,
            stagger: 1,
            scrollTrigger:{
                trigger: ref.current,
                start: "top top",
                end: "+=1500",
                pin: true,
                scrub: true
            },
        });
    }, {scope: ref});

    return <div ref={ref}>{children}</div>;
}