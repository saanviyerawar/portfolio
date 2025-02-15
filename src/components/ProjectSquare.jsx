import React from 'react';
import ProjectsSkillsSlider from "./ProjectsSkillsSlider";
import DescriptionCard from './DescriptionCard';
import HeaderThree from './HeaderThree';

function ProjectSquare({ project }) {
  return (
    <div className="aspect-square flex flex-col items-center justify-center relative group">
      <div className={`w-full h-full relative ${project.shadow ? "shadow-2xl" : ""}`}>
        <img 
          src={`${process.env.PUBLIC_URL}/${project.image}-Project.png`} 
          alt={`${project.title}`} 
          className="w-full h-full object-cover object-center rounded-lg"
        />
        <div className="flex flex-col absolute inset-0 p-4 bg-gray-300 bg-opacity-80 items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-md rounded-lg gap-[5px] md:gap-[20px]">
          <HeaderThree>{project.title}</HeaderThree>
          {project.description.map((description, index) => {
            return <DescriptionCard description={description} key={`project-${index}`} />
          })}
        </div>
      </div>
      <ProjectsSkillsSlider skillsList={project.skills} />
    </div>
  );
}

export default ProjectSquare;
