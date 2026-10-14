import JobDescription from "@/components/about/job-description";
import SkillList from "@/components/about/skill-list";
import SectionTab from "@/components/global/section-tab";
import PinReveal from "@/components/about/pin-reveal";
import {about} from "@/lib/about-description";

export default function About() {
    return(
        <PinReveal>
            <section id="about" className="section-container">
                <SectionTab title={"About"} fullWidth={false} >
                    <h2>{about.title}</h2>
                    <p className="text-lead md:w-3/4">{about.description}</p>
                    <SkillList names={about.skillList} />
                    <div className="flex flex-col gap-y-10">
                        {about.jobList.map((item, i) => (
                            <JobDescription name={item.name} description={item.description} key={i} />
                        ))}
                    </div>
                </SectionTab>
            </section>
        </PinReveal>
    )
}
