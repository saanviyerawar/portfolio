import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { ModeProvider } from './contexts/ModeProvider'; // Import ModeProvider
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { ParallaxProvider } from "react-scroll-parallax";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModeProvider>
      <ParallaxProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ParallaxProvider>
    </ModeProvider>
  </React.StrictMode>
);

reportWebVitals();
