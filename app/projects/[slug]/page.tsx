import Image from "next/image"
import angel from "@/public/wide-images/angel.webp"
import SectionTab from "@/components/global/section-tab";
import first from "@/public/high-images/5.jpg"

import {about} from "@/lib/about-description";
import SkillList from "@/components/about/skill-list";
import ProjectPageDescription from "@/components/projects/project-page-description";
import ProjectPageGridBlock from "@/components/projects/project-page-grid-block";
import {projects} from "@/lib/project-list";

const nextProject = projects[1];

export default function ProjectsPage() {
    return(
        <article className="overflow-x-clip">
            <div className="section-container">
                <p> Back to projects</p>
                <h1 className="uppercase my-12 text-9xl">Project Name</h1>
                <hr className="text-primary/20"/>
                <div className="flex w-full py-5">
                    <ProjectPageDescription title="Lorem ipsum" description="Lorem ipsum sit amet vio" />
                    <ProjectPageDescription title="Lorem ipsum" description="Lorem ipsum sit amet vio" />
                    <ProjectPageDescription title="Lorem ipsum" description="Lorem ipsum sit amet vio" />
                    <ProjectPageDescription title="Lorem ipsum" description="Lorem ipsum sit amet vio" />
                </div>
                <Image src={angel} alt="angel" className="w-full h-screen py-(--space-section)" />
                <SectionTab title="Info" fullWidth={true}   >
                    <h2>Lorem ipsum sit amet</h2>
                    <p className="text-lead md:w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                        facilisis lectus eget feugiat efficitur. Ut et sollicitudin sem, sed feugiat lacus. Donec pulvinar
                        lorem eget nibh scelerisque tincidunt. Sed dignissim ante in lacus pretium suscipit. Praesent nec
                        consequat nunc. Nam sodales euismod diam at suscipit. Suspendisse vulputate, felis et auctor porta,
                        mi quam placerat orci, quis congue urna lacus sit amet felis. Donec ex quam, egestas ac dolor nec,
                        mattis sollicitudin nunc. Phasellus vitae mattis lorem, ut feugiat est. </p>
                    <SkillList names={["Ipsum sit ","Ipsum sit ","Ipsum sit "]} />
                </SectionTab>
                <div className="flex w-full py-(--space-section) gap-x-8">
                    <Image src={first} alt="" className="w-1/2 pt-30" />
                    <Image src={first} alt="" className="w-1/2 pb-30" />
                </div>
                <div className="w-full grid grid-cols-2 grid-rows-2 gap-30">
                    <ProjectPageGridBlock />
                    <ProjectPageGridBlock />
                    <ProjectPageGridBlock />
                    <ProjectPageGridBlock />
                </div>

                <a
                    href={nextProject.link}
                    className="group relative isolate mt-(--space-section) flex items-end justify-between gap-6 border-t border-primary-20 py-10 text-primary
                    transition-[padding,color] duration-300 hover:px-8 hover:text-background focus-visible:px-8 focus-visible:text-background focus-visible:outline-none md:py-16"
                >
                    <span className="absolute inset-y-0 -inset-x-[100vw] -z-10 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
                    <span className="flex flex-col gap-y-4">
                    <span className="label transition-colors duration-300 group-hover:text-background group-focus-visible:text-background">Next project</span>
                    <span className="font-serif text-h1 uppercase">{nextProject.name}</span>
                </span>
                    <span aria-hidden="true" className="font-serif text-h1 transition-transform duration-300 group-hover:translate-x-4">→</span>
                </a>
            </div>
        </article>
    )
}