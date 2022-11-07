import "./App.css";
import LandingPage from "./Pages/landing_page/LandingPage";

import { Routes, Route } from "react-router-dom";
import Login from "./Pages/authentication/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
