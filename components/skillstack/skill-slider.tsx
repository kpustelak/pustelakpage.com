"use client"

import {skills} from "@/lib/skill-description";
import {Fragment, RefObject} from "react";
import Image from "next/image";
import SkillDescription from "@/components/skillstack/skill-description";

interface SkillSliderProps{
    track : RefObject<HTMLDivElement | null>,
    step : number,
    handleSet : (x : number | null) => void,
    currentSlide : number,
    selected : number | null
}

export default function SkillSlider({track, step, handleSet, currentSlide, selected}: SkillSliderProps) {
    return(
        <div ref={track} className="flex gap-4">
            {skills.map((skill, i) => (
                <Fragment key={`${skill.title}-${i}`}>
                    <article
                        key={`${skill.title}-${i}`}
                        onClick={() => handleSet(i)}
                        style={{ transform: `translateX(-${currentSlide * step}px)`, transition: "transform 300ms ease" }}
                        className="relative aspect-3/4 w-3/10 shrink-0 cursor-pointer isolate"
                    >
                        <Image src={skill.image} alt="" fill className="object-cover hover:p-10 bg-white duration-300 " />
                        <h3 className="absolute text-7xl inset-x-0 bottom-15 text-center text-black">{skill.title}</h3>
                    </article>
                    <SkillDescription
                        title={ skill.title }
                        description={ skill.description }
                        cover={ skill.cover }
                        onClose={() => handleSet(null)}
                        isVisible={ selected === i }
                    />
                </Fragment>
            ))}
        </div>
    )
}