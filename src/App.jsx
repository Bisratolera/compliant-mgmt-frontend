
import { Outlet } from "react-router-dom";
import "./App.css";
import AdminLogin from "./Pages/AdminLogin";
import Header from "./Components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <AdminLogin/>
      <Outlet />
    </div>
  );
}

export default App;
