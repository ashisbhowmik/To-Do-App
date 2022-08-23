import React from "react";
import "./login.css";
import { auth, provider } from "./firebase.js";
import GoogleButton from "react-google-button";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

const Login = () => {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
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
