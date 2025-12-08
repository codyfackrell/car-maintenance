import "./styles/index.css";
import "./styles/App.css";
import "./styles/Auth.css";
import "./styles/Maintenance.css";
import "./styles/Home.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MaintenanceLog from "./components/MaintenanceLog";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route
          path={"/log"}
          element={
            <ProtectedRoute>
              <MaintenanceLog />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
