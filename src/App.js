import "./App.css";
import LandingPage from "./Pages/landing_page/LandingPage";

import { Routes, Route } from "react-router-dom";
import Login from "./Pages/authentication/Login/Login";
import SignUp from "./Pages/authentication/Signup/SignUp";
import ForgotPassword from "./Pages/authentication/ForgotPassword/ForgotPassword";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="login" element={<Login />}/>
        <Route path="login" element={<SignUp />}/>
        <Route path="login" element={<ForgotPassword />}/>
      </Routes>
    </div>
  );
}

export default App;
