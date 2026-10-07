import mock from "@/public/showcase/mock.jpg"
import Image from "next/image"

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer leo sapien, " +
    "volutpat at tempor vitae, mollis malesuada nunc. Duis id orci non neque iaculis suscipit. Morbi tempor sed nisi vitae dictum." +
    " Donec vehicula porta imperdiet. Sed finibus ac dui non tempor. Nulla quis pretium sapien. "
export default function Talk(){
    return (
        <div className="flex justify-center items-center h-screen">
            <Image src={mock} alt="" className="max-h-screen w-screen overflow-hidden opacity-50"/>
            <div className="absolute flex max-w-1/2 flex-col gap-y-10">
                <h2 className="text-center">Lorem ipsum dolor sit amet</h2>
                <p className="text-lead text-primary">{loremIpsum}</p>
            </div>
        </div>
    )
}