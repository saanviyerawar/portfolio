import React from 'react';
import ProjectsSkillsSlider from "./ProjectsSkillsSlider";

function ProjectSquare({ projectName, skillsList }) {
  return (
    <div className="aspect-square flex flex-col items-center justify-center relative group">
      <ProjectsSkillsSlider skillsList={skillsList} />
      <div className="w-full h-full relative">
        <img src={`${projectName}-Project.png`} alt={`${projectName}`} className="w-full h-full object-contain rounded-lg" />
        <div className="absolute inset-0 bg-gray-300 bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-md rounded-lg">
          <span className="text-black text-xl">{projectName}</span>
        </div>
      </div>
      <ProjectsSkillsSlider skillsList={skillsList} />
    </div>
  );
}

export default ProjectSquare;
