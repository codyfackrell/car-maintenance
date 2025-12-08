import { useState } from "react";
import { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const { authLoading, error, register } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError(null);

    const result = await register(firstName, lastName, username, password);

    if (result.success) {
      navigate("/login", { replace: true });
    } else {
      setLocalError(result.error || "Signup failed");
    }
  };

  return (
    <div className="form-container">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">
          First Name
          <input
            type="text"
            id="first-name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>

        <label htmlFor="last-name">
          Last Name
          <input
            type="text"
            id="last-name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>

        <label htmlFor="username">
          Username
          <input
            type="text"
            id="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" disabled={authLoading}>
          {authLoading ? "Signing up..." : "Sign up"}
        </button>

        {(localError || error) && (
          <p className="error">{localError || error}</p>
        )}
      </form>
      <p>
        Already a member? <a href="/login">Login!</a>
      </p>
    </div>
  );
}

export default Signup;
