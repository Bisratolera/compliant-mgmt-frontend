import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('department');

  const toggleRole = () => {
    setSelectedRole(selectedRole === 'department' ? 'admin' : 'department');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { username, password, selectedRole });
  };

  return (
    <div className="login-container flex flex-col items-center justify-center min-h-screen">
      <div className="login-card p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="mb-4">
            <label htmlFor="username" className="block mb-1">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border p-2 rounded-md w-full"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 rounded-md w-full"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="w-full bg-[#ffcb3b] py-2 rounded-md">Login</button>
        </form>
        <div className="flex justify-between items-center mt-4">
          <button onClick={toggleRole} className="bg-[#ffcb3b] p-2 rounded-md">
            {selectedRole === 'department' ? 'Switch to Admin' : 'Switch to Department'}
          </button>
          <Link to="/userpage">
            <button className="bg-[#b888ff] p-2 rounded-md">Go to Form Page</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
