import Image, {StaticImageData} from "next/image";

interface GridSquareProps {
    image: StaticImageData;
    altText: string;
}

export default function GridSquare({image, altText}: GridSquareProps) {
    return(
        <div className="flex aspect-square items-center justify-center px-18 bg-[#0f0f0f]">
            <Image src={image} alt={altText} className="size-50" />
        </div>

    )
}