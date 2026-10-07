'use client'

import mock from "@/public/showcase/mock.jpg";
import Image from "next/image";
import {useState} from "react";

const items = [
    { src: mock, alt: "Projekt 1", description: "Lorem ipsum" },
    { src: mock, alt: "Projekt 2", description: "Lorem ipsum" },
    { src: mock, alt: "Projekt 3", description: "Lorem ipsum" }
];


export default function Showcase() {
    const [active, setActive] = useState(0);

    return(
        <div className="section-container h-screen flex flex-col gap-y-10">
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <div className="flex h-8/10 gap-2">
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
                                className="object-cover object-center"
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