import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import AuthenticationParent from "../AuthenticationParent";

export default function SignUp() {

  //creating initial values for formik
  const initialValues = {
    email: "",
    full_name: "",
    password: "",
    confirm_password: "",
    phone: "",
    reference_phone: "",
    how_you_hear_ab_us: "",
  };

  //onSubmit action 
  const onSubmit = async (e, {...values} ) => {
//  e.preventDefault()
console.log({...values});
    //sending data to database
  const response = await fetch(`http://192.168.1.131:8000/auth/signup/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(values),
  });


  //data sent
  const data = await response.json();
  console.log(data);
  }


  //form validation 
  const validate =(values) => {
    const errors = {};
    if (!values.full_name) {
      errors.full_name = "Full Name required";
    } else if (!values.email) {
      errors.email = "Email required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    } else if (!values.phone) {
      errors.phone = "Enter phone number";
    } else if (!values.password) {
      errors.password = "Enter password";
    } else if (values.password !== values.confirm_password) {
      errors.confirm_password = "Password Mismatch";
    }
    console.log(values);
    return errors;
  }

  

  return (
    <AuthenticationParent>
      <div className="login_signup_forgot_password">
        <h3>Create a Secure Account</h3>
        <p>Welcome to the future of savings and investment</p>
        {/* //form validation */}
        <Formik
          initialValues={initialValues}
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
              <TextField
                id="standard-basic"
                label="Full Name"
                variant="standard"
                margin="normal"
                type="text"
                name="full_name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.full_name}
              />
              <p className="red">
                {errors.full_name && touched.full_name && errors.full_name}
              </p>

              <TextField
                id="standard-basic"
                label="Email Address"
                variant="standard"
                margin="normal"
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <p className="red">
                {errors.email && touched.email && errors.email}
              </p>

              <TextField
                id="standard-basic"
                label="Phone Number"
                variant="standard"
                margin="normal"
                type="number"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              <p className="red">
                {errors.phone &&
                  touched.phone &&
                  errors.phone}
              </p>

              <TextField
                id="standard-basic"
                label="Password"
                variant="standard"
                margin="normal"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <p className="red">
                {errors.password && touched.password && errors.password}
              </p>

              <TextField
                id="standard-basic"
                label="Confirm Password"
                variant="standard"
                margin="normal"
                type="password"
                name="confirm_password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirm_password}
              />
              <p className="red">
                {errors.confirm_password &&
                  touched.confirm_password &&
                  errors.confirm_password}
              </p>

              <TextField
                id="standard-basic"
                label="Reference Phone or Promo code(Optional)"
                variant="standard"
                name="reference_phone"
                margin="normal"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.reference_phone}

              />
              <TextField
                id="standard-basic"
                label="How did you hear about us? (Optional)"
                variant="standard"
                name="how_you_hear_ab_us"
                margin="normal"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.how_you_hear_ab_us}

              />

              <Button className="button" type="submit" disabled={isSubmitting}>
                CREATE ACCOUNT
              </Button>
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
