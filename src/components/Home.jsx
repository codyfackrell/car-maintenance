import { useAuth } from "../utils/AuthContext.jsx";
import { Link } from "react-router-dom";

function Home() {
  const { user, isAuthenticated, logout, authLoading } = useAuth();

  return (
    <>
      <h1>Car Maintenance Log</h1>
      <nav className="card">
        {isAuthenticated ? (
          <>
            <span>Welcome, {user?.username + "!" || "friend!"}</span>
            <button onClick={logout} disabled={authLoading}>
              {authLoading ? "..." : "Logout"}
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up</Link>
          </>
        )}
      </nav>
    </>
  );
}

export default Home;
