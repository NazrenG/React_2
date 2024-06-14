import React from "react";
import stlyles from "./UI/Authorization.module.css";
const SignIn = () => {
  return (
    <div className={stlyles.signDiv}>
      <h3>SignIn</h3>
      <input
        className={stlyles.signInput}
        type="text"
        placeholder="Your Name"
      />
      <input
        className={stlyles.signInput}
        type="text"
        placeholder="Your Password"
      />
      <label>
        <input type="checkbox" />
        Remember Me
      </label>
    </div>
  );
};
export default SignIn;
