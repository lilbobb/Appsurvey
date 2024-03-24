import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 font-mono py-8 h-auto text-xs">
      <div className="container mx-auto flex flex-wrap justify-around px-4">
        {/* Privacy Section */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Privacy</h2>
          <p className="text-sm">
            Your privacy is important to us. Read our{" "}
            <Link to="/privacy" className="text-blue-300 hover:text-blue-400">
              Privacy Policy
            </Link>
          </p>
        </div>

        {/* Contact Section */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Contact us</h2>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:calerocolecarlos@pioneervisionfoundation.org"
              className="text-blue-300 hover:text-blue-400"
              aria-label="Email Us"
            >
              calerocolecarlos@pioneervisionfoundation.org
            </a>
          </p>
          <p className="text-sm">
            Phone:{" "}
            <a
              href="tel:+1 (925) 2036179"
              className="text-blue-300 hover:text-blue-400"
              aria-label="Call Us"
            >
              +1 (925) 2036179
            </a>
          </p>
        </div>
        <ul>
          <li>
            <Link
              to="/"
              className="block text-gray-100 hover:text-gray-300 px-4 py-1 flex items-center"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block text-gray-100 hover:text-gray-300 px-4 py-1 flex items-center"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block text-gray-100 hover:text-gray-300 px-4 py-1 flex items-center"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/privacy"
              className="block text-gray-100 hover:text-gray-300 px-4 py-1 flex items-center"
            >
              Privacy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

