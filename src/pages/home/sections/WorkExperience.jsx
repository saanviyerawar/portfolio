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
    { colour: `${mode === "dark" ? "#9F3B47" : "#97D7FF"}`, textColour: `${mode === "dark" ? "#FFFFFF" : "#000000"}`, rotate: "5deg", top: { default: "40px", sm: "60px", md: "80px", lg: "100px" },  information: { title: "Data Science & Analytics", company: "Atlassian", image: "Atlassian", description: ["Worked in the product team that leads Click-to-pay in Australia", "Uplifted Click-to-pay within Australia, with total transactions growing 17%", "Developed Click-to-pay's integration within Menulog and secured contractual agreement", "Designed and	optimised UX flows for Click-to-pay experience with Australia's largest merchants, including Chemist Warehouse and Ticketek"]}},
    { colour: `${mode === "dark" ? "#D37B44" : "#98CB3D"}`, textColour: `${mode === "dark" ? "#FFFFFF" : "#000000"}`, rotate: "-5deg", top: { default: "80px", sm: "120px", md: "160px", lg: "200px" }, information: { title: "Data & Digital Transformation", company: "PwC",  image: "PwC", description: ["Worked on projects for ASIC to uplift products and create new products that impacts 100,000+ organisations", "Conducted user research and usability testing with regulated organisations", "Lead the Moneysmart Homepage usability research project", "Assisted with navigating ambiguous problem spaces and ideating solutions", "Contributed to ASIC's 2030 digital vision to \"become a leading digitally enabled and data-informed regulator by 2030\""]}},
    { colour: `${mode === "dark" ? "#9F3B47" : "#98CB3D"}`, textColour: `${mode === "dark" ? "#FFFFFF" : "#000000"}`, rotate: "5deg", top: { default: "160px", sm: "240px", md: "320px", lg: "400px" }, information: { title: "Digital Journey Optimisation", company: "CBA",  image: "CBA", description: ["Drove innovation and customer experience with CommBank's new loyalty program ~ Yello", "Created and tested assets that was deliver to the live CommBank application to millions of customers", "Streamlined internal processes to reduce time by 50% for asset generation for Yello", "Conducted in-depth competitor research"]}}
  ];

  return (
    <SectionTwo id="work-experience">
      <div className="flex flex-col md:flex-row gap-[50px] md:gap-[100px] justify-between h-auto">
        <div className="flex flex-col gap-11">
          <HeaderTwo className="text-center md:text-left">Work Experience.</HeaderTwo>
          <HeaderThree className="text-center md:text-left">I have gained valuable experience through internships at multiple organizations, where I have contributed to various projects and developed key skills.</HeaderThree>
          {clickedWorkExperience || hoveredWorkExperience
            ? <div 
                className="hidden md:block h-auto w-full rounded-xl flex items-center justify-center sticky top-[3vh] lg:top-[10vh] xl:top-[20vh] self-start"
                style={{ borderColor: clickedWorkExperience?.colour || hoveredWorkExperience?.colour, borderWidth: "5px" }}
              >
                <WorkExperienceDescription workExperience={clickedWorkExperience || hoveredWorkExperience} />
              </div>
            // : <div className="hidden border-white border-[5px] md:block h-[50vh] w-full rounded-xl flex items-center justify-center sticky top-[3vh] lg:top-[10vh] xl:top-[20vh] self-start" />
            : <p className="sticky top-[3vh] lg:top-[10vh] xl:top-[20vh] self-start">Click on one of the boxes to learn more!</p>
          }
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
