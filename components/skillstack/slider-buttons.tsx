interface SliderButtonProps {
    currentSlide: number;
    maxSlide: number;
    slide: () => void;
    way: "left" | "right";
    symbol: string;
}

export default function SliderButton({slide, currentSlide, maxSlide, way, symbol}: SliderButtonProps) {
    const isDisabled = way === "left" ? currentSlide === 0 : currentSlide === maxSlide;

    return (
        <button
            type="button"
            onClick={slide}
            disabled={isDisabled}
            {...{autoComplete: "off"}}
            className="bg-surface px-10 py-1 font-sans text-h3 text-primary disabled:opacity-40"
        >
            {symbol}
        </button>
    )
}
