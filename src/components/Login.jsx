import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext.jsx";

function Login() {
  const { authLoading, error, isAuthenticated, login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/log", { replace: true });
    }
  }, [isAuthenticated]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError(null);

    if (!username || !password) {
      setLocalError("Both username and password are required.");
      return;
    }

    const result = await login(username, password);

    if (result.success) {
      navigate("/log", { replace: true });
    } else {
      setLocalError(result.error || "Login failed");
    }
  };

  return (
    <div className="form-container">
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
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
          {authLoading ? "Logging in..." : "Login"}
        </button>

        {(localError || error) && (
          <p className="error">{localError || error}</p>
        )}
      </form>
      <p>
        Not a member? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
}

export default Login;
