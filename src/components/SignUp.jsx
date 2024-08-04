import { FaLongArrowAltRight } from "react-icons/fa";

function SignUp({ inputs: { username, password, email } }) {
  return (
    <>
      <h1>Create Account</h1>
      <input placeholder="Email" name="email" type="email" value={email} />
      <input placeholder="User Name" name="username" type="text" value={username} />
      <input placeholder="Password" name="password" type="password" value={password} />
      <button className="submit-btn">Sing Up {<FaLongArrowAltRight />}</button>
    </>
  );
}

export default SignUp;
