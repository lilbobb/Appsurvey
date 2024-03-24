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
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 mb-4 text-yellow-600 text-center font-mono">
          Welcome to Pioneer Vision Foundation
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mt-4 sm:mt-8 mb-6 sm:mb-10 font-bold text-center">
          Connecting people to grant opportunities and assistance. <br />
          Get up to <strong className="text-red-500">$50,000</strong> as a
          support for for people like you.
        </p>
        <Link
          to="/UseForm"
          className="bg-gray-900  hover:bg-gray-700 text-gray-300 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 transition duration-400 ease-in-out flex items-center mb-10"
        >
          Apply for Grant
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Link>
      </div>
      <p className="mt-4 py-4 px-6 text-xs text-gray-400 font-mono text-center">
        The Pioneer Vision Foundation is committed to supporting small
        communities across the states. As part of our mission to empower these
        communities, we have launched a program that provides grant and giveaway
        opportunities to individuals from these areas.
        <br /> The contact information collected through surveys will be used
        solely for communication purposes related to the grant program and
        initiatives of Pioneer Vision Foundation. We are dedicated to ensuring
        the privacy and security of all information collected. <br /> This
        policy is subject to periodic review and updates to ensure alignment
        with the mission and values of Pioneer Vision Foundation. Any changes
        will be communicated through official channels. By adhering to these
        policies, Pioneer Vision Foundation aims to serve communities
        effectively and empower individuals to thrive. Thank you for your
        support and participation in our mission.
      </p>
      <Footer />
    </div>
  );
};

export default Home;
