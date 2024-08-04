function SignUp({ inputs: { username, password, email } }) {
  return (
    <>
      <h1>Create Account</h1>

      <input name="email" type="email" value={email} />
      <input name="username" type="text" value={username} />
      <input name="password" type="password" value={password} />

      <button>Sing Up {`->`}</button>
    </>
  );
}

export default SignUp;
