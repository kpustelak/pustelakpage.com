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
        <div className="section-container h-screen gap-2">
            <h2 className="h-1/10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <div className="flex h-9/10 gap-2">
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
                        <h3>
                            {item.description}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    )
}