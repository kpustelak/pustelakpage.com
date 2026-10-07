
interface jobDescription {
    name: string;
    description: string;
}

export default function JobDescription({ name, description }: jobDescription) {
    return(
        <div className="flex flex-col gap-y-5">
            <p className="font-medium uppercase text-primary">{name}</p>
            <hr className="border-primary-20" />
            <p>
                {description}
            </p>
        </div>
    )
}