import React from 'react';

function HeaderOne({ children, className }) {
  const baseClasses = "text-5xl font-extrabold";
  const combinedClasses = `${baseClasses} ${className ? className : ''}`;
  
  return (
    <p className={combinedClasses}>
      {children}
    </p>
  );
}

export default HeaderOne;
