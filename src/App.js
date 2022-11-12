import "./App.css";
import LandingPage from "./Pages/landing_page/LandingPage";

import { Routes, Route } from "react-router-dom";
import Login from "./Pages/authentication/Login/Login";
import SignUp from "./Pages/authentication/Signup/SignUp";
import ForgotPassword from "./Pages/authentication/ForgotPassword/ForgotPassword";
import NextOfKin from "./components/MyAccount/NextOfKin/NextOfKin";
import SecurityQuestion from "./components/MyAccount/SecurityQuestion/SecurityQuestion";
import BvnSettings from "./components/MyAccount/BvnSettings/BvnSettings"
import PasswordSettings from "./components/MyAccount/PasswordSettings/PasswordSettings"
import InterestSettings from "./components/MyAccount/InterestSettings/InterestSettings"
import NotificationSettings from "./components/MyAccount/NotificationSettings/NotificationSettings"
import UpdateKyc from "./components/MyAccount/UpdateKyc/UpdateKyc"
import GeneralDashboard from "./Pages/GeneralDashboard/GeneralDashboard";
import ProfileSettings from "./components/MyAccount/ProfileSettings/ProfileSettings";
import TodaysRate from "./components/MySettings/BvnSettings/TodasRate";
import SelfHelp from "./components/MySettings/InterestSettings/SelfHelp";
import Refer from "./components/MySettings/NextOfKin/Refer";
import WithdrawFunds from "./components/MySettings/NotificationSettings/WithdrawFunds";
import CardSettings from "./components/MySettings/PasswordSettings/CardSettings";
import ViewLibrary from "./components/MySettings/ProfileSettings/ViewLibrary";
import Contact from "./components/MySettings/SecurityQuestion/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgot_password" element={<ForgotPassword />} />

        {/* Accont settings */}
        <Route path="/GeneralDashboard/" element={<GeneralDashboard />} />
        {/* <Route path="/GeneralDashboard/settings" element={<MySettings />} /> */}
        <Route path ="/GeneralDashboard/my_account/profile_settings" element={<ProfileSettings/>}/>
        <Route path="/dashboard/faq" element={<SecurityQuestion/>} />
        <Route path="/dashboard/notification_settings" element={<NotificationSettings/>} />
        <Route path="/dashboard/next-of-kin_settings" element={<NextOfKin />} />
        <Route path="/dashboard/interest_settings" element={<InterestSettings />} />
        <Route path="/dashboard/password_settings" element={<PasswordSettings />} />
        <Route path="/dashboard/bvn_settings" element={<BvnSettings />} />
        <Route path="/dashboard/update_kyc" element={<UpdateKyc />} />

        {/* //settings */}
        <Route path ="/GeneralDashboard/settings/todays_rate" element={<TodaysRate/>}/>
        <Route path="/dashboard/selfhelp" element={<SelfHelp />} />
        <Route path="/dashboard/refer" element={<Refer />} />
        <Route path="/dashboard/withdraw_funds" element={<WithdrawFunds />} />
        <Route path="/dashboard/card_settings" element={<CardSettings />} />
        <Route path="/dashboard/library_settings" element={<ViewLibrary/>} />
        <Route path="/dashboard/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
