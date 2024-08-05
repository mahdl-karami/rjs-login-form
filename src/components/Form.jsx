import { useState } from "react";
//? import components
import FormInputs from "./FormInputs";
import FormLeft from "./FormLeft";
import LoggedIn from "./LoggedIn";

function Form() {
  const [formType, setFormType] = useState("signIn");
  const [loggin, setLoggin] = useState(0);
  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
  });
  return (
    <div className="form-box">
      <FormLeft />
      {!loggin ? <FormInputs inputs={inputs} setInputs={setInputs} formType={formType} setFormType={setFormType} setLoggin={setLoggin} /> : <LoggedIn setLoggin={setLoggin} inputs={inputs} />}
    </div>
  );
}
export default Form;
