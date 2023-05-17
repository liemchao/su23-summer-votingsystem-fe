// Import FirebaseAuth and firebase.
import React, { useState } from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../assets/scss/_login.scss";
// Configure Firebase.
const config = {
  apiKey: "AIzaSyDFsJS8u9XsIClfCOGZJQ4vg7JsJFSNA7Q",
  authDomain: "fvssystemswp409.firebaseapp.com",
  projectId: "fvssystemswp409",
  storageBucket: "fvssystemswp409.appspot.com",
  messagingSenderId: "153807743798",
  appId: "1:153807743798:web:388557922974c341b16197",
  measurementId: "G-DNJR3ZB3FW"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "#/Dashboard",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,],
};

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();
  return (
    <div>
        <Form className="sign-in-form">
        <div className="logo">
          {/* <img src={props.logo} alt="logoFPT" /> */}
          <h4>
            <span style={{ color: "blue" }}>V</span>
            <span style={{ color: "orange" }}>F</span>
            <span style={{ color: "green" }}>S</span> 
            <span style={{ color: "purple" }}>YSTEM</span>
            {/* <span style={{ color: "black" }}>DTV</span>  */}
          </h4>
        </div>
        <div className="heading">
          <h2>Welcome To</h2>
          {/* <h6>Not registred yet? </h6>
          <a className="toggle" href="/Login" onClick={props.onClick}>
            Register
          </a> */}
        </div>
        <div className="actual-form">
          {/* Input Email */}
          <Form.Group className="input-wrap">
            <Form.Control
              autoFocus
              type="email"
              className="input-field"
              autoComplete="off"
              required
              placeholder="Email"
              value={email}
              // onChange={onChangeEmail}
            />
          </Form.Group>
          {/* Input Password */}
          <Form.Group className="input-wrap">
            <Form.Control
              type="password"
              minLength="4"
              className="input-field"
              autoComplete="off"
              required
              placeholder="Password"
              value={password}
              // onChange={onChangePassword}
            />
          </Form.Group>
          {/* Submit Button */}
          <Button
            block="true"
            size="lg"
            type="submit"
            className="sign-btn"
            disabled={loading}
          >
            {/* {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )} */}
            <span>Login</span>
          </Button>
          {/* Message after submit */}
          {/* {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )} */}
        </div>
      </Form>
      <div style={{marginTop:"-24%"}}>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} st />
      </div>
     
    </div>
  );
}

export default LoginForm