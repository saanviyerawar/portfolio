import { useContext, useEffect } from 'react';
import { ModeContext } from '../contexts/ModeProvider';

const DynamicFavicon = () => {
  const { mode } = useContext(ModeContext);

  useEffect(() => {
    // Get the existing favicon element that's in your index.html
    const existingFavicon = document.querySelector("link[rel='icon']");
    
    const svg = `
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
        <text y='.9em' font-size='90'>${mode === 'dark' ? '🌄' : '☀️'}</text>
      </svg>
    `;
    
    // Update the href of the existing favicon
    if (existingFavicon) {
      existingFavicon.setAttribute('href', `data:image/svg+xml,${encodeURIComponent(svg)}`);
    }
  }, [mode]); // Update whenever mode changes

  // Component doesn't render anything visible
  return null;
};

export default DynamicFavicon;