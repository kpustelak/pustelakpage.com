"use client"
import SectionTab from "@/components/global/section-tab";
import Image from "next/image"
import {useEffect, useRef, useState} from "react";
import SkillDescription from "@/components/skillstack/skill-description";

import { skills } from "@/lib/skill-description";

const maxSlide = skills.length - 3;

export default function SkillStack(){
    const [currentSlide, setCurrentSlide] = useState(0)
    const [selected, setSelected] = useState<number | null>(null)
    const [step, setStep] = useState(0)
    const track = useRef<HTMLDivElement>(null);

    function prev(){
        setCurrentSlide(slide => slide === 0 ? 0 : slide - 1)
    }
    function next(){
        setCurrentSlide(slide => slide === maxSlide ? slide : slide + 1)
    }

    useEffect(() => {
        const card = track.current?.querySelector("article");
        if (!card) return;
        const observer = new ResizeObserver(() => setStep(card.offsetWidth + 16));
        observer.observe(card);
        return () => observer.disconnect();
    }, [])

    return (
        <div>
            <div className="section-bleed py-(--space-section)">
                <SectionTab title={"Skill list"} fullWidth={true} >
                    <h2>Who actually am I</h2>
                    <div ref={track} className="flex gap-4"
                         style={{ transform: `translateX(-${currentSlide * step}px)`, transition: "transform 300ms ease" }}>
                        {skills.map((skill, i) => (
                            <article
                                key={`${skill.title}-${i}`}
                                onClick={() => setSelected(i)}
                                className="relative aspect-3/4 w-3/10 shrink-0 cursor-pointer isolate"
                            >
                                <Image src={skill.image} alt="" fill className="object-cover hover:p-10 bg-white duration-300" />
                                <h3 className="absolute text-7xl inset-x-0 bottom-15 text-center text-black">{skill.title}</h3>
                            </article>
                        ))}
                    </div>
                    <div className="gap-x-2 flex">
                        <button onClick={prev} disabled={currentSlide === 0} className="bg-surface font-sans text-primary text-h3 py-1 px-10 disabled:opacity-40">&lt;</button>
                        <button onClick={next} disabled={currentSlide === maxSlide} className="bg-surface font-sans text-primary text-h3 py-1 px-10 disabled:opacity-40">&gt;</button>
                    </div>
                </SectionTab>
            </div>
            {selected !== null && (
                <SkillDescription
                    {...skills[selected]}
                    onClose={() => setSelected(null)}
                />
            )}
        </div>
    )
}
