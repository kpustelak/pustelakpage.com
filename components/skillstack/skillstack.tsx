"use client"

import {useEffect, useRef, useState} from "react";
import SectionTab from "@/components/global/section-tab";
import SkillSlider from "@/components/skillstack/skill-slider";
import SliderButton from "@/components/skillstack/slider-buttons";
import {skills} from "@/lib/skill-description";

export default function SkillStack(){
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);
    const [step, setStep] = useState(0);
    const [visible, setVisible] = useState(3);

    const track = useRef<HTMLDivElement>(null);
    const touchStart = useRef<number | null>(null);

    useEffect(() => {
        const trackElement = track.current;
        const card = trackElement?.querySelector("article");
        if (!trackElement || !card) return;
        const observer = new ResizeObserver(() => {
            const nextStep = card.offsetWidth + 16;
            setStep(nextStep);
            setVisible(Math.max(1, Math.floor((trackElement.offsetWidth + 16) / nextStep)));
        });
        observer.observe(card);
        observer.observe(trackElement);
        return () => observer.disconnect();
    }, []);

    const maxSlide = Math.max(0, skills.length - visible);
    const slide = Math.min(currentSlide, maxSlide);

    function prev(){ setCurrentSlide(Math.max(0, slide - 1)); }
    function next(){ setCurrentSlide(Math.min(maxSlide, slide + 1)); }

    function swipe(endX: number) {
        if (touchStart.current === null) return;
        const distance = touchStart.current - endX;
        touchStart.current = null;
        if (selected !== null) return;
        if (distance > 40) next();
        else if (distance < -40) prev();
    }

    return (
        <section className="overflow-x-clip">
            <div className="section-container">
                <SectionTab title={"Skill list"} fullWidth={true} >
                    <h2>Who actually am I</h2>
                    <div
                        className="touch-pan-y"
                        onTouchStart={(e) => {touchStart.current = e.touches[0].clientX}}
                        onTouchEnd={(e) => swipe(e.changedTouches[0].clientX)}
                    >
                        <SkillSlider
                            track={track}
                            step={step}
                            handleSet={setSelected}
                            currentSlide={slide}
                            selected={selected} />
                    </div>
                    <div className="flex gap-x-2">
                        <SliderButton
                            currentSlide={slide}
                            way="left"
                            maxSlide={maxSlide}
                            slide={prev}
                            symbol="<" />
                        <SliderButton
                            currentSlide={slide}
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
