import { Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AuthenticationParent from "../AuthenticationParent";

export default function ForgotPassword() {
  return (
    <AuthenticationParent>
      <div className="login_signup_forgot_password">
        <h3>Forgot Password?</h3>
        <p>Enter your Email to reset your password</p>
        <form className="form">
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard" 
            margin="normal"
          />
          <Button className="button">RESET PASSWORD</Button>
        </form>
        <Link to="/login">
          <p className="account">Back to Login</p>
        </Link>
      </div>
    </AuthenticationParent>
  );
}
