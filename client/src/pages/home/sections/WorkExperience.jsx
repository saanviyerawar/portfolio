import React from "react";
import HeaderTwo from "../../../components/HeaderTwo";
import HeaderThree from "../../../components/HeaderThree";
import SectionTwo from "../../../components/SectionTwo";

function WorkExperience () {
  return (
    <SectionTwo>
      <div className="flex flex-row justify-between h-[200vh]">
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
        <div className="flex flex-col py-[125px] gap-[30vh]">
          <div className="flex justify-center items-center w-[400px] h-[100px] bg-[#9F3B47] rounded-lg transform rotate-[5deg] sticky top-[225px] self-start">
            <HeaderThree>
              Product Manager @ Mastercard
            </HeaderThree>
          </div>
          <div className="flex justify-center items-center w-[400px] h-[100px] bg-[#D37B44] rounded-lg transform rotate-[-5deg] sticky top-[325px] self-start">Human Centred Designer</div>
          <div className="flex justify-center items-center w-[400px] h-[100px] bg-[#B25754] rounded-lg transform rotate-[10deg] sticky top-[425px] self-start">Technical Business Analyst</div>
          <div className="flex justify-center items-center w-[400px] h-[100px] bg-[#9F3B47] rounded-lg transform rotate-[-9deg] sticky top-[525px] self-start">Digital Journey Optimisation Manager</div>
          <div className="flex justify-center items-center w-[400px] h-[100px] bg-[#D37B44] rounded-lg transform rotate-[15deg] sticky top-[625px] self-start">Digital A.I. Engineer</div>
        </div>
      </div>
    </SectionTwo>
  );
}

export default WorkExperience;