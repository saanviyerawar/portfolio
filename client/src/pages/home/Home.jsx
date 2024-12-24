import Hero from "./Hero";
import Page from "../../components/Page"
import Introduction from "./sections/Introduction";
import WorkExperience from "./sections/WorkExperience";

function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <WorkExperience />
    </>
  )
}

export default Home