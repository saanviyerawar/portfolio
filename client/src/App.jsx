import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModeProvider } from "./contexts/ModeProvider";
import Home from "./pages/home/Home";
import "./styles/App.css";

function App() {
  return (
    <ModeProvider>
      <div className="dark">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ModeProvider>
  );
}

export default App;