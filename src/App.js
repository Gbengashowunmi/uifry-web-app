import "./App.css";
import LandingPage from "./Pages/landing_page/LandingPage";

import { Routes, Route } from "react-router-dom";
import Login from "./Pages/authentication/Login/Login";
import SignUp from "./Pages/authentication/Signup/SignUp";
import ForgotPassword from "./Pages/authentication/ForgotPassword/ForgotPassword";
import NextOfKin from "./components/MyAccount/NextOfKin/NextOfKin";
import SecurityQuestion from "./components/MyAccount/SecurityQuestion/SecurityQuestion";
import BvnSettings from "./components/MyAccount/BvnSettings/BvnSettings";
import PasswordSettings from "./components/MyAccount/PasswordSettings/PasswordSettings";
import InterestSettings from "./components/MyAccount/InterestSettings/InterestSettings";
import NotificationSettings from "./components/MyAccount/NotificationSettings/NotificationSettings";
import UpdateKyc from "./components/MyAccount/UpdateKyc/UpdateKyc";
import GeneralDashboard from "./Pages/GeneralDashboard/GeneralDashboard";
import ProfileSettings from "./components/MyAccount/ProfileSettings/ProfileSettings";
import TodaysRate from "./components/MySettings/TodaysRate/TodaysRate";
import SelfHelp from "./components/MySettings/SelfHelp/SelfHelp";
import WithdrawFunds from "./components/MySettings/Withdraw/WithdrawFunds";
import CardSettings from "./components/MySettings/CardSettings/CardSettings";
import ViewLibrary from "./components/MySettings/ViewLibrary/ViewLibrary";
import Contact from "./components/MySettings/SecurityQuestion/Contact";
import Refer from "./components/MySettings/Refer/Refer";
import DebitCardSettings from "./components/MySettings/CardSettings/DebitCardSettings";
import WithdrawBankSettings from "./components/MySettings/CardSettings/WithdrawBankSettings";
import WithdrawSettings from "./components/MySettings/CardSettings/WithdrawSettings";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ErroPage from "./Pages/ErrorPage/ErroPage";
import Savings from "./components/Savings/Savings";
import Flex from "./components/Savings/Flex/Flex";
import Fixed from "./components/Savings/Fixed/Fixed";
import AutoSave from "./components/Savings/AutoSave/AutoSave";
import FlexDollar from "./components/Savings/FlexDollar/FlexDollar";
import FlexPounds from "./components/Savings/Flex_Pounds/FlexPounds";

function App() {
  // const location = useLocation();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgot_password" element={<ForgotPassword />} />

        {/* Accont settings */}
        {/* <ReactSlideRoutes location={location}> */}
        <Route path="/GeneralDashboard/" element={<GeneralDashboard />} />
        {/* <Route path="/GeneralDashboard/settings" element={<MySettings />} /> */}
        <Route
          path="/GeneralDashboard/my_account/profile_settings"
          element={<ProfileSettings />}
        />
        <Route path="/GeneralDashboard/Mydashboard" element={<Dashboard />} />
        <Route path="/dashboard/faq" element={<SecurityQuestion />} />
        <Route
          path="/dashboard/notification_settings"
          element={<NotificationSettings />}
        />
        <Route path="/dashboard/next-of-kin_settings" element={<NextOfKin />} />
        <Route
          path="/dashboard/interest_settings"
          element={<InterestSettings />}
        />
        <Route
          path="/dashboard/password_settings"
          element={<PasswordSettings />}
        />
        <Route path="/dashboard/bvn_settings" element={<BvnSettings />} />
        <Route path="/dashboard/update_kyc" element={<UpdateKyc />} />
        {/* </ReactSlideRoutes> */}
        {/* //settings */}
        <Route
          path="/GeneralDashboard/settings/todays_rate"
          element={<TodaysRate />}
        ></Route>
        <Route path="/dashboard/selfhelp" element={<SelfHelp />} />
        <Route path="/dashboard/refer" element={<Refer />} />
        <Route path="/dashboard/withdraw_funds" element={<WithdrawFunds />} />
        <Route path="/dashboard/card_settings" element={<CardSettings />} />
        <Route
          path="/dashboard/DebitCard_settings"
          element={<DebitCardSettings />}
        />
        <Route
          path="/dashboard/Withdraw_bank_settings"
          element={<WithdrawBankSettings />}
        />
        <Route
          path="/dashboard/Withdraw_settings"
          element={<WithdrawSettings />}
        />
        <Route path="/dashboard/library_settings" element={<ViewLibrary />} />
        <Route path="/dashboard/contact" element={<Contact />} />
        {/* <Route path="/dashboard" element={<TodaysRate />} /> */}

        <Route path="*" element={<ErroPage />} />

        {/* //Savings */}
        <Route
          path="/GeneralDashboard/settings/savings"
          element={<Savings />}
        />
        <Route
          path="/GeneralDashboard/settings/savings/flex"
          element={<Flex />}
        />
        <Route
          path="/GeneralDashboard/settings/savings/fixed"
          element={<Fixed />}
        />
        <Route
          path="/GeneralDashboard/settings/savings/autoSave"
          element={<AutoSave />}
        />
        <Route
          path="/GeneralDashboard/settings/savings/target"
          element={<Fixed />}
        />
        <Route
          path="/GeneralDashboard/settings/savings/flex_dollars"
          element={<FlexDollar />}
        />
        <Route
          path="/GeneralDashboard/settings/savings/flex_pounds"
          element={<FlexPounds />}
        />
      </Routes>
    </div>
  );
}

export default App;
