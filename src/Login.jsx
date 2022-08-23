import React from "react";
import "./login.css";
import { auth } from "./firebase.js";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import GoogleButton from "react-google-button";
const Login = () => {
  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  return (
    <div className="login-div">
      <div className="innner_login_div">
        <h3>To-Do App</h3>
        <GoogleButton onClick={signIn} />
      </div>
    </div>
  );
};

export default Login;
