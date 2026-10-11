import logo from "@/public/logo.png"
import Image from "next/image";

export default function Header() {
    return (
        <div className="fixed w-fit left-1/2 -translate-x-1/2 bottom-0 z-40 flex justify-center items-center ">
                <h2>Kornel</h2>
                <Image className="h-30 w-auto" src={logo} alt="" />
                <h2>Pustelak</h2>
        </div>
    )
}