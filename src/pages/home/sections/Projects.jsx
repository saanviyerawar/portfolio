import HeaderThree from "../../../components/HeaderThree";
import HeaderTwo from "../../../components/HeaderTwo";
import ProjectSquare from "../../../components/ProjectSquare";
import SectionOne from "../../../components/SectionOne";

function Projects () {
  return (
    <SectionOne>
      <div className="flex flex-col items-center gap-11">
        <HeaderTwo>
          Projects.
        </HeaderTwo>
        <HeaderThree>
          Here are some cool projects I have worked on (technical and non-technical).
        </HeaderThree>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20vh] w-[65vw]">
          <ProjectSquare projectName="Prodigi" skillsList={["Product", "Figma"]} />
          <ProjectSquare projectName="BSOCBear" skillsList={["Python", "Product"]} />
          <ProjectSquare projectName="Prodigi" skillsList={["Python", "Javascript", "React", "HTML", "CSS", "Figma"]} />
          <ProjectSquare projectName="Prodigi" skillsList={["Python", "Javascript", "React", "HTML", "CSS", "Figma"]} />
        </div>
      </div>
    </SectionOne>
  );
}

export default Projects;