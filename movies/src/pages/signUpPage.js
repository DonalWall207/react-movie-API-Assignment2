import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);

  const register = () => {
    if (password.length > 0 && password === passwordAgain) {
      context.register(userName, password);
      setRegistered(true);
    }
  }

  if (registered === true) {
    return <Navigate to="/users/login" />;
  }

  return (
    <>
      <h2>SignUp page</h2>
      <p>You must register a username and password to log in </p>
      <input value={userName} placeholder="User Name" onChange={e => {
        setUserName(e.target.value);
      }}></input>
      <br/>
      <br/>
      <input value={password} type="password" placeholder="Password" onChange={e => {
        setPassword(e.target.value);
      }}></input>
      <br/>
      <br/>
      <input value={passwordAgain} type="password" placeholder="Repeat Password" onChange={e => {
        setPasswordAgain(e.target.value);
      }}></input>
      <br/>
      <br/>
      {/* Login web form  */}
      <button id="button" onClick={register}>Register</button>
    </>
  );
};

export default SignUpPage;