import { useState } from "react";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("department");

  const toggleRole = () => {
    setSelectedRole(selectedRole === "department" ? "admin" : "department");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logging in with:", { username, password, selectedRole });
  };

  return (
    <div className="login flex flex-col items-center justify-center min-h-screen p-4">
      <div className="card ">
        <h2 className="text-2xl font-bold mb-6 text-center text-[--bg-color]">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="mb-1 text-[--bg-color]">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 text-[--bg-color]">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#ffcb3b] text-[--bg-color] py-2 px-4 rounded-md"
          >
            Login
          </button>
        </form>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={toggleRole}
            className="text-sm text-blue-500 hover:underline"
          >
            {selectedRole === "department"
              ? "Switch to Admin"
              : "Switch to Department"}
          </button>
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Forgotten password?
          </a>
        </div>
      </div>
    </div>
  );
};
