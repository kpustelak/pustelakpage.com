import {JSX} from "react";

interface ProjectPageDescriptionProps {
    title: string,
    description: string,
    href?: string
}
export default function ProjectPageDescription({ title, description, href }: ProjectPageDescriptionProps): JSX.Element {
    return(
        <div className="md:w-1/4 flex flex-col gap-y-2">
            <p className="text-primary-60 lowercase text-md">{title}</p>
            {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className="self-start text-primary text-xl transition-opacity hover:opacity-60">
                    {description}
                </a>
            ) : (
                <p className="text-primary text-xl">{description}</p>
            )}
        </div>
    )
}
