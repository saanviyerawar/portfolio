import MountainOne from "./MountainOne";
import MountainTwo from "./MountainTwo";
import MountainThree from "./MountainThree";
import React, { useContext, useEffect, useState } from "react"
import { ModeContext } from "../../contexts/ModeProvider";
import MountainFive from "./MountainFive";
import MountainFour from "./MountainFour";
import Clouds from "./Clouds";
import Birds from "./Birds";
import EveningBackground from "./EveningBackground";
import DayBackground from "./DayBackground";

function Hero() {
  const { mode } = useContext(ModeContext);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="h-[100vh]">
        <div className="relative w-full h-screen overflow-hidden">
          {mode === "dark"
            ? <>
                <div style={{ transform: `translateY(${scrollY * 1}px)` }}>
                  <EveningBackground />
                </div>
              </> 
            :
              <>
                <div>
                  <DayBackground />
                </div>
                <div style={{ transform: `translateX(${scrollY * 0.5}px)` }}>
                  <Clouds />
                </div>
              </>
          }
          <div style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
            <MountainFive />
          </div>
          <div style={{ transform: `translateY(${scrollY * 0.4}px)` }}>
            <MountainFour />
          </div>
          <div style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
            <MountainThree />
          </div>
          <div style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
            <MountainTwo />
          </div>
          <div>
            <MountainOne />
          </div>
          <div style={{ transform: `translateX(${scrollY * -0.3}px) translateY(${scrollY * -0.25}px)` }}>
            <Birds />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
