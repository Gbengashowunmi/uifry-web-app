import { Button, TextField } from "@mui/material";
import React from "react";
import AnimatedPage from "../../AnimatedPage";
import MySettings from "../MySettings";
import '../SecurityQuestion/security.scss'

export default function Contact() {
  return (
    <MySettings>
    <AnimatedPage>
      <div className="security_settings">
        <h4 className="heading">Set new security question</h4>
        <p>Set a new security question to protect your PiggyVest account.</p>
        <div className="deet_container">
          <div>
            <i class="fa-light fa-shield-check"></i>
          </div>
          <h6>2FA: TAP TO GENERATEOTP!</h6>
          <p>
            2FA is required to complete this processfor your own safety. Please
            tap to geenrate OTP then come back to proceed.
          </p>
        </div>
        <form>
        <div className="form">
          <TextField
            id="outlined-basic"
            label="Set a personal security question"
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"

          />
          <TextField
            id="outlined-basic"
            label="Enter the answer"
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"
          />
          <TextField
            id="outlined-basic"
            label="Please Enter Generated OTP"
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"

          />
          <TextField
            id="outlined-basic"
            label="For Security Reasons, Please Enter Your Password"
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"

          />
          </div>
          {/* <label>Set a personal security question</label>
          <input placeholder="eg Where did you grow up?" type="text" />
          <label>Enter the answer</label>
          <input placeholder="eg Where did you grow up?" type="text" />
          <label>Please Enter Generated OTP</label>
          <input placeholder="OTP" type="number" />
          <label>For Security Reasons, Please Enter Your Password</label>
          <input placeholder="password" type="password" />*/}
          <hr/> 
          <Button className="button">UPDATE PROFILE</Button>

        </form>
      </div>
      </AnimatedPage>
    </MySettings>
  );
}
