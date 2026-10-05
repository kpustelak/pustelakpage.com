import JobDescription from "@/components/about/job-description";
import SkillList from "@/components/about/skill-list";
import SectionTab from "@/components/global/section-tab";

const JobList = [
    {name : "Lorem ipsum", description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia ipsum at tempor tincidunt. In nec ipsum eget nunc bibendum dignissim. Quisque posuere scelerisque neque sit amet elementum. Donec sodales molestie condimentum."},
    {name : "Lorem ipsum", description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia ipsum at tempor tincidunt. In nec ipsum eget nunc bibendum dignissim. Quisque posuere scelerisque neque sit amet elementum. Donec sodales molestie condimentum."},
    {name : "Lorem ipsum", description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia ipsum at tempor tincidunt. In nec ipsum eget nunc bibendum dignissim. Quisque posuere scelerisque neque sit amet elementum. Donec sodales molestie condimentum."}
]

export default function About() {
    return(
        <div className="section-container ">
            <SectionTab title={"ABOUT"} fullWidth={false} >
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia ipsum.</h2>
                <p className="w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia ipsum at tempor tincidunt.
                    In nec ipsum eget nunc bibendum dignissim. Quisque posuere scelerisque neque sit amet elementum.
                    Donec sodales molestie condimentum.
                </p>
                <SkillList names={["Product", "Product design", "Branding", "Web", "Product", "Product design", "Branding", "Web", "Product"]} />
                <div className="flex flex-col gap-y-10">
                    {JobList.map((item, i) => (
                        <JobDescription name={item.name} description={item.description} key={i} />
                    ))}
                </div>
            </SectionTab>

        </div>
    )
}