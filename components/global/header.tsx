import logo from "@/public/logo.png"
import Image from "next/image";

const nameClass = "font-serif text-2xl uppercase text-primary md:text-h2"

export default function Header() {
    return (
        <div className="pointer-events-none fixed left-1/2 bottom-0 z-40 flex w-fit -translate-x-1/2 items-center justify-center mix-blend-difference">
                <p className={nameClass}>Kornel</p>
                <Image className="h-12 w-auto md:h-30" src={logo} alt="" />
                <p className={nameClass}>Pustelak</p>
        </div>
    )
}
