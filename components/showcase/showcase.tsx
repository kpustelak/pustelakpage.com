'use client'

import first from "@/public/high-images/1.jpg"
import second from "@/public/high-images/2.jpg"
import third from "@/public/high-images/3.jpg"
import Image from "next/image";
import {useState} from "react";
const items = [
    { src: first, alt: "Projekt 1", description: "Lorem ipsum" },
    { src: second, alt: "Projekt 2", description: "Lorem ipsum" },
    { src: third, alt: "Projekt 3", description: "Lorem ipsum" }
];


export default function Showcase() {
    const [active, setActive] = useState(0);

    return(
        <div className="section-container flex flex-col gap-y-10 !pt-0">
            <div className="flex h-[80vh] gap-2">
                {items.map((item,i) => (
                    <div
                        key={i}
                        onMouseEnter={() => setActive(i)}
                        className={`flex min-w-0 basis-0 flex-col overflow-hidden transition-[flex-grow] duration-700 gap-y-4
                ${active === i ? "grow-2" : "grow"}`}
                    >
                        <div className="relative flex-1">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p className="label">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}