import MountainOne from "./svgs/MountainOne";
import MountainTwo from "./svgs/MountainTwo";
import MountainThree from "./svgs/MountainThree";
import React, { useContext, useEffect, useState } from "react"
import { ModeContext } from "../../contexts/ModeProvider";
import MountainFive from "./svgs/MountainFive";
import MountainFour from "./svgs/MountainFour";
import Clouds from "./svgs/Clouds";
import Birds from "./svgs/Birds";
import EveningBackground from "./svgs/EveningBackground";
import DayBackground from "./svgs/DayBackground";

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
                <div style={{ transform: `translateX(${scrollY * 0.3}px)` }}>
                  <Clouds />
                </div>
              </>
          }
          <div style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
            <MountainFive />
          </div>
          <div style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
            <MountainFour />
          </div>
          <div style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
            <MountainThree />
          </div>
          <div style={{ transform: `translateX(${scrollY * -0.2}px) translateY(${scrollY * -0.25}px)` }}>
            <Birds />
          </div>
          <div 
            className="h-screen flex items-center justify-center text-white text-9xl font-bold transform-gpu bg-transparent"
            style={{ 
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          >
            <svg width="800" height="209" viewBox="0 0 1368 209" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                className="hero-text"
                d="M183.9 158.9C191.7 158.9 197.1 154.7 200.1 146.3C203.1 137.7 204.6 123.8 204.6 104.6L205.2 31.1C205.2 20.5 207.6 12.8 212.4 7.99999C217.4 2.99998 225.9 0.499981 237.9 0.499981C245.3 0.499981 251.2 1.69998 255.6 4.09999C260.2 6.49999 264.1 11.2 267.3 18.2C270.5 25.2 272.7 34.7 273.9 46.7C275.1 58.7 275.7 74.6 275.7 94.4C275.7 106.2 274.7 117.2 272.7 127.4C270.7 137.6 268 146.5 264.6 154.1C261.2 161.7 257.1 168.6 252.3 174.8C247.7 180.8 242.8 185.8 237.6 189.8C232.4 193.8 226.9 197.2 221.1 200C215.3 202.6 209.6 204.5 204 205.7C198.6 206.7 193.3 207.2 188.1 207.2C170.1 207.2 153.8 201.5 139.2 190.1C124.8 201.9 108.5 207.8 90.3 207.8C82.5 207.8 74.7 206.7 66.9 204.5C59.1 202.1 51.1 198.1 42.9 192.5C34.9 186.9 27.8 180 21.6 171.8C15.4 163.4 10.3 152.6 6.3 139.4C2.5 126 0.6 111.2 0.6 95C0.6 68.8 1.8 49 4.2 35.6C6.8 22.2 10.6 13.1 15.6 8.29999C20.8 3.49999 28.3 1.09999 38.1 1.09999C46.3 1.09999 52.8 2.29999 57.6 4.7C62.4 6.89999 65.8 10.2 67.8 14.6C69.8 19 70.8 24.7 70.8 31.7L71.1 104.9C71.1 124.1 72.6 138 75.6 146.6C78.6 155.2 84.5 159.5 93.3 159.5C97.7 159.5 101 157.7 103.2 154.1C105.4 150.3 106.9 144.3 107.7 136.1C105.1 124.5 103.8 106.4 103.8 81.8C103.8 68 104.1 57 104.7 48.8C105.3 40.6 106.2 33.5 107.4 27.5C108.6 21.5 110.6 17.2 113.4 14.6C116.2 12 119.3 10.2 122.7 9.19999C126.3 7.99999 131.2 7.39998 137.4 7.39998C141 7.39998 144.1 7.49999 146.7 7.7C149.5 7.89999 152.1 8.49999 154.5 9.49999C156.9 10.5 158.9 11.4 160.5 12.2C162.1 13 163.6 14.5 165 16.7C166.4 18.9 167.5 20.8 168.3 22.4C169.1 24 169.8 26.6 170.4 30.2C171.2 33.8 171.7 37 171.9 39.8C172.3 42.4 172.5 46.4 172.5 51.8C172.7 57 172.8 61.6 172.8 65.6C173 69.4 173.1 74.9 173.1 82.1C173.1 107.3 171.8 125.9 169.2 137.9C170 145.1 171.5 150.4 173.7 153.8C175.9 157.2 179.3 158.9 183.9 158.9ZM384.23 207.8C359.83 207.8 339.63 201.5 323.63 188.9C307.83 176.3 299.93 159.1 299.93 137.3C299.93 113.7 307.73 95.1 323.33 81.5C339.13 67.7 359.43 60.8 384.23 60.8C407.63 60.8 424.73 65 435.53 73.4C446.53 81.6 452.03 92.9 452.03 107.3C452.03 110.1 451.63 112.8 450.83 115.4C450.23 118 449.13 120.6 447.53 123.2C446.13 125.6 444.13 127.9 441.53 130.1C439.13 132.1 436.33 134 433.13 135.8C429.93 137.4 426.13 138.7 421.73 139.7C417.33 140.5 412.63 140.9 407.63 140.9L365.33 141.2C367.33 147.6 370.93 152.7 376.13 156.5C381.33 160.1 387.93 161.9 395.93 161.9C404.53 161.9 413.33 160.8 422.33 158.6C426.13 157.6 430.23 156 434.63 153.8C439.23 151.6 442.53 150.5 444.53 150.5C447.93 150.5 450.53 151.5 452.33 153.5C454.33 155.5 455.33 158 455.33 161C455.33 164.6 453.73 169 450.53 174.2C447.33 179.2 442.83 184.3 437.03 189.5C431.43 194.5 423.93 198.8 414.53 202.4C405.13 206 395.03 207.8 384.23 207.8ZM363.83 122C377.63 121.8 385.13 121.7 386.33 121.7C389.33 121.7 391.53 119.9 392.93 116.3C393.93 113.7 394.43 110.1 394.43 105.5C394.43 92.9 390.63 86.6 383.03 86.6C380.23 86.6 377.43 88.1 374.63 91.1C372.03 94.1 369.73 98.4 367.73 104C365.73 109.4 364.43 115.4 363.83 122ZM546.148 160.7C546.148 176.9 543.448 188.5 538.048 195.5C532.648 202.5 524.348 206 513.148 206C501.948 206 493.748 202.9 488.548 196.7C483.348 190.3 480.748 179.1 480.748 163.1L480.148 36.5C480.148 31.3 480.648 26.7 481.648 22.7C482.848 18.7 484.348 15.3 486.148 12.5C488.148 9.69999 490.548 7.39999 493.348 5.59999C496.148 3.79999 499.148 2.49999 502.348 1.69998C505.748 0.899982 509.348 0.499981 513.148 0.499981C524.148 0.499981 532.348 2.69998 537.748 7.09999C543.348 11.5 546.148 20.4 546.148 33.8V160.7ZM662.405 93.8C662.405 89.2 659.805 86.9 654.605 86.9C650.805 86.9 647.405 89 644.405 93.2C641.405 97.4 639.105 102.7 637.505 109.1C635.905 115.3 635.105 121.8 635.105 128.6C635.105 138.6 638.105 146.7 644.105 152.9C650.305 159.1 658.605 162.2 669.005 162.2C679.205 162.2 688.005 161 695.405 158.6C698.405 157.8 702.005 156.3 706.205 154.1C710.605 151.9 713.705 150.8 715.505 150.8C718.305 150.8 720.605 151.3 722.405 152.3C724.205 153.3 725.405 154.5 726.005 155.9C726.805 157.3 727.205 158.8 727.205 160.4C727.205 163.2 726.205 166.6 724.205 170.6C722.405 174.6 719.505 178.8 715.505 183.2C711.505 187.6 706.805 191.7 701.405 195.5C696.205 199.1 689.705 202.1 681.905 204.5C674.105 206.9 665.905 208.1 657.305 208.1C632.505 208.1 612.105 201.5 596.105 188.3C580.105 174.9 572.105 156.6 572.105 133.4C572.105 118.6 575.705 105.7 582.905 94.7C590.305 83.5 600.405 75.1 613.205 69.5C626.005 63.7 640.705 60.8 657.305 60.8C673.105 60.8 686.105 62.7 696.305 66.5C706.705 70.1 714.105 75 718.505 81.2C722.905 87.4 725.105 94.8 725.105 103.4C725.105 107.2 724.305 111.1 722.705 115.1C721.305 119.1 719.005 123.1 715.805 127.1C712.805 131.1 708.305 134.4 702.305 137C696.305 139.4 689.305 140.6 681.305 140.6C677.705 140.6 674.705 140.4 672.305 140C670.105 139.6 667.705 138.8 665.105 137.6C662.705 136.2 660.905 134 659.705 131C658.505 128 657.905 124.2 657.905 119.6C657.905 115.6 658.605 110.8 660.005 105.2C661.605 99.4 662.405 95.6 662.405 93.8ZM850.095 134.9C850.095 124.5 848.795 115.4 846.195 107.6C843.595 99.6 839.795 95.6 834.795 95.6C831.395 95.6 828.395 97.6 825.795 101.6C823.195 105.6 821.295 110.5 820.095 116.3C818.895 122.1 818.295 128.3 818.295 134.9C818.295 145.1 819.695 154.1 822.495 161.9C825.295 169.5 829.295 173.3 834.495 173.3C839.695 173.3 843.595 169.5 846.195 161.9C848.795 154.3 850.095 145.3 850.095 134.9ZM834.495 208.1C818.895 208.1 804.795 205.3 792.195 199.7C779.795 194.1 769.795 185.7 762.195 174.5C754.795 163.3 751.095 150.2 751.095 135.2C751.095 112.4 758.895 94.3 774.495 80.9C790.095 67.5 810.095 60.8 834.495 60.8C858.895 60.8 878.795 67.5 894.195 80.9C909.595 94.3 917.295 112.4 917.295 135.2C917.295 157.8 909.395 175.6 893.595 188.6C877.995 201.6 858.295 208.1 834.495 208.1ZM1120.35 126.8C1120.35 115.6 1115.85 110 1106.85 110C1102.85 110 1099.85 112.3 1097.85 116.9C1095.85 121.5 1094.85 127.3 1094.85 134.3C1094.85 144.9 1094.65 153.7 1094.25 160.7C1094.05 167.7 1093.45 174 1092.45 179.6C1091.45 185.2 1090.25 189.6 1088.85 192.8C1087.45 196 1085.55 198.7 1083.15 200.9C1080.75 202.9 1078.05 204.3 1075.05 205.1C1072.05 205.7 1068.25 206 1063.65 206C1056.65 206 1050.95 205 1046.55 203C1042.35 201 1039.35 198.2 1037.55 194.6C1035.75 191 1034.85 186.5 1034.85 181.1V126.8C1034.85 115.6 1030.35 110 1021.35 110C1017.75 110 1014.75 112.1 1012.35 116.3C1010.15 120.3 1009.05 125.6 1009.05 132.2V173.9C1009.05 185.9 1006.55 194.3 1001.55 199.1C996.552 203.7 987.752 206 975.152 206C963.352 206 955.252 203.3 950.852 197.9C946.652 192.3 944.552 183.2 944.552 170.6V96.8C944.552 86.6 947.252 78.4 952.652 72.2C958.252 66 965.652 62.9 974.852 62.9C991.252 62.9 1001.65 68.2 1006.05 78.8C1013.65 73.2 1021.05 69.3 1028.25 67.1C1035.65 64.9 1044.25 63.8 1054.05 63.8C1068.85 63.8 1079.55 70.2 1086.15 83C1087.15 82.2 1088.15 81.4 1089.15 80.6C1104.55 69.4 1123.45 63.8 1145.85 63.8C1160.05 63.8 1170.25 69.2 1176.45 80C1182.65 90.8 1185.75 108.9 1185.75 134.3C1185.75 144.9 1185.55 153.7 1185.15 160.7C1184.95 167.7 1184.35 174 1183.35 179.6C1182.35 185.2 1181.05 189.6 1179.45 192.8C1178.05 196 1175.95 198.7 1173.15 200.9C1170.55 202.9 1167.55 204.3 1164.15 205.1C1160.95 205.7 1156.85 206 1151.85 206C1144.25 206 1138.05 205 1133.25 203C1128.65 201 1125.35 198.2 1123.35 194.6C1121.35 191 1120.35 186.5 1120.35 181.1V126.8ZM1296.53 207.8C1272.13 207.8 1251.93 201.5 1235.93 188.9C1220.13 176.3 1212.23 159.1 1212.23 137.3C1212.23 113.7 1220.03 95.1 1235.63 81.5C1251.43 67.7 1271.73 60.8 1296.53 60.8C1319.93 60.8 1337.03 65 1347.83 73.4C1358.83 81.6 1364.33 92.9 1364.33 107.3C1364.33 110.1 1363.93 112.8 1363.13 115.4C1362.53 118 1361.43 120.6 1359.83 123.2C1358.43 125.6 1356.43 127.9 1353.83 130.1C1351.43 132.1 1348.63 134 1345.43 135.8C1342.23 137.4 1338.43 138.7 1334.03 139.7C1329.63 140.5 1324.93 140.9 1319.93 140.9L1277.63 141.2C1279.63 147.6 1283.23 152.7 1288.43 156.5C1293.63 160.1 1300.23 161.9 1308.23 161.9C1316.83 161.9 1325.63 160.8 1334.63 158.6C1338.43 157.6 1342.53 156 1346.93 153.8C1351.53 151.6 1354.83 150.5 1356.83 150.5C1360.23 150.5 1362.83 151.5 1364.63 153.5C1366.63 155.5 1367.63 158 1367.63 161C1367.63 164.6 1366.03 169 1362.83 174.2C1359.63 179.2 1355.13 184.3 1349.33 189.5C1343.73 194.5 1336.23 198.8 1326.83 202.4C1317.43 206 1307.33 207.8 1296.53 207.8ZM1276.13 122C1289.93 121.8 1297.43 121.7 1298.63 121.7C1301.63 121.7 1303.83 119.9 1305.23 116.3C1306.23 113.7 1306.73 110.1 1306.73 105.5C1306.73 92.9 1302.93 86.6 1295.33 86.6C1292.53 86.6 1289.73 88.1 1286.93 91.1C1284.33 94.1 1282.03 98.4 1280.03 104C1278.03 109.4 1276.73 115.4 1276.13 122Z" fill="#ffffff"
              />
            </svg>
          </div>
          <div style={{ transform: `translateY(${scrollY * 0.1}px)`}}>
            <MountainTwo />
          </div>
          <div>
            <MountainOne />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
