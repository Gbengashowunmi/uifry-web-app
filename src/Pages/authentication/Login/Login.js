import React from "react";
import "./login.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">

      <h3>Login</h3>
      <p>Securely login to your PiggyVest</p>
      <form className="form">
        <TextField id="standard-basic" label="Username" variant="standard" />
        <TextField id="standard-basic" label="Password" variant="standard" />
        <Button className="button">Login</Button>
      </form>
      <p className="account">
        Don't have an account?
        <strong>
          <Link to="/signup">Register</Link>
        </strong>
      </p>
      <Link to="/forgot_password">
        <p>
          <strong>Forgot Password?</strong>
        </p>
      </Link>
    </div>
  );
}
