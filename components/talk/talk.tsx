import heaven from "@/public/wide-images/heaven.webp"
import Image from "next/image"
import Link from "next/link";
import ImageScroller from "@/components/talk/image-scroller";
import {talkDescription} from "@/lib/talk-description";
import mvcBlogApp from "@/public/phones/mvc-blog-app.webp";
import browserFileFiles from "@/public/phones/browser-file-files.webp";
import browserFileDownload from "@/public/phones/browser-file-download.webp";

const phones = [
    {image: mvcBlogApp, altText: "MVC Blog App on a phone", href: "/projects/mvc-blog-app"},
    {image: browserFileFiles, altText: "BrowserFile file list on a phone", href: "/projects/browser-file"},
    {image: browserFileDownload, altText: "BrowserFile download page on a phone", href: "/projects/browser-file"},
];

export default function Talk(){
    return (
        <ImageScroller
            overlay={
                <div className="relative h-full bg-background">
                    <p aria-hidden="true" className="absolute inset-0 flex items-start justify-center pt-[10%] text-center font-serif text-[16vw] leading-[0.85] text-primary uppercase md:items-center md:pt-0 md:text-[13vw]">
                        {talkDescription.overlayTitle}
                    </p>
                    <div className="relative flex h-full items-end justify-center gap-[3%] px-(--gutter-x) pt-[4%] pb-[10%] md:items-center md:pb-[4%]">
                        {phones.map(phone => (
                            <Link key={phone.altText} href={phone.href} className="overlay-item h-full min-w-0">
                                <Image src={phone.image} alt={phone.altText} sizes="33vw" className="h-full w-auto object-contain transition-transform duration-300 hover:scale-[1.03]" />
                            </Link>
                        ))}
                    </div>
                </div>
            }
        >
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
