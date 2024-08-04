import { useEffect, useState } from "react";
//? import components
import SingIn from "./SingIn";
import SignUp from "./SignUp";
//? import helpers
import submited from "../helpers/submitHandler";

function FormInputs({ formType, setFormType }) {
  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
  });
  function formHandleChange(ev) {
    const {
      target: { name, value },
    } = ev;
    setInputs((prevS) => ({ ...prevS, [name]: value }));
  }
  //! clear inputs
  useEffect(() => {
    setInputs({
      email: "",
      username: "",
      password: "",
    });
  }, [formType]);
  return (
    <form className="form-inputs" onSubmit={(ev) => submited(ev)} onChange={(ev) => formHandleChange(ev)}>
      <button onClick={() => setFormType("signIn")}>Sign In</button>
      <button onClick={() => setFormType("SignUp")}>Sign Up</button>
      {formType == "signIn" ? <SingIn inputs={inputs} /> : <SignUp inputs={inputs} />}
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