import React from 'react';

function HeaderThree({ children, className }) {
  const baseClasses = "text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold";
  const combinedClasses = `${baseClasses} ${className ? className : ''}`;
  
  return (
    <p className={combinedClasses}>
      {children}
    </p>
  );
}

export default HeaderThree;

