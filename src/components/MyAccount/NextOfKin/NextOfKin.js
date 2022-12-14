import { Button, TextField } from '@mui/material';
import React from 'react'
import AnimatedPage from '../../AnimatedPage';
import MyAccount from '../MyAccount';
import '../NextOfKin/nextOfKin.scss'

export default function NextOfKin() {
  return (
    <MyAccount>
      <AnimatedPage>
        <div className='next_of_kin_settings'>
        <h4 className='heading'>Next of Kin</h4>
        
        <form>
          <div className='form'>
        <TextField
            id="outlined-basic"
            label="Next of Kin"
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"
          />
        <TextField
            id="outlined-basic"
            label="What is the relationship?"
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"
          />
        <TextField
            id="outlined-basic"
            label="Email address of Next of kin"
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"
          />
        <TextField
            id="outlined-basic"
            label="Phone number of next of kin"
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
          <hr/>
          <Button className="button">UPDATE NEXT OF KIN</Button>

        </form>
      </div>
      </AnimatedPage>
    </MyAccount>

  )
}
