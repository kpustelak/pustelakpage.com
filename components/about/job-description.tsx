
interface jobDescription {
    name: string;
    description: string;
}

export default function JobDescription({ name, description }: jobDescription) {
    return(
        <div className="flex flex-col gap-y-5">
            <p className="font-semibold uppercase">{name}</p>
            <hr className="text-[#31302f]" />
            <p className="text-light">
                {description}
            </p>
        </div>
    )
}