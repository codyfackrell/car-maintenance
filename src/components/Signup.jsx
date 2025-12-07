import { useState } from "react";
import axios from "axios";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const body = { firstName, lastName, username, password };

    axios.post("/signup", body).then((res) => {
      //handle signup
    });
  }

  return (
    <div className="form-container">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">
          First Name
          <input type="text" id="first-name" required />
        </label>

        <label htmlFor="last-name">
          Last Name
          <input type="text" id="last-name" required />
        </label>

        <label htmlFor="username">
          Username
          <input type="text" id="username" required />
        </label>

        <label htmlFor="password">
          Password
          <input type="password" id="password" required />
        </label>
        <button>Sign Up</button>
      </form>
      <p>
        Already a member? <a href="/login">Login!</a>
      </p>
    </div>
  );
}

export default Signup;
