import { Button, TextField } from "@mui/material";
import React from "react";
import Dashboard from "../../../Pages/Dashboard/Dashboard";
import '../PasswordSettings/password.scss'

export default function PasswordSettings() {
  return (
    <Dashboard>
      <div className="password_settings">
        <h4 className="heading">Change Password</h4>

        <form>
          <div className="form">
            <div className="input">
              <TextField
                id="outlined-basic"
                label="Old password"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
              />
            </div>
            <div className="input">
              <TextField
                id="outlined-basic"
                label="New password"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
              />
            </div>
            <div className="input">
              <TextField
                id="outlined-basic"
                label="Retype New password"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
              />
            </div>
          </div>

          <hr />
          <Button className="button">UPDATE PASSWORD</Button>
        </form>
      </div>
    </Dashboard>
  );
}
