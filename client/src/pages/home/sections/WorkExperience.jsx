import React from "react";
import HeaderTwo from "../../../components/HeaderTwo";
import HeaderThree from "../../../components/HeaderThree";
import SectionTwo from "../../../components/SectionTwo";
import HeaderOne from "../../../components/HeaderOne";

function WorkExperience () {
  return (
      <SectionTwo>
        <div className="flex flex-row justify-between h-[300vh]">
          <div className="flex flex-col gap-11 sticky top-[100px] self-start">
            <HeaderTwo>
              Work Experience.
            </HeaderTwo>
            <div className="w-[40%]">
              <HeaderThree>
                In the past I have worked at various different organisations (as an intern).
              </HeaderThree>
            </div>
          </div>
          <div className="py-[125px]">
            <div className="flex justify-center items-center w-[400px] h-[100px] bg-[#9F3B47] rounded-lg transform rotate-[5deg] sticky top-[225] self-start">
              <HeaderThree>
                Product Manager @ Mastercard
              </HeaderThree>
            </div>
            <div className="flex justify-center items-center w-[400px] h-[100px] bg-[#D37B44] rounded-lg transform rotate-[-5deg]">Human Centred Designer</div>
            <div className="flex justify-center items-center w-[400px] h-[100px] bg-[#B25754] rounded-lg transform rotate-[10deg]">Technical Business Analyst</div>
            <div className="flex justify-center items-center w-[400px] h-[100px] bg-[#9F3B47] rounded-lg transform rotate-[-9deg]">Digital Journey Optimisation Manager</div>
            <div className="flex justify-center items-center w-[400px] h-[100px] bg-[#D37B44] rounded-lg transform rotate-[15deg]">Digital A.I. Engineer</div>
            <div className="flex justify-center items-center w-[400px] h-[100px] bg-[#B25754] rounded-lg transform rotate-[-7deg]"></div>
          </div>
        </div>
      </SectionTwo>
  );
}

export default WorkExperience;