import Link from 'next/link'
import {link} from "node:fs";

interface linkButton {
    name: string,
    url: string
}
interface footerBlockProps {
    title:string,
    sideText:string,
    linkButtonList : linkButton[]
}



export default function FooterBlock({title, sideText, linkButtonList}: footerBlockProps) {
    return(
        <div className="flex flex-col justify-between h-30 w-1/3 p-5">
            <div className="flex justify-between">
                <h3>{title}</h3>
                <p>{sideText}</p>
            </div>
            {linkButtonList.map((item, i) => (
                <a href={item.url} key={i}>{item.name}</a>
            ))}
            <p>Lorem ipsum sit amet</p>
        </div>
    )
}