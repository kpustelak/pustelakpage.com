"use client"

import {Fragment, RefObject} from "react";
import Image from "next/image";
import SkillDescription from "@/components/skillstack/skill-description";
import {skills} from "@/lib/skill-description";

interface SkillSliderProps {
    track: RefObject<HTMLDivElement | null>;
    step: number;
    handleSet: (x: number | null) => void;
    currentSlide: number;
    selected: number | null;
}

export default function SkillSlider({track, step, handleSet, currentSlide, selected}: SkillSliderProps) {
    return (
        <div ref={track} className="flex gap-4">
            {skills.map((skill, i) => (
                <Fragment key={`${skill.title}-${i}`}>
                    <article
                        onClick={() => handleSet(i)}
                        style={{transform: `translateX(-${currentSlide * step}px)`, transition: "transform 300ms ease"}}
                        className="relative isolate aspect-3/4 w-3/10 shrink-0 cursor-pointer"
                    >
                        <Image src={skill.image} alt="" fill className="bg-white object-cover duration-300 hover:p-10" />
                        <h3 className="absolute inset-x-0 bottom-15 text-center text-7xl text-black">{skill.title}</h3>
                    </article>
                    <SkillDescription
                        title={skill.title}
                        description={skill.description}
                        cover={skill.cover}
                        onClose={() => handleSet(null)}
                        isVisible={selected === i} />
                </Fragment>
            ))}
        </div>
    )
}
