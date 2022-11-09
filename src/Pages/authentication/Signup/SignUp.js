import { Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AuthenticationParent from "../AuthenticationParent";
import '../Signup/signup.scss'

export default function SignUp() {
  return (
    <AuthenticationParent>
      <div className="login_signup_forgot_password">
        <h4>Create a Secure Account</h4>
        <p>Welcome to the future of savings and investment</p>
        <form className="form">
          <TextField id="standard-basic" label="Full Name" variant="standard" margin="normal"/>
          <TextField id="standard-basic" label="Email Address" variant="standard" margin="normal" />
          <TextField id="standard-basic" label="Phone Number" variant="standard" margin="normal" />
          <TextField id="standard-basic" label="Password" variant="standard" margin="normal"/>
          <TextField id="standard-basic" label="Confirm Password" variant="standard" margin="normal" />
          <TextField id="standard-basic" label="Reference Phone or Promo code(Optional)" variant="standard" margin="normal" />
          <TextField id="standard-basic" label="How did you hear about us? (Optional)" variant="standard" margin="normal"/>
          
          <Button className="button">CREATE ACCOUNT</Button>
        </form>
        <p className="account">
          Already have an account? 
          <strong>
            <Link to="/login"> Login</Link>
          </strong>
        </p>
        
      </div>
      <div>SignUp</div>
    </AuthenticationParent>
  );
}
