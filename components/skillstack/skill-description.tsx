import Image from 'next/image';
import Divider from "@/components/skillstack/divider";
import CloseIcon from "@/components/global/close-icon";
import {Skill} from "@/lib/skill-description";

type SkillDescriptionProps = Pick<Skill, "title" | "description" | "cover"> & { onClose: () => void };

export default function SkillDescription({title, description, cover, onClose }: SkillDescriptionProps) {
    const words = title.split(" ");

    return(
        <div className="fixed inset-0 z-50">
            <Image className="w-full absolute left-0 top-0 overflow-hidden" src={cover} alt="" />
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
