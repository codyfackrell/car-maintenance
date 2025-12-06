import { useState } from "react";
import { useFormStatus } from "react-dom";
import axios from "axios";

function Login() {
  const { pending } = useFormStatus();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const body = { username, password };

    axios.post("/login", body).then((res) => {
      // Handle successful login
    });
  }

  return (
    <>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" disabled={pending}>
          {pending ? "Submitting..." : "Login"}
        </button>
      </form>
      <p>
        Not a member? <a href="/signup">Sign up</a>
      </p>
    </>
  );
}

export default Login;
