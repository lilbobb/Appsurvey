import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHome,
  faInfoCircle,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-blue-600 py-4 relative sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 flex-wrap">
        {/* Text */}
        <div className="flex flex-row text-white text-2lg font-bold mt-2">
          <Link to="/">
            {" "}
            <img src="logo.jpg" alt="logo" className="ml-2 w-9" />
          </Link>
          Pioneer Vision Foundation
        </div>

        {/* Menu Items */}
        <ul
          className={`absolute top-full right-0 md:relative md:flex md:space-x-10 md:space-x-8 flex-col md:flex-row md:items-center z-10 text-slate-300 font-bold ${
            isOpen
              ? "flex md:mt-0 font-bold py-16 px-10 h-96 rounded-b-lg space-y-3 bg-gray-600"
              : "hidden md:flex"
          }`}
        >
          <li>
            <Link
              to="/"
              className="block text-white hover:text-gray-300 px-4 py-2 flex items-center"
            >
              <FontAwesomeIcon
                icon={faHome}
                className="block lg:hidden md:hidden mr-2"
              />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block text-white hover:text-gray-300 px-4 py-2 flex items-center"
            >
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="block lg:hidden md:hidden mr-2 "
              />
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block text-white hover:text-gray-300 px-4 py-2 flex items-center"
            >
              <FontAwesomeIcon
                icon={faAddressBook}
                className="block lg:hidden md:hidden mr-2"
              />
              Contact
            </Link>
          </li>
        </ul>

        {/* Menu Button */}
        <button
          className="md:hidden text-white hover:text-gray-300 focus:outline-none ml-auto"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
