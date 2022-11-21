import { Button, TextField } from "@mui/material";
import React from "react";
import AnimatedPage from "../../AnimatedPage";
import '../BvnSettings/bvn.scss'
import MyAccount from "../MyAccount";

export default function BvnSettings() {
  return (
    <MyAccount>
      <AnimatedPage>
      <div className="bvn_settings">
        <h4 className="heading">Show my BVN</h4>
        <p>Fill the form below to view the BVN linked to your Uifry Account.</p>

        <form>
          <div className="form">

          <TextField
                id="outlined-basic"
                label="Please Enter Generated OTP"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                className="input"

              />

          <TextField
                id="outlined-basic"
                label="For Security Reasons, Please Enter Your Password"
                variant="outlined"
                size="small"
                fullWidth
                // margin="normal"
                className="input"
              />
              </div>

          <hr />
          <Button className="button">SHOW MY BVN</Button>
        </form>
      </div>
      </AnimatedPage>
    </MyAccount>
  );
}
