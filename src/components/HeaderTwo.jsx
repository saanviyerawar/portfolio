import React from 'react';

function HeaderTwo({ children, className }) {
  const baseClasses = "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold";
  const combinedClasses = `${baseClasses} ${className ? className : ''}`;
  
  return (
    <p className={combinedClasses}>
      {children}
    </p>
  );
}

export default HeaderTwo;
