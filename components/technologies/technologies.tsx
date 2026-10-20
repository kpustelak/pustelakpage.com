import SectionTab from "@/components/global/section-tab";
import GridSquare from "@/components/technologies/grid-square";
import dotnet from "@/public/technologies/dotnet.svg";
import csharp from "@/public/technologies/csharp.svg";
import react from "@/public/technologies/react.svg";
import tailwind from "@/public/technologies/tailwindcss.svg";
import postgresql from "@/public/technologies/postgresql.svg";
import redis from "@/public/technologies/redis.svg";
import wordpress from "@/public/technologies/wordpress.svg";
import figma from "@/public/technologies/figma.svg";

const technologies = [
    { image: dotnet, altText: ".NET" },
    { image: csharp, altText: "C#" },
    { image: react, altText: "React" },
    { image: tailwind, altText: "Tailwind CSS" },
    { image: postgresql, altText: "PostgreSQL" },
    { image: redis, altText: "Redis" },
    { image: wordpress, altText: "WordPress" },
    { image: figma, altText: "Figma" },
];

export default function Technologies(){
    return (
        <section className="section-container">
            <SectionTab title={"Technologies"} fullWidth={true} >
                <h2>Technologies I work with</h2>
                <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                    {technologies.map((item, i) => (
                        <GridSquare key={i} image={item.image} altText={item.altText} />
                    ))}
                </div>
            </SectionTab>
        </section>
    )
}
