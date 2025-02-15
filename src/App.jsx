import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ModeContext } from './contexts/ModeProvider';
import Home from './pages/home/Home';
import MenuButton from './components/MenuButton';
import './styles/index.css';
import DynamicFavicon from './components/DynamicFavicon';

function App() {
  const { mode } = useContext(ModeContext);

  return (
    <div className={mode}>
      <DynamicFavicon />
      <MenuButton />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
