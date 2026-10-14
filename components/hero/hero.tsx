import Image from "next/image";
import ocean from "@/public/wide-images/ocean.jpg";

export default function Hero() {
    return(
        <section id="home" className="relative h-svh overflow-hidden">
            <Image src={ocean} alt="" fill preload sizes="100vw" className="object-cover" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-linear-to-b from-transparent to-background" />
            <div className="section-container relative z-20">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            </div>
        </section>
    )
}
