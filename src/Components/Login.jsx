import { useState } from "react";

export const Login = () => {
  const [selectedRole, setSelectedRole] = useState("department");

  const toggleRole = () => {
    setSelectedRole(selectedRole === "department" ? "admin" : "department");
  };

  return (
    <div className="flex items-center justify-center">
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            content="lorem"
            type="checkbox"
            id="toggle"
            className="sr-only"
            checked={selectedRole === "admin"}
            onChange={toggleRole}
          />
          <div className="block bg-gray-600 w-96 h-8 rounded-full"></div>
          <div
            className={`dot absolute left-1 top-1 bg-white w-44 h-6 rounded-full transition ${
              selectedRole === "admin"
                ? "transform translate-x-full bg-green-400"
                : "bg-gray-400"
            }`}
          ></div>
        </div>
        <label
          htmlFor="toggle"
          className={`ml-3 text-white font-medium ${
            selectedRole === "admin" ? "text-green-400" : "text-gray-400"
          }`}
        ></label>
        <label
          content="department"
          htmlFor="toggle"
          className={`ml-3 text-white font-medium ${
            selectedRole === "department" ? "text-green-400" : "text-gray-400"
          }`}
        ></label>
      </label>
    </div>
  );
};
