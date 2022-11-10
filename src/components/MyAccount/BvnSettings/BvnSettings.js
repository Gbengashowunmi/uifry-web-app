import { Button, TextField } from "@mui/material";
import React from "react";
import Dashboard from "../../../Pages/Dashboard/Dashboard";
import '../BvnSettings/bvn.scss'

export default function BvnSettings() {
  return (
    <Dashboard>
      <div className="bvn_settings">
        <h4 className="heading">Show my BVN</h4>
        <p>Fill the form below to view the BVN linked to your Uifry Account.</p>

        <form>
          <div className="form">
          <div className="input">

          <TextField
                id="outlined-basic"
                label="Please Enter Generated OTP"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
              />
              </div>
            <div className="input">

          <TextField
                id="outlined-basic"
                label="For Security Reasons, Please Enter Your Password"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
              />
              </div>
          </div>

          <hr />
          <Button className="button">SHOW MY BVN</Button>
        </form>
      </div>
    </Dashboard>
  );
}
