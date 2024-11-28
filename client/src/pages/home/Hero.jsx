import React, { useEffect } from 'react';
import Background from "./Background";

function Hero() {

  // const handleScroll = () => {
  //   const scrollY = window.scrollY;
  
  //   // Adjust the parallax speed factor for each cloud
  //   const rightCloud = document.getElementById('right-cloud');
  //   const middleCloud = document.getElementById('middle-cloud');
  //   const leftCloud = document.getElementById('left-cloud');
  
  //   if (rightCloud) rightCloud.style.transform = `translateY(${scrollY * 0.2}px)`;
  //   if (middleCloud) middleCloud.style.transform = `translateY(${scrollY * 0.4}px)`;
  //   if (leftCloud) leftCloud.style.transform = `translateY(${scrollY * 6}px)`;
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
  <>
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        <Background />
      </div>
    </div>
  </>
  );
}

export default Hero;
