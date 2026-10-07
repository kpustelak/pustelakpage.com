"use client"
import SectionTab from "@/components/global/section-tab";
import mock from "@/public/showcase/mock.jpg"
import Image from "next/image"
import {useEffect, useRef, useState} from "react";
import SkillDescription from "@/components/skillstack/skill-description";

const services = [
    { title: "Webpage Design", image: mock },
    { title: "Frontend development", image: mock },
    { title: "Frontend development", image: mock },
    { title: "Frontend development", image: mock },
    { title: "Frontend development", image: mock },
    { title: "Backend development", image: mock },
    { title: "Web", image: mock }
];

export default function SkillStack(){
    const [currentSlide, setCurrentSlide] = useState(0)
    function prev(){
        setCurrentSlide(prev => prev === 0 ? 0 : prev - 1  )
    }
    function next(){
        setCurrentSlide(prev => (services.length - 3) === prev ? prev : prev + 1)
    }

    const track = useRef<HTMLDivElement>(null);
    const card = track.current?.querySelector("article");
    const step = card ? card.offsetWidth + 16 : 0;

    useEffect(()=>{

    },[currentSlide])

    return (
        <div>
            <div className="section-bleed py-(--space-section)">
                <SectionTab title={"Lorem ipsum"} fullWidth={true} >
                    <h2>Lorem ipsum sit amet</h2>
                    <div ref={track} className="flex snap-x gap-4"
                         style={{ transform: `translateX(-${currentSlide * step}px)`, transition: "transform 300ms ease" }}>
                        {services.map((service) => (
                            <article key={service.title} className="relative aspect-3/4 w-3/10 shrink-0">
                                <Image src={service.image} alt="" fill className="object-cover" />
                                <h3 className="absolute inset-x-0 bottom-15 text-center">{service.title}</h3>
                            </article>
                        ))}
                    </div>
                    <div className="gap-x-2 flex">
                        <button onClick={prev} disabled={currentSlide === 0} className="bg-surface text-primary text-h3 py-1 px-10 disabled:opacity-40">&lt;</button>
                        <button onClick={next} disabled={currentSlide === services.length - 3} className="bg-surface text-primary text-h3 py-1 px-10 disabled:opacity-40">&gt;</button>
                    </div>
                </SectionTab>
            </div>
            <SkillDescription />
        </div>
    )
}
