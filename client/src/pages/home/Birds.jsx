import React, { useContext } from "react"
import { ModeContext } from "../../contexts/ModeProvider";

function Birds() {

  const { mode } = useContext(ModeContext);

  return (
    <svg className="absolute h-screen top-0 left-1/2 transform -translate-x-1/2" width="5120" height="2160" viewBox="0 0 5120 2160" fill="none" xmlns="http://www.w3.org/2000/svg">
      {mode === "dark" ?
        <>
          <path d="M2052 1063.13L2069.94 1042L2107.92 1098L2145.9 1042L2167 1063.13" stroke="black" stroke-width="8"/>
          <path d="M1902 1035.13L1919.94 1014L1957.92 1070L1995.9 1014L2017 1035.13" stroke="black" stroke-width="8"/>
          <path d="M2192 1007.13L2209.94 986L2247.92 1042L2285.9 986L2307 1007.13" stroke="black" stroke-width="8"/>
        </>
        :
        <>
          <path d="M3402 736.132L3419.94 715L3457.92 771L3495.9 715L3517 736.132" stroke="black" stroke-width="8"/>
          <path d="M3252 708.132L3269.94 687L3307.92 743L3345.9 687L3367 708.132" stroke="black" stroke-width="8"/>
          <path d="M3542 680.132L3559.94 659L3597.92 715L3635.9 659L3657 680.132" stroke="black" stroke-width="8"/>
        </>
      }
    </svg>
  );
};

export default Birds;