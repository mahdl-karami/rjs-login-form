import { FaLongArrowAltRight } from "react-icons/fa";

function SingIn({ inputs: { username, password } }) {
  return (
    <>
      <h1>Sign In</h1>
      <input required name="username" placeholder="User Name" type="text" value={username} />
      <input required name="password" placeholder="Password" type="password" value={password} />
      <a href="#">Need help ?</a>
      <button type="submit" className="submit-btn">
        Login {<FaLongArrowAltRight />}
      </button>
    </>
  );
}

export default SingIn;
