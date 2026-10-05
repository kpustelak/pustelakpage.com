const projects = [
    { name: "Lorem ipsum", link: "#" },
    { name: "Lorem ipsum sit amet", link: "#" },
    { name: "Lorem ipsum hola", link: "#" },
    { name: "Lorem zibzibum", link: "#" },
    { name: "Lorem ipsum dolor", link: "#" },
    { name: "Lorem ipsum sit amet consectetur", link: "#" },
];

export default function Projects() {
    return (
        <section className="overflow-x-clip">
            <ul className="section-container">
                {projects.map((project, i) => (
                    <li key={`${project.name}-${i}`}>
                        <a
                            href={project.link}
                            className="group relative isolate flex justify-between px-0 text-h2 leading-none uppercase text-primary transition-[padding,color] duration-300 hover:px-8 hover:text-background"
                        >
                            <span className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <span>{project.name}</span>
                            <span>[ {i + 1} ]</span>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
