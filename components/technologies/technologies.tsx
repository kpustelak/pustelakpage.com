import SectionTab from "@/components/global/section-tab";
import GridSquare from "@/components/technologies/grid-square";
import Github from "@/public/GitHub_Lockup_White.svg";

const technologies = [
    { image: Github, altText: "GitHub" },
    { image: Github, altText: "GitHub" },
    { image: Github, altText: "GitHub" },
    { image: Github, altText: "GitHub" },
    { image: Github, altText: "GitHub" },
    { image: Github, altText: "GitHub" },
];

export default function Technologies(){
    return (
        <div className="section-container">
            <SectionTab title={"Technologies"} fullWidth={true} >
                <h2>Lorem ipsum sit amet</h2>
                <div className="grid grid-cols-4 items-center gap-2">
                    {technologies.map((item, i) => (
                        <GridSquare key={i} image={item.image} altText={item.altText} />
                    ))}
                </div>
            </SectionTab>
        </div>
    )
}
