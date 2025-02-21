import HeaderThree from "../../../components/HeaderThree";
import HeaderTwo from "../../../components/HeaderTwo";
import ProjectSquare from "../../../components/ProjectSquare";
import SectionOne from "../../../components/SectionOne";

function Projects () {

  const projectList = [
    // {title: "Nagaraj Music", image: "Nagaraj-Music", shadow: true, skills: ["Product", "Figma"], description: ["Nagaraj Music aims to adapt famous Bollywood music into Western musical notation", "Leveraged design thinking to create a product that sells in over 23 countries"]},
    {title: "Capital W", image: "CapitalW", shadow: false, skills: ["Product", "Figma","React", "HTML", "CSS"], description: ["Interconnect aims to break down social exclusivity barriers to connect non-English background international students into the wider student community", "Lead the winning team as a Product Manager", "Aims to solve the social disconnection of international students after COVID-19 lockdowns"]},
    {title: "Trust-o-Meter", image: "Trust-o-Meter", shadow: true, skills: ["Product", "Figma", "Javascript", "React", "HTML", "CSS"], description: ["Trust-o-meter is a website that determines the quality of the information provided on a link or content of a website", "Aims to solve the spread of disinformation across the digital platform", "Developed the full stack website using Javascript, React, HTML, CSS and AI"]},
    {title: "Outings", image: "Outings", shadow: true, skills: ["Product", "Figma", "Javascript", "React", "HTML", "CSS", "Python"], description: ["Outings aims to streamline details and logistics of outings with your friends", "Concept part of Blackbird Giants Founder (Cohort 6)", "Developed an MVP using Javascript and React"]},
    {title: "BSOCBear", image: "BSOCBear", shadow: false, skills: ["Python", "Product"], description: ["BSOCBear aims to connect like-minded students by building an online community, whilst being an internal automation tool", "Developed a Discord bot for UNSW's largest society", "Used Python and Discord API to develop a discord bot to engage with 13,000+ students"]},
    {title: "ProJector", image: "ProJector", shadow: true, skills: ["Python", "Javascript", "React", "HTML", "CSS", "Product", "Figma"], description: ["Projector aims to bridge the gap between companies and professionals, to streamline pairing of professional project-based work", "Achieved HD on UNSW capstone subject", "Lead a team of 5 as the team leader to develop a website"]},
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
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-[25px] lg:gap-[50px] xl:gap-[100px] sm:p-[50px] md:p-[75px] lg:p-0">
          {projectList.map((project, index) => {
            return <ProjectSquare project={project} key={`project-${index}`} />
          })}
        </div>
      </div>
    </SectionOne>
  );
}

export default Projects;