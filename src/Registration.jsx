import React, { useState } from "react";
import "./signUpIn.css";

function Registration() {
  const [reg, setRegistration] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    conPassword: "",
  });

  const [log, setLogin] = useState({
    uname: "",
    pwd: "",
  });

  const inputEvent = (event) => {
    const { value, name } = event.target;

    setRegistration((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
    setLogin((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert(reg.fullname);
  };

  return (
    <div className="Container">
      <div className="registration">
        <h2 className="heading-h2">Sign Up</h2>

        <input
          type="text"
          name="fullname"
          placeholder="Enter Your FullName"
          onChange={inputEvent}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          onChange={inputEvent}
        />
        <input
          type="text"
          name="username"
          placeholder="Enter Your Username"
          onChange={inputEvent}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter You Password"
          onChange={inputEvent}
        />
        <input
          type="password"
          name="conPassword"
          placeholder="Conform Password"
          onChange={inputEvent}
        />
        <button type="submit" onClick={onSubmit} className="sign-btn">
          Sign Up
        </button>
        <p>{reg.fullname}</p>
        <span className="log-link">Log In</span>
      </div>
      <div className="login">
        <h2 className="heading-h2">Log In</h2>
        <input
          type="text"
          name="uname"
          placeholder="Enter Your Username"
          onChange={inputEvent}
        />
        <input
          type="password"
          name="pwd"
          placeholder="Enter You Password"
          onChange={inputEvent}
        />
        <p>{log.uname}</p>
        <button onClick={onSubmit} className="log-btn">
          Log In
        </button>
      </div>
    </div>
  );
}

export default Registration;
