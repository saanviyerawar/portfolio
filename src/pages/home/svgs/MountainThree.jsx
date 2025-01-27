import React, { useContext, useEffect, useState } from "react"
import { ModeContext } from "../../../contexts/ModeProvider";

function MountainThree() {
  // Get global variable and defaults
  const { mode } = useContext(ModeContext);
  const [fill, setFill] = useState(mode === "dark" ? "#632E42" : "#50852F");

  // Update colour upon change
  useEffect(() => {
    setFill(mode === "dark" ? "#632E42" : "#50852F");
  }, [mode]);

  return (
    <svg className="absolute h-screen top-0 left-1/2 transform -translate-x-1/2" width="5120" height="2160" viewBox="0 0 5120 2160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3973.1 1187.12C4004.72 1161.21 4056.54 1176.32 4078.5 1187.12H4592V2160H4045.5H2523.89V1932.19L2717.12 1802.61L2804.95 1741.42L2976.22 1676.63C2996.71 1670.63 3042.48 1699.67 3088.15 1676.63C3088.15 1619.04 3487.39 1463.91 3553.27 1463.91C3584.88 1417.83 3685.56 1251.03 3763.15 1223.44C3814.38 1211.44 3941.48 1213.04 3973.1 1187.12Z" fill={fill}/>
      <path d="M2490.14 1649.53C2700.5 1703.92 2890.41 1827.4 2960.53 1876.3V2160H1546H1041V1210.78L1217.13 1309.92C1268.26 1326.62 1383.8 1313.84 1394.32 1331.02C1407.47 1352.48 1665.61 1490.95 1687.52 1512.42C1709.44 1533.89 1924.34 1505.27 1937.48 1512.42C1948 1518.15 2043.5 1604.5 2094.63 1620C2137 1620 2279.78 1595.14 2490.14 1649.53Z" fill={fill}/>
    </svg>
  );
};

export default MountainThree;