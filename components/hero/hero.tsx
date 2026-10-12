import Image from "next/image";
import ocean from "@/public/wide-images/ocean.jpg";

export default function Hero() {
    return(
        <div className="relative h-screen overflow-hidden">
            <Image src={ocean} alt="" fill className="object-cover" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-b from-transparent to-background" />
            <div className="section-container relative z-20">
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            </div>
        </div>
    )
}
