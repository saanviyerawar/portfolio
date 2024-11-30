import React, { useContext, useEffect, useState } from "react"
import { ModeContext } from "../../contexts/ModeProvider";

function MountainFive() {
  // Get global variable and defaults
  const { mode } = useContext(ModeContext);
  const [fill, setFill] = useState(mode === "dark" ? "#B25754" : "#7092B2");

  // Update colour upon change
  useEffect(() => {
    setFill(mode === "dark" ? "#B25754" : "#7092B2");
  }, [mode]);

  return (
    <svg className="absolute h-screen top-0 left-1/2 transform -translate-x-1/2" width="5120" height="2160" viewBox="0 0 5120 2160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1151.23 1001.32L1056 1228V2160H1603.55H2104.16H2410.95H3300V1570.05L2218.34 1265.09L2104.16 1243.7L1660.63 972.805L1603.55 1012.01V1026.27C1534.75 965.676 1391.88 845.198 1370.8 848.05C1349.72 850.901 1215.64 951.419 1151.23 1001.32Z" fill={fill}/>
    </svg>
  );
};

export default MountainFive;