import HeaderThree from "../../../components/HeaderThree";
import HeaderTwo from "../../../components/HeaderTwo";
import SectionOne from "../../../components/SectionOne";

function Projects () {
  return (
    <SectionOne>
      <div className="h-[200vh]">
        <div className="flex flex-col items-center gap-11">
          <HeaderTwo>
            Projects.
          </HeaderTwo>
          <HeaderThree>
            Here are some cool projects I have worked on (technical and non-technical).
          </HeaderThree>
          <div>
            
          </div>
        </div>
      </div>
    </SectionOne>
  );
}

export default Projects;