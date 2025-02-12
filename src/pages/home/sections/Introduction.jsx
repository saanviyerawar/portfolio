import React from "react";
import HeaderOne from "../../../components/HeaderOne";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import SectionOne from "../../../components/SectionOne";

function Introduction() {
  const [typedText] = useTypewriter({
    words: ["all things digital.", "product management.", "design.", "software engineering."],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 30
  });

  return (
    <SectionOne>
      <div className="flex flex-col md:flex-row justify-between h-auto md:h-[75vh] gap-6">
        <div className="flex self-center md:self-start md:sticky md:top-16 text-center md:text-left">
          <HeaderOne className="text-6xl md:text-8xl">Hello,<br />I am Min.</HeaderOne>
        </div>
        <div className="flex flex-col justify-center h-full w-full md:w-[40vw] text-center md:text-left">
          <div className="relative">
          <HeaderOne className="text-xl sm:text-2xl md:text-6xl">
            And I am passionate about {typedText}<Cursor cursorStyle="|" />
          </HeaderOne>
          </div>
        </div>
      </div>
    </SectionOne>
  );
}

export default Introduction;
