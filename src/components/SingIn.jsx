import { FaLongArrowAltRight } from "react-icons/fa";

function SingIn({ inputs: { username, password } }) {
  return (
    <>
      <h1>Sign In</h1>
      <input name="username" placeholder="User Name" type="text" value={username} />
      <input name="password" placeholder="Password" type="password" value={password} />
      <a href="#">Need help ?</a>
      <button className="submit-btn">Sing In {<FaLongArrowAltRight />}</button>
    </>
  );
}

export default SingIn;
