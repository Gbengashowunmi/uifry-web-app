import React from "react";
import "./login.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import AuthenticationParent from "../AuthenticationParent";
import { Formik } from 'formik';


export default function Login() {

  //validate form
  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email or Username Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    else if(!values.password){
     errors.password = 'Password Required';
    }
    return errors;
  }

  //handle form submit
  const onSubmit= (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }


  return (
    <AuthenticationParent>
    <div className="login_signup_forgot_password">
      <h3>Login</h3>
      <p>Securely login to your Uifry</p>
      <Formik
       initialValues={{ email: '', password: '' }}
       validate={validate}
       onSubmit={onSubmit}
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
        
        <TextField id="standard-basic" 
        label="Username" 
        variant="standard" 
        margin="normal"
        type="email"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email} 
        />
        <p className="red">{errors.email && touched.email && errors.email}</p>

        <TextField id="standard-basic" label="Password" variant="standard" margin="normal"
        type="password"
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        />
           <p className="red">{errors.password && touched.password && errors.password}</p>

       <Link to='/GeneralDashboard/Mydashboard'>
        <Button className="button" type="submit" disabled={isSubmitting}>Login</Button>
        </Link>
      </form>
      
      )}
      </Formik>
      <p className="account">
        Don't have an account? 
        <strong>
          <Link to="/signup"> Register</Link>
        </strong>
      </p>
      <Link to="/forgot_password">
        <p>
          <strong>Forgot Password?</strong>
        </p>
      </Link>
    </div>
    </AuthenticationParent>
  );
}
