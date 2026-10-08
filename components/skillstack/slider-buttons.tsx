interface SliderButtonProps {
    currentSlide: number;
    maxSlide: number;
    slide: () => void;
    way: "left" | "right";
    symbol: string;
}

export default function SliderButton({ slide, currentSlide, maxSlide, way, symbol }: SliderButtonProps) {
    const isDisabled = way === "left" ? currentSlide === 0 : currentSlide === maxSlide;

    return (
        <button
            type="button"
            onClick={slide}
            disabled={isDisabled}
            className="bg-surface font-sans text-primary text-h3 py-1 px-10 disabled:opacity-40"
        >
            {symbol}
        </button>
    );
}