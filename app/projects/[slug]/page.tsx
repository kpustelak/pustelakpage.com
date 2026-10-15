import type {Metadata} from "next";
import Image from "next/image"
import Link from "next/link";
import {notFound} from "next/navigation";
import SectionTab from "@/components/global/section-tab";
import SkillList from "@/components/about/skill-list";
import ProjectPageDescription from "@/components/projects/project-page-description";
import ProjectPageGridBlock from "@/components/projects/project-page-grid-block";
import {getNextProject, getProject, projects} from "@/lib/project-list";
import {projectHref} from "@/lib/project-description";
import Footer from "@/components/footer/footer";

export const dynamicParams = false;

export function generateStaticParams() {
    return projects.map(project => ({slug: project.slug}));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
    const { slug } = await params
    const project = getProject(slug)
    return { title: project?.name }
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
    const { slug } = await params
    const project = getProject(slug)
    if (!project) notFound()

    const nextProject = getNextProject(project.slug)

    return(
        <article className="overflow-x-clip">
            <div className="section-container">
                <Link href="/#projects">Back to projects</Link>
                <h1 className="my-12 text-h1 uppercase lg:text-9xl">{project.name}</h1>
                <hr className="text-primary/20"/>
                <div className="grid w-full grid-cols-2 gap-6 py-5 md:flex md:gap-0">
                    {project.details.map(detail => (
                        <ProjectPageDescription key={detail.title} title={detail.title} description={detail.description} />
                    ))}
                </div>
                <Image src={project.heroImage} alt={project.name} loading="eager" className="h-svh w-full object-cover py-(--space-section)" />
                <SectionTab title="Info" fullWidth={true}   >
                    <h2>{project.info.title}</h2>
                    <p className="text-lead md:w-3/4">{project.info.description}</p>
                    <SkillList names={project.info.technologies} />
                </SectionTab>
                <div className="flex w-full flex-col gap-8 py-(--space-section) md:flex-row">
                    <Image src={project.gallery[0]} alt="" className="w-full md:w-1/2 md:pt-30" />
                    <Image src={project.gallery[1]} alt="" className="w-full md:w-1/2 md:pb-30" />
                </div>
                <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 md:gap-30">
                    {project.highlights.map((highlight, i) => (
                        <ProjectPageGridBlock key={i} index={i + 1} title={highlight.title} description={highlight.description} />
                    ))}
                </div>

                <Link
                    href={projectHref(nextProject)}
                    className="group relative isolate mt-(--space-section) flex items-end justify-between gap-6 border-t border-primary-20 pt-10 text-primary
                    transition-[padding,color] duration-300 hover:px-8 hover:text-background focus-visible:px-8 focus-visible:text-background focus-visible:outline-none md:py-16"
                >
                    <span className="absolute inset-y-0 -inset-x-[100vw] -z-10 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
                    <span className="flex flex-col gap-y-4">
                    <span className="label transition-colors duration-300 group-hover:text-background group-focus-visible:text-background">Next project</span>
                    <span className="font-serif text-h1 uppercase">{nextProject.name}</span>
                </span>
                    <span aria-hidden="true" className="font-serif text-h1 transition-transform duration-300 group-hover:translate-x-4">→</span>
                </Link>
            </div>
            <Footer />
        </article>
    )
}
