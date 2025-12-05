import "./css/App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MaintenanceLog from "./components/MaintenanceLog";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/log"} element={<MaintenanceLog />} />
      </Routes>
    </>
  );
}

export default App;
