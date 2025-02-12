import React, { useContext } from "react"
import { ModeContext } from "../../../contexts/ModeProvider";

function Birds() {

  const { mode } = useContext(ModeContext);

  return (
    <svg className="absolute h-screen top-0 left-1/2 transform -translate-x-1/2" width="5120" height="2160" viewBox="0 0 5120 2160" fill="none" xmlns="http://www.w3.org/2000/svg">
      {mode === "dark" ?
        <>
          <path d="M1474 506.132L1491.94 485L1529.92 541L1567.9 485L1589 506.132" stroke="black" strokeWidth="8"/>
          <path d="M1324 478.132L1341.94 457L1379.92 513L1417.9 457L1439 478.132" stroke="black" strokeWidth="8"/>
          <path d="M1614 450.132L1631.94 429L1669.92 485L1707.9 429L1729 450.132" stroke="black" strokeWidth="8"/>
        </>
        :
        <>
          <path d="M3402 736.132L3419.94 715L3457.92 771L3495.9 715L3517 736.132" stroke="black" strokeWidth="8"/>
          <path d="M3252 708.132L3269.94 687L3307.92 743L3345.9 687L3367 708.132" stroke="black" strokeWidth="8"/>
          <path d="M3542 680.132L3559.94 659L3597.92 715L3635.9 659L3657 680.132" stroke="black" strokeWidth="8"/>
        </>
      }
    </svg>
  );
};

export default Birds;