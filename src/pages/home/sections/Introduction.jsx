import React, { useState, useRef } from "react";
import HeaderOne from "../../../components/HeaderOne";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import SectionOne from "../../../components/SectionOne";

function Introduction() {
  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText] = useTypewriter({
    words: ["all things digital.", "product management.", "data science.", "data analytics.","digital transformation."],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 30
  });
  const textRef = useRef(null);

  const handleMouseMove = (e) => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <SectionOne id="introduction">
      <div className="flex flex-col md:flex-row justify-between h-auto md:h-[100vh] gap-6">
        <div 
          ref={textRef}
          className="flex self-center md:self-start md:sticky md:top-16 text-center md:text-left"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onMouseMove={handleMouseMove}
        >
          <HeaderOne className="text-6xl md:text-8xl">Hello,<br />I am <span className="underline">Saanvi.</span></HeaderOne>
          {hovered && 
            <img
              src={`${process.env.PUBLIC_URL}/Me.png`}
              alt="Saanvi"
              className="absolute h-[150px] w-[150px] pointer-events-none rounded-full object-cover opacity-80 translate-x-[-50%] translate-y-[-50%]"
              style={{
                left: `${mousePosition.x}px`,
                top: `${mousePosition.y}px`,
              }}
            />
          }
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
