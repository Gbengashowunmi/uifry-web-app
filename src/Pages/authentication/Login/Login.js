import React from "react";
import "./login.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Login() {
  return (
    <div className="login">
      <img src="/images/Group1.png" alt="ellipse" className="ellipse" />
      <img src="/images/arrows.png" alt="ellipse" className="arrows" />
      <img src="/images/Subtract.png" alt="ellipse" className="subtract" />

      <h3>Login</h3>
      <p>Securely login to your PiggyVest</p>
      <form className="form">
        <TextField id="standard-basic" label="Username" variant="standard" />
        <TextField id="standard-basic" label="Password" variant="standard" />
        <Button className="button">Login</Button>
      </form>
    </div>
  );
}
