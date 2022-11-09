import "./App.css";
import LandingPage from "./Pages/landing_page/LandingPage";

import { Routes, Route } from "react-router-dom";
import Login from "./Pages/authentication/Login/Login";
import SignUp from "./Pages/authentication/Signup/SignUp";
import ForgotPassword from "./Pages/authentication/ForgotPassword/ForgotPassword";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ProfileSettings from "./components/MyAccount/ProfileSettings/ProfileSettings";
import NextOfKin from "./components/MyAccount/NextOfKin/NextOfKin";
import SecurityQuestion from "./components/MyAccount/SecurityQuestion/SecurityQuestion";
import BvnSettings from "./components/MyAccount/BvnSettings/BvnSettings"

import PasswordSettings from "./components/MyAccount/PasswordSettings/PasswordSettings"

import InterestSettings from "./components/MyAccount/InterestSettings/InterestSettings"

import NotificationSettings from "./components/MyAccount/NotificationSettings/NotificationSettings"

import UpdateKyc from "./components/MyAccount/UpdateKyc/UpdateKyc"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgot_password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/profile_settings" element={<ProfileSettings />} />
        <Route path="/dashboard/faq" element={<SecurityQuestion/>} />
        <Route path="/dashboard/notification_settings" element={<NotificationSettings/>} />
        <Route path="/dashboard/next-of-kin_settings" element={<NextOfKin />} />
        <Route path="/dashboard/interest_settings" element={<InterestSettings />} />
        <Route path="/dashboard/password_settings" element={<PasswordSettings />} />
        <Route path="/dashboard/bvn_settings" element={<BvnSettings />} />
        <Route path="/dashboard/update_kyc" element={<UpdateKyc />} />
      </Routes>
    </div>
  );
}

export default App;
