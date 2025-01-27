import React from 'react';

function HeaderTwo({ children, className }) {
  const baseClasses = "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold";
  const combinedClasses = `${baseClasses} ${className ? className : ''}`;
  
  return (
    <p className={combinedClasses}>
      {children}
    </p>
  );
}

export default HeaderTwo;
