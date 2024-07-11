
import { Outlet } from "react-router-dom";
import "./App.css";
import AdminLogin from "./Pages/AdminLogin";

function App() {
  return (
    <div className="app">
      <AdminLogin/>
      <Outlet />
    </div>
  );
}

export default App;
