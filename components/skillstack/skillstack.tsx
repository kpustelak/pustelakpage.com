"use client"
import SectionTab from "@/components/global/section-tab";
import {useEffect, useRef, useState} from "react";
import SkillSlider from "@/components/skillstack/skill-slider";
import { skills } from "@/lib/skill-description";
import SliderButtons from "@/components/skillstack/slider-buttons";

const maxSlide = skills.length - 3;

export default function SkillStack(){
    const [currentSlide, setCurrentSlide] = useState(0)
    const [selected, setSelected] = useState<number | null>(null)
    const [step, setStep] = useState(0)

    const track = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = track.current?.querySelector("article");
        if (!card) return;
        const observer = new ResizeObserver(() => setStep(card.offsetWidth + 16));
        observer.observe(card);
        return () => observer.disconnect();
    }, [])

    function prev(){ setCurrentSlide(slide => slide === 0 ? 0 : slide - 1)}
    function next(){setCurrentSlide(slide => slide === maxSlide ? slide : slide + 1)}
    function handleSet(x : number | null){setSelected(x)}

    return (
        <div className="relative">
            <div className="section-bleed py-(--space-section)">
                <SectionTab title={"Skill list"} fullWidth={true} >
                    <h2>Who actually am I</h2>
                    <SkillSlider
                        track={track}
                        step={step}
                        handleSet={handleSet}
                        currentSlide={currentSlide}
                        selected={selected} />
                    <div className="gap-x-2 flex">
                        <SliderButtons
                            currentSlide={currentSlide}
                            way="left"
                            maxSlide={maxSlide}
                            slide={prev}
                            symbol="&lt;"
                            key="&lt;" />
                        <SliderButtons
                            currentSlide={currentSlide}
                            way="right"
                            maxSlide={maxSlide}
                            slide={next}
                            symbol="&gt;"
                            key="&gt;" />
                    </div>
                </SectionTab>
            </div>
        </div>
    )
}
