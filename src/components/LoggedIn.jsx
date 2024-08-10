import React from "react";

function LoggedIn({ setLoggin, inputs }) {
  return (
    <div className="loggedin">
      <h1>Welcome</h1>
      <h4>Your Username : </h4>
      <h4>{inputs.username}</h4>
      <button className="submit-btn" onClick={() => setLoggin(0)}>Logout</button>
    </div>
  );
}

export default LoggedIn;
