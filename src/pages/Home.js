import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/NavBar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow container mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-yellow-600 text-center font-mono">
          Welcome to Pioneer Vision Foundation
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mt-4 sm:mt-8 mb-6 sm:mb-10 font-bold text-center">
          Connecting people to grant opportunities and assistance
        </p>
        <Link
          to="/UseForm"
          className="bg-gray-900  hover:bg-gray-700 text-gray-300 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 transition duration-400 ease-in-out flex items-center mb-6"
        >
          Apply for Grant
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
