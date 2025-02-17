import React, { useEffect } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import WorkExperienceDescription from './WorkExperienceDesciption';

const WorkExperienceModal = ({ workExperience, onClose, isOpen }) => {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    
    if (isOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !workExperience) return null;

  return (
    <div className="md:hidden fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div 
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div className="relative w-11/12 max-h-[90vh] bg-white rounded-lg p-6 overflow-y-auto z-10">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1 rounded-full transition-colors duration-200 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          <CancelIcon style={{ height: '45px', width: '45px' }} />
        </button>
        <WorkExperienceDescription workExperience={workExperience || {}} />
      </div>
    </div>
  );
};

export default WorkExperienceModal;