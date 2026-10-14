import Image, {StaticImageData} from "next/image";

interface GridSquareProps {
    image: StaticImageData;
    altText: string;
}

export default function GridSquare({image, altText}: GridSquareProps) {
    return(
        <div className="flex aspect-square items-center justify-center bg-surface p-[18%]">
            <Image src={image} alt={altText} className="h-auto w-full max-w-50" />
        </div>
    )
}
