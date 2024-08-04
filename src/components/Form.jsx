import { useState } from "react";
//? import components
import FormInputs from "./FormInputs";
import FormLeft from "./FormLeft";

function Form() {
  const [formType, setFormType] = useState("signIn");
  return (
    <div className="form-box">
      <FormLeft />
      <FormInputs formType={formType} setFormType={setFormType} />
    </div>
  );
}

export default Form;
