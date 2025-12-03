import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Car Maintenance Log</h1>
      <nav className="card">
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>Sign up</Link>
      </nav>
    </>
  );
}

export default Home;
