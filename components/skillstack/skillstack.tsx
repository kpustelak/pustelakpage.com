import SectionTab from "@/components/global/section-tab";
import mock from "@/public/showcase/mock.jpg"
import Image from "next/image"

const services = [
    { title: "UX/UI Design", image: mock },
    { title: "Graphic Design", image: mock },
    { title: "Art Direction", image: mock },
    { title: "Web", image: mock },
];

export default function SkillStack(){
    return (
        <div className="section-bleed">
            <SectionTab title={"Lorem ipsum"} fullWidth={true} >
                <h2>Lorem ipsum sit amet</h2>
                <div className="flex snap-x gap-4 overflow-x-auto">
                    {services.map((service) => (
                        <article key={service.title} className="relative aspect-3/4 w-3/10 shrink-0">
                            <Image src={service.image} alt="" fill className="object-cover" />
                            <h3 className="absolute inset-x-0 bottom-15 text-center text-h3">{service.title}</h3>
                        </article>
                    ))}
                </div>
            </SectionTab>
        </div>
    )
}