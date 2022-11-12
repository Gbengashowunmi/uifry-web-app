import React from "react";
import "./login.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import AuthenticationParent from "../AuthenticationParent";

export default function Login() {
  return (
    <AuthenticationParent>
    <div className="login_signup_forgot_password">

      <h3>Login</h3>
      <p>Securely login to your Uifry</p>
      <form className="form">
        <TextField id="standard-basic" label="Username" variant="standard" margin="normal" />
        <TextField id="standard-basic" label="Password" variant="standard" margin="normal" />
       <Link to='/GeneralDashboard/my_account/profile_settings'>
        <Button className="button">Login</Button>
        </Link>
      </form>
      <p className="account">
        Don't have an account? 
        <strong>
          <Link to="/signup"> Register</Link>
        </strong>
      </p>
      <Link to="/forgot_password">
        <p>
          <strong>Forgot Password?</strong>
        </p>
      </Link>
    </div>
    </AuthenticationParent>
  );
}
