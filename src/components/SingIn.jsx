function SingIn({ inputs: { username, password } }) {
  return (
    <>
      <h1>Sign In</h1>
      <input name="username" type="text" value={username} />
      <input name="password" type="password" value={password} />
      <a href="#">Need help ?</a>
      <button>Sing In {`->`}</button>
    </>
  );
}

export default SingIn;
