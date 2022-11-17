import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import AuthenticationParent from "../AuthenticationParent";

export default function SignUp() {
  return (
    <AuthenticationParent>
      <div className="login_signup_forgot_password">
        <h3>Create a Secure Account</h3>
        <p>Welcome to the future of savings and investment</p>
        {/* //form validation */}
        <Formik
       initialValues={{ email: '', Fname: '', password: '', confirm_password:'', phone_number:'', reference_phone:'', how_you_hear_ab_us:'' }}
       validate={values => {
         const errors = {};
          if(!values.Fname){
          errors.Fname = 'Full Name required';
        }
        else if (!values.email ) {
           errors.email = 'Email required';
         } 
         else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        else if(!values.phone_number){
          errors.phone_number = 'Enter phone number';
        }
        else if(!values.password ){
          errors.password = 'Enter password';
        }

         else if(values.password !== values.confirm_password){
          errors.confirm_password = 'Password Mismatch';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
        <form className="form" onSubmit={handleSubmit}>
          <TextField id="standard-basic" label="Full Name" variant="standard" margin="normal"  type="text"
        name="Fname" onChange={handleChange}  onBlur={handleBlur} value={values.Fname} />
        <p className="red">{errors.Fname && touched.Fname && errors.Fname}</p>

          <TextField id="standard-basic" label="Email Address" variant="standard" margin="normal" type="text"
        name="email" onChange={handleChange}  onBlur={handleBlur} value={values.email} />
        <p className="red">{errors.email && touched.email && errors.email}</p>

          <TextField id="standard-basic" label="Phone Number" variant="standard" margin="normal" type="number"
        name="phone_number" onChange={handleChange}  onBlur={handleBlur} value={values.phone_number} />
        <p className="red">{errors.phone_number && touched.phone_number && errors.phone_number}</p>

          <TextField id="standard-basic" label="Password" variant="standard" margin="normal" type="password"
          name="password" onChange={handleChange}  onBlur={handleBlur} value={values.password}/>
        <p className="red">{errors.password && touched.password && errors.password}</p>

          <TextField id="standard-basic" label="Confirm Password" variant="standard" margin="normal" type="password" name="confirm_password" onChange={handleChange}  onBlur={handleBlur} value={values.confirm_password}/>
        <p className="red">{errors.confirm_password && touched.confirm_password && errors.confirm_password}</p>

          <TextField id="standard-basic" label="Reference Phone or Promo code(Optional)" variant="standard" margin="normal" />
          <TextField id="standard-basic" label="How did you hear about us? (Optional)" variant="standard" margin="normal"/>
          
          <Button className="button" type="submit" disabled={isSubmitting}>CREATE ACCOUNT</Button>
        </form>
        
      )}
      </Formik>
        <p className="account">
          Already have an account? 
          <strong>
            <Link to="/login"> Login</Link>
          </strong>
        </p>
        
      </div>
    </AuthenticationParent>
  );
}
