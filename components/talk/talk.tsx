import mock from "@/public/showcase/mock.jpg"
import heaven from "@/public/wide-images/heaven.webp"
import Image from "next/image"
import ImageScroller from "@/components/talk/image-scroller";

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer leo sapien, " +
    "volutpat at tempor vitae, mollis malesuada nunc. Duis id orci non neque iaculis suscipit. Morbi tempor sed nisi vitae dictum." +
    " Donec vehicula porta imperdiet. Sed finibus ac dui non tempor. Nulla quis pretium sapien. "
export default function Talk(){
    return (
        <ImageScroller video="/videos/video.mp4">
            <div className="absolute inset-0">
                <Image src={heaven} alt="" fill className="object-cover opacity-50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-10">
                    <h2 className="max-w-1/2 text-center">Lorem ipsum dolor sit amet</h2>
                    <p className="max-w-1/2 text-lead text-primary">{loremIpsum}</p>
                </div>
            </div>
        </ImageScroller>
    )
}
