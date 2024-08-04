import React from "react";
import SingIn from "./SingIn";
import SignUp from "./SignUp";

function FormInputs() {
  return (
    <form action="POST" className="form-inputs">
      <button>Sign In</button>
      <button>Sign Up</button>

      <SingIn />
      <SignUp />

      <div className="social-media-icons">
        <button>x</button>
        <button>x</button>
        <button>x</button>
        <button>x</button>
      </div>
    </form>
  );
}

export default FormInputs;
