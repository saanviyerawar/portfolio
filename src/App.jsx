import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ModeContext } from './contexts/ModeProvider';
import Home from './pages/home/Home';
import MenuButton from './components/MenuButton';
import "./styles/index.css";

function App() {
  const { mode } = useContext(ModeContext);

  return (
    <div className={mode}>
      <Router basename="/portfolio">
        <MenuButton />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
