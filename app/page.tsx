import Showcase from "@/components/showcase/showcase";
import About from "@/components/about/about";
import Projects from "@/components/projects/projects";
import Talk from "@/components/talk/talk";
import Technologies from "@/components/technologies/technologies";
import SkillStack from "@/components/skillstack/skillstack";
import Header from "@/components/global/header";
import Hero from "@/components/hero/hero";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
        <Hero />
        <Header />
        <Showcase />
        <About />
        <SkillStack />
        <Projects />
        <Talk />
        <Technologies />
        <Contact />
        <Footer />
    </>
  );
}
