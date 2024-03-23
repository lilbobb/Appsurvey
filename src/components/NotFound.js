import React from "react";
import { Link } from "react-router-dom";

const NotFound = (props) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      <h2 className="text-2xl text-black font-bold mb-4">Oops!</h2>
      <h1 className="text-2xl text-black font-bold mb-8">
        <strong className="text-red-500">404! </strong>Page Not Found
      </h1>
      <h2 className="text-2xl text-black font-bold mb-4">
        something went wrong
      </h2>

      <Link
        to="/"
        className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out"
      >
        Go back
      </Link>
    </div>
  );
};
export default NotFound;
