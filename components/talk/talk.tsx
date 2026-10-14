import heaven from "@/public/wide-images/heaven.webp"
import Image from "next/image"
import ImageScroller from "@/components/talk/image-scroller";
import {talkDescription} from "@/lib/talk-description";

export default function Talk(){
    return (
        <ImageScroller video="/videos/video.mp4">
            <div className="absolute inset-0">
                <Image src={heaven} alt="" fill sizes="100vw" className="object-cover opacity-50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-10 px-(--gutter-x) text-center">
                    <h2 className="md:max-w-1/2">{talkDescription.title}</h2>
                    <p className="text-lead text-primary md:max-w-1/2">{talkDescription.description}</p>
                </div>
            </div>
        </ImageScroller>
    )
}
