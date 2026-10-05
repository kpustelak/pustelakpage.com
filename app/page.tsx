import Showcase from "@/components/showcase/showcase";
import About from "@/components/about/about";
import Projects from "@/components/projects/projects";
import Talk from "@/components/talk/talk";
import Technologies from "@/components/technologies/technologies";
import SkillStack from "@/components/skillstack/skillstack";

export default function Home() {
  return (
    <>
      <Showcase />
      <About />
      <Projects />
        <Talk />
        <Technologies />
        <SkillStack />
    </>
  );
}
