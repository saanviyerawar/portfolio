import HeaderThree from "../../../components/HeaderThree";
import HeaderTwo from "../../../components/HeaderTwo";
import ProjectSquare from "../../../components/ProjectSquare";
import SectionOne from "../../../components/SectionOne";

function Projects () {

  const projectList = [
    // {title: "Nagaraj Music", image: "Nagaraj-Music", shadow: true, skills: ["Product", "Figma"], description: ["Nagaraj Music aims to adapt famous Bollywood music into Western musical notation", "Leveraged design thinking to create a product that sells in over 23 countries"]},
    {title: "Capital W", image: "CapitalW", shadow: true, skills: ["Product", "Figma","React", "HTML", "CSS"], description: ["Interconnect aims to break down social exclusivity barriers to connect non-English background international students into the wider student community", "Lead the winning team as a Product Manager", "Aims to solve the social disconnection of international students after COVID-19 lockdowns"]},
    {title: "NRL", image: "NRL", shadow: true, skills: ["Python","SQL","PowerBI"], description: ["Trust-o-meter is a website that determines the quality of the information provided on a link or content of a website", "Aims to solve the spread of disinformation across the digital platform", "Developed the full stack website using Javascript, React, HTML, CSS and AI"]},
    {title: "Style Sphere", image: "StyleSphere", shadow: true, skills: ["Product","Figma"], description: ["BSOCBear aims to connect like-minded students by building an online community, whilst being an internal automation tool", "Developed a Discord bot for UNSW's largest society", "Used Python and Discord API to develop a discord bot to engage with 13,000+ students"]}
  ];

  return (
    <SectionOne id="projects">
      <div className="flex flex-col items-center gap-11">
        <HeaderTwo>
          Projects.
        </HeaderTwo>
        <HeaderThree className="text-center md:text-left">
          Here are some projects I have worked on, including both technical and non-technical.
        </HeaderThree>
        <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 gap-[25px] lg:gap-[50px] xl:gap-[100px] sm:p-[50px] md:p-[75px] lg:p-0">
          {projectList.map((project, index) => {
            return <ProjectSquare project={project} key={`project-${index}`} />
          })}
        </div>
      </div>
    </SectionOne>
  );
}

export default Projects;