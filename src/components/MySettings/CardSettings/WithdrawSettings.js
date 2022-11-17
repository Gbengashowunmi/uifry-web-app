import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import MySettings from "../MySettings";
import "./WithdrawSettings.scss";

const banks = [
  { value: "ACCESS", label: "ACCESS" },
  { value: "UBA", label: "UBA" },
  { value: "WEMA", label: "WEMA" },
  { value: "GTB", label: "GTB" },
];
export default function WithdrawSettings() {
  const [bank, setBank] = useState("GTB");

  const handleChange = (event) => {
    setBank(event.target.value);
  };
  return (
    <MySettings>
      <div className="card_settings">
        <h4 className="heading">My Withdrawal Account</h4>

        <p>Add your bank account where you want your funds to return to.</p>
        <form className="form">
          {/* <label>Enter Your Account Number</label> <br/>
          <input placeholder='0123456789' type='number'/> <br/>
          <label>Enter your bank name</label> <br/>
          <select placeholder='0123456789'>
            
          </select> */}
          <TextField
            id="standard-basic"
            label="Enter Account Number"
            variant="standard"
            margin="normal"
            className="input"
            size="small"

          />
          <TextField
            id="standard-select-currency-native"
            className="input"
            select
            label="select Bank"
            value={bank}
            size="small"

            onChange={handleChange}
            SelectProps={{ native: true }}
            // helperText="Please select your bank"
            variant="standard"
          >
            {banks.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </form>
        <Button className="add_button">UPDATE BANK</Button>
        <hr />
        <Button className="button">CLOSE</Button>
      </div>
    </MySettings>
  );
}
