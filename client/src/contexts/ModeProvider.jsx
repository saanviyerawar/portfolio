import React, { createContext, useState, useEffect } from 'react';

export const ModeContext = createContext();

export function ModeProvider({ children }) {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}
