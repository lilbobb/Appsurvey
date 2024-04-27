import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/NavBar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-slate-300 mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-4xl font-bold mt-4 mb-4 text-yellow-500 text-center font-mono shadow-sm">
          Welcome to Pioneer Vision Foundation
        </h1>
        <p className="text-2xl lg:text-xl mt-8 mb-8 sm:mb-10 text-center font-roboto">
          Connecting people to grant opportunities and assistance. <br />
          Get up to <strong className="text-red-600 text-2xl">
            $50,000
          </strong>{" "}
          as a support for people like you.
        </p>
        <Link
          to="/UseForm"
          className="bg-gray-900  hover:bg-gray-700 text-gray-300 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 transition duration-400 ease-in-out flex items-center mb-10 shadow-md" 
        >
          Apply for Grant
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Link>
        <p className="mt-4 py-4 px-6 text-lg text-gray-900 font-mono text-justify">
          <span className="font-bold text-4xl">O</span>ur goal is to develop
          individuals in small communities and towns across the states and bring
          in investors, investment opportunities, personal and community growth!
          This foundation invests in humans for a brighter future. <br />{" "}
          <span className="font-bold text-2xl">T</span>he Pioneer Vision
          Foundation, a non-proﬁt organization, is committed to supporting small
          communities across United States and part of Canada. As part of our
          mission to empower these communities, we have launched a program that
          provides grant and giveaway opportunities to individuals from these
          areas. <br />
          <span className="font-bold text-2xl">T</span>he contact information collected through surveys will be used solely
          for communication purposes related to the grant program and
          initiatives of Pioneer Vision Foundation. We are dedicated to ensuring
          the privacy and security of all information collected.
          <br /> <span className="font-bold text-2xl">T</span>his policy is subject to periodic review and updates to ensure
          alignment with the mission and values of Pioneer Vision Foundation.
          Any changes will be communicated through oﬃcial channels. By adhering
          to these policies, Pioneer Vision Foundation aims to serve communities
          effectively and empower individuals to thrive.
          <br /> <span className="font-bold text-2xl">T</span>hank you for your support and participation in our mission to
          claim grants, empower individuals, provide community support, and
          beneﬁt small communities through non-proﬁt initiatives aimed at
          business grants, disability beneﬁt claims, and combating inﬂation
          grants.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
