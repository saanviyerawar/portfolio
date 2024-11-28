import React, { useState, useEffect, useRef, useContext } from 'react';
import MapIcon from '@mui/icons-material/Map';
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { ModeContext } from '../contexts/ModeProvider';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { mode, setMode } = useContext(ModeContext);

  const toggleColor = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-2 left-2 z-50" ref={menuRef}>
      <button
        className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-4xl focus:outline-none hover:bg-blue-700 cursor-pointer clickable"
        onClick={toggleMenu}
      >
        <MapIcon style={{ color: 'white', fontSize: 50 }} />
      </button>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 bg-white border border-gray-300 shadow-lg rounded-lg p-2 z-50 inline-block">
          <ul className="list-none p-0 m-0 whitespace-nowrap">
            <li className="p-2 w-48 hover:bg-gray-100 hover:font-bold cursor-pointer flex items-center">
              <WorkIcon className="mr-2" /> Work Experience
            </li>
            <li className="p-2 w-48 hover:bg-gray-100 hover:font-bold cursor-pointer flex items-center">
              <BuildIcon className="mr-2" /> Projects
            </li>
            <li className="p-2 w-48 hover:bg-gray-100 hover:font-bold cursor-pointer flex items-center">
              <ContactMailIcon className="mr-2" /> Contact
            </li>
            <li 
              className="p-2 w-48 hover:bg-gray-100 hover:font-bold cursor-pointer flex items-center clickable"
              onClick={toggleColor}
            >
              {mode === "dark" ? (
                <>
                  <Brightness7Icon className="mr-2" /> Day
                </>
              ) : (
                <>
                  <Brightness4Icon className="mr-2" /> Evening
                </>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MenuButton