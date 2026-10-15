interface ProjectPageGridBlockProps {
    index: number,
    title: string,
    description: string,
}
export default function ProjectPageGridBlock({ index, title, description }: ProjectPageGridBlockProps){
    return (
        <div className="flex gap-x-6 md:gap-x-12">
            <p className="text-5xl md:text-7xl">{index}.</p>
            <div className="flex flex-col gap-y-4">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}
