'use client'

import first from "@/public/high-images/1.jpg"
import second from "@/public/high-images/2.jpg"
import third from "@/public/high-images/3.jpg"

import Image from "next/image";
import {useState} from "react";
const items = [
    { src: first, alt: "Project 1", description: "Plan the project" },
    { src: second, alt: "Project 2", description: "Fight the bugs" },
    { src: third, alt: "Project 3", description: "Conquer the results" }
];


export default function Showcase() {
    const [active, setActive] = useState(0);

    return(
        <section className="section-container flex flex-col gap-y-10 pt-0!">
            <div className="flex h-[80svh] flex-col gap-2 md:flex-row">
                {items.map((item,i) => (
                    <div
                        key={i}
                        onMouseEnter={() => setActive(i)}
                        onClick={() => setActive(i)}
                        className={`flex min-h-0 min-w-0 basis-0 flex-col overflow-hidden transition-[flex-grow] duration-700 gap-y-4
                ${active === i ? "grow-2" : "grow"}`}
                    >
                        <div className="relative flex-1">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                sizes="(min-width: 768px) 50vw, 100vw"
                                className="object-cover"
                            />
                        </div>
                        <p className="label">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
