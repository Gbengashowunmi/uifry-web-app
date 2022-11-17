import { Button, TextField } from "@mui/material";
import React from "react";
import MyAccount from "../MyAccount";
import '../PasswordSettings/password.scss'

export default function PasswordSettings() {
  return (
    <MyAccount>
      <div className="password_settings">
        <h4 className="heading">Change Password</h4>

        <form>
          <div className="form">
              <TextField
                id="outlined-basic"
                label="Old password"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                className="input"
              />
              <TextField
                id="outlined-basic"
                label="New password"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                className="input"
              />
              <TextField
                id="outlined-basic"
                label="Retype New password"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                className="input"

              />
          </div>

          <hr />
          <Button className="button">UPDATE PASSWORD</Button>
        </form>
      </div>
    </MyAccount>
  );
}
