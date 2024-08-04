import { useState } from "react";
//? import components
import SingIn from "./SingIn";
import SignUp from "./SignUp";
//? import helpers
import submited from "../helpers/submitHandler";

function FormInputs() {
  const [formType, setFormType] = useState("signIn");
  return (
    <form className="form-inputs" onSubmit={(ev) => submited(ev)}>
      
      <button onClick={() => setFormType("signIn")}>Sign In</button>
      <button onClick={() => setFormType("SignUp")}>Sign Up</button>

      {formType == "signIn" ? <SingIn /> : <SignUp />}

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
