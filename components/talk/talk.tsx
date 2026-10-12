import heaven from "@/public/wide-images/heaven.webp"
import Image from "next/image"
import ImageScroller from "@/components/talk/image-scroller";
import {talkDescription} from "@/lib/talk-description";

const talk = talkDescription

export default function Talk(){
    return (
        <ImageScroller video="/videos/video.mp4">
            <div className="absolute inset-0">
                <Image src={heaven} alt="" fill className="object-cover opacity-50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-10">
                    <h2 className="max-w-1/2 text-center">{talk.title}</h2>
                    <p className="max-w-1/2 text-lead text-primary">{talk.description}</p>
                </div>
            </div>
        </ImageScroller>
    )
}
