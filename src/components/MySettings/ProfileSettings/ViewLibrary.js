import { Button, TextField } from "@mui/material";
import React from "react";
// import Dashboard from "../../../Pages/Dashboard/Dashboard";
import MySettings from "../MySettings";
import "../ProfileSettings/profile_settings.scss";

export default function ViewLibrary() {
  return (
    <MySettings>
      <div className="profile_settings">
        <h4 className="heading">Basic data</h4>
        <p>Change Your Profile Picture</p>
        <div className="image_container">
          <img src="/images/user_image.jpg" alt="user_image" />
          <p>tap to change</p>
        </div>

        <form>
          <div className="form">
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"

          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"
          />
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"

          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"

          />
          </div>
          <hr />
          <p>You can Only change your picture with this form.</p>
          <Button className="button">UPDATE PROFILE</Button>
        </form>
      </div>
    </MySettings>
  );
}
