import React from "react";
import HeaderOne from "../../../components/HeaderOne";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Page from "../../../components/Page";
import SectionOne from "../../../components/SectionOne";

function Introduction() {
  const [typedText] = useTypewriter({
    words: ["all things digital.", "product management.", "design.", "software engineering."],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50
  });

  return (
    <SectionOne>
      <div className="flex flex-row justify-between gap-6 h-[75vh]">
        <div className="sticky top-16 self-start">
          <HeaderOne className="text-8xl">Hello,<br />I am Min.</HeaderOne>
        </div>
        <div className="flex flex-col justify-center h-full">
          <HeaderOne>
            And I am passionate about
          </HeaderOne>
          <HeaderOne>
            {typedText}
            <span>
              <Cursor cursorStyle="|" />
            </span>
          </HeaderOne>
        </div>
      </div>
    </SectionOne>
  );
}

export default Introduction;
