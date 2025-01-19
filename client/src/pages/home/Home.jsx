import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Introduction from "./sections/Introduction";
import Projects from "./sections/Projects";
import WorkExperience from "./sections/WorkExperience";

function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <WorkExperience />
      <Projects />
      <Contact />
    </>
  )
}

export default Home