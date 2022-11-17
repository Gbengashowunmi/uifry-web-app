import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import AuthenticationParent from "../AuthenticationParent";

export default function ForgotPassword() {
  return (
    <AuthenticationParent>
      <div className="login_signup_forgot_password">
        <h3>Forgot Password?</h3>
        <p>Enter your Email to reset your password</p>
        <Formik
       initialValues={{ email: ''}}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Email Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
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
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard" 
            margin="normal"
            type="email"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email} 
          />
        <p className="red">{errors.email && touched.email && errors.email}</p>

          <Button className="button" type="submit" disabled={isSubmitting}>RESET PASSWORD</Button>
        </form>
        
      )}
      </Formik>
        <Link to="/login">
          <p className="account">Back to Login</p>
        </Link>
      </div>
    </AuthenticationParent>
  );
}
