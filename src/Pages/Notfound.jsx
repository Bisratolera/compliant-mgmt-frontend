
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-container flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 to-blue-300 text-center">
      <h1 className="text-9xl font-bold text-gray-800 animate-pulse">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-4">Oops! Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Link to="/" className="bg-blue-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
