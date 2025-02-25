import React, { useState, useContext } from "react";
import HeaderTwo from "../../../components/HeaderTwo";
import HeaderThree from "../../../components/HeaderThree";
import SectionTwo from "../../../components/SectionTwo";
import WorkExperienceCard from "../../../components/WorkExperienceCard";
import WorkExperienceDescription from "../../../components/WorkExperienceDesciption";
import WorkExperienceModal from "../../../components/WorkExperienceModal";
import { ModeContext } from "../../../contexts/ModeProvider";

function WorkExperience() {
  const [hoveredWorkExperience, setHoveredWorkExperience] = useState("");
  const [clickedWorkExperience, setClickedWorkExperience] = useState("");
  const { mode } = useContext(ModeContext);
  
  const workExperienceList = [
    { colour: `${mode === "dark" ? "#9F3B47" : "#97D7FF"}`, textColour: `${mode === "dark" ? "#FFFFFF" : "#000000"}`, rotate: "5deg", top: { default: "40px", sm: "60px", md: "80px", lg: "100px" },  information: { title: "Data Science & Analytics", company: "Atlassian", image: "Atlassian", description: [""]}},
    { colour: `${mode === "dark" ? "#D37B44" : "#98CB3D"}`, textColour: `${mode === "dark" ? "#FFFFFF" : "#000000"}`, rotate: "-5deg", top: { default: "80px", sm: "120px", md: "160px", lg: "200px" }, information: { title: "Data & Digital Transformation", company: "PwC", image: "PwC", description: [""] } },
    { colour: `${mode === "dark" ? "#B25754" : "#97D7FF"}`, textColour: `${mode === "dark" ? "#FFFFFF" : "#000000"}`, rotate: "5deg", top: { default: "120px", sm: "180px", md: "240px", lg: "300px" },  information: { title: "Technology Advisory", company: "NSW", image: "NSW", description: [""]}},
    { colour: `${mode === "dark" ? "#9F3B47" : "#98CB3D"}`, textColour: `${mode === "dark" ? "#FFFFFF" : "#000000"}`, rotate: "-5deg", top: { default: "160px", sm: "240px", md: "320px", lg: "400px" }, information: { title: "Data Science Ambassador", company: "UNSW",  image: "UNSW", description: [""]}}
  ];

  return (
    <SectionTwo id="work-experience">
      <div className="flex flex-col md:flex-row gap-[50px] md:gap-[100px] justify-between h-auto">
        <div className="flex flex-col gap-11">
          <HeaderTwo className="text-center md:text-left">Work Experience.</HeaderTwo>
          <HeaderThree className="text-center md:text-left">I have gained valuable experience through internships at multiple organizations, where I have contributed to various projects and developed key skills.</HeaderThree>
        </div>
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <div className="flex flex-col gap-[30vh] w-[80%] md:w-auto">
            {workExperienceList.map((workExperience, index) => (
              <WorkExperienceCard
                workExperience={workExperience}
                key={`workExperience-${index}`}
                onMouseEnter={() => setHoveredWorkExperience(workExperience)}
                onMouseLeave={() => setHoveredWorkExperience("")}
                onClick={() => setClickedWorkExperience(
                  clickedWorkExperience?.information?.title === workExperience.information.title
                    ? "" : workExperience
                )}
                selected={clickedWorkExperience?.information?.title === workExperience.information.title}
              />
            ))}
          </div>
        </div>
      </div>
      <WorkExperienceModal
        workExperience={clickedWorkExperience}
        isOpen={!!clickedWorkExperience}
        onClose={() => setClickedWorkExperience("")}
      />
    </SectionTwo>
  );
}

export default WorkExperience;
