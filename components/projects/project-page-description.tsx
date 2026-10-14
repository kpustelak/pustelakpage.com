import {JSX} from "react";

interface ProjectPageDescriptionProps {
    title: string,
    description: string
}
export default function ProjectPageDescription({ title, description }: ProjectPageDescriptionProps): JSX.Element {
    return(
        <div className="md:w-1/4 flex flex-col gap-y-2">
            <p className="text-primary-60 lowercase text-md">{title}</p>
            <p className="text-primary text-xl">{description}</p>
        </div>
    )
}