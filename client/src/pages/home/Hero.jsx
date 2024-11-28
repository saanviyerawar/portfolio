import React, { useContext } from 'react';
import { ModeContext } from '../../contexts/ModeProvider';
import Background from "./Background";

function Hero() {
  const { mode, setMode } = useContext(ModeContext);

  const toggleColor = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
  <>
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        <Background />
      </div>
      <div className="p-5 text-center">
        <h1>hi</h1>
        <button
          onClick={toggleColor}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
        >
          Toggle SVG Color
        </button>
      </div>
    </div>
  </>
  );
}

export default Hero;
