import Image from 'next/image';
import Divider from "@/components/skillstack/divider";
import CloseIcon from "@/components/global/close-icon";
import {Skill} from "@/lib/skill-description";

type SkillDescriptionProps = Pick<Skill, "title" | "description" | "cover"> & { onClose: () => void, isVisible: boolean };

export default function SkillDescription({title, description, cover, onClose, isVisible }: SkillDescriptionProps) {
    const words = title?.split(" ");



    return(
        <div className={`fixed inset-0 z-50 transition-all duration-700 ${ isVisible ? "translate-y-0" : "translate-y-full" }`}>
            <span className="w-screen h-screen overflow-hidden absolute left-0 top-0">
                <Image
                    className={`w-full object-cover transition-all duration-10000 ${ isVisible ? "scale-110" : "scale-100" }`}
                    sizes="100vw"
                    loading="eager"
                    fill
                    src={cover}
                    alt="" />
            </span>

            <div className="py-30 bg-white flex items-stretch absolute right-0 left-0 bottom-0">
                <p className="w-1/5 text-h2 text-black font-serif text-right uppercase">{words[0]} <br /> {words[1]} </p>
                <Divider />
                <p className="flex-1 text-sm text-black text-center">{description}</p>
                <Divider />
                <button type="button" onClick={onClose} aria-label="Close" className="w-1/5 flex items-center cursor-pointer">
                    <CloseIcon className="size-14 text-black" />
                </button>
            </div>
        </div>
    )
}
