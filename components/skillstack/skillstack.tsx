"use client"

import {useEffect, useRef, useState} from "react";
import SectionTab from "@/components/global/section-tab";
import SkillSlider from "@/components/skillstack/skill-slider";
import SliderButton from "@/components/skillstack/slider-buttons";
import {skills} from "@/lib/skill-description";

const maxSlide = skills.length - 3;

export default function SkillStack(){
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);
    const [step, setStep] = useState(0);

    const track = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = track.current?.querySelector("article");
        if (!card) return;
        const observer = new ResizeObserver(() => setStep(card.offsetWidth + 16));
        observer.observe(card);
        return () => observer.disconnect();
    }, []);

    function prev(){ setCurrentSlide(slide => Math.max(0, slide - 1)); }
    function next(){ setCurrentSlide(slide => Math.min(maxSlide, slide + 1)); }

    return (
        <section className="overflow-x-clip">
            <div className="section-container">
                <SectionTab title={"Skill list"} fullWidth={true} >
                    <h2>Who actually am I</h2>
                    <SkillSlider
                        track={track}
                        step={step}
                        handleSet={setSelected}
                        currentSlide={currentSlide}
                        selected={selected} />
                    <div className="flex gap-x-2">
                        <SliderButton
                            currentSlide={currentSlide}
                            way="left"
                            maxSlide={maxSlide}
                            slide={prev}
                            symbol="<" />
                        <SliderButton
                            currentSlide={currentSlide}
                            way="right"
                            maxSlide={maxSlide}
                            slide={next}
                            symbol=">" />
                    </div>
                </SectionTab>
            </div>
        </section>
    )
}
