import JobDescription from "@/components/about/job-description";
import SkillList from "@/components/about/skill-list";
import SectionTab from "@/components/global/section-tab";
import PinReveal from "@/components/about/pin-reveal";
import {about} from "@/lib/about-description";

const aboutDescription = about
export default function About() {
    return(
        <PinReveal>
            <div id="about" className="section-container">
                <SectionTab title={"About"} fullWidth={false} >
                    <h2>{aboutDescription.title}</h2>
                    <p className="w-3/4 text-lead"></p>
                    <SkillList names={aboutDescription.skillList} />
                    <div className="flex flex-col gap-y-10">
                        {aboutDescription.jobList.map((item, i) => (
                            <JobDescription name={item.name} description={item.description} key={i} />
                        ))}
                    </div>
                </SectionTab>
            </div>
        </PinReveal>
    )
}