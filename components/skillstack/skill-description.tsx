import Image from "next/image";
import Divider from "@/components/skillstack/divider";
import CloseIcon from "@/components/global/close-icon";
import {Skill} from "@/lib/skill-description";

type SkillDescriptionProps = Pick<Skill, "title" | "description" | "cover"> & {
    onClose: () => void;
    isVisible: boolean;
};

export default function SkillDescription({title, description, cover, onClose, isVisible}: SkillDescriptionProps) {
    const words = title.split(" ");

    return (
        <div inert={!isVisible} className={`fixed inset-0 z-50 transition-all duration-700 ${isVisible ? "visible translate-y-0" : "invisible translate-y-full"}`}>
            <span className="absolute top-0 left-0 h-screen w-screen overflow-hidden">
                <Image
                    className={`w-full object-cover transition-all duration-10000 ${isVisible ? "scale-110" : "scale-100"}`}
                    sizes="100vw"
                    loading="eager"
                    fill
                    src={cover}
                    alt="" />
            </span>

            <div data-lenis-prevent className="absolute inset-x-0 bottom-0 flex max-h-full flex-col items-center gap-6 overflow-y-auto bg-white px-6 py-10 md:flex-row md:items-stretch md:gap-0 md:px-0 md:py-30">
                <p className="text-center font-serif text-h2 text-black uppercase md:w-1/5 md:text-right">{words[0]} <br /> {words[1]}</p>
                <Divider />
                <p className="flex-1 text-center text-sm text-black">{description}</p>
                <Divider />
                <button type="button" onClick={onClose} aria-label="Close" className="flex cursor-pointer items-center md:w-1/5">
                    <CloseIcon className="size-14 text-black" />
                </button>
            </div>
        </div>
    )
}
