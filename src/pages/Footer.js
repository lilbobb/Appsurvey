import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-6">
      <div className="container mx-auto flex flex-wrap justify-between px-6">
        {/* Privacy Section */}
        <div className="mb-4 md:w-1/4">
          <h2 className="text-lg md:text-lg font-bold mb-2">Privacy</h2>
          <p className="text-sm md:text-xs">
            Your privacy is important to us. Read our{" "}
            <Link to="/privacy" className="text-blue-300 hover:text-blue-400">
              Privacy Policy
            </Link>
          </p>
        </div>

        {/* Contact Section */}
        <div className="mb-4 md:w-1/4">
          <h2 className="text-xl md:text-lg font-bold mb-2">Contact us</h2>
          <p className="text-sm md:text-xs">
            Email:{" "}
            <a
              href="mailto:info@pioneervisionfoundation.org"
              className="text-blue-300 hover:text-blue-400"
              aria-label="Email Us"
            >
              info@pioneervisionfoundation.org
            </a>
            <br />
            <a
              href="mailto:colejeff112@employee-us.net"
              className="text-blue-300 hover:text-blue-400"
              aria-label="Email Us"
            >
              colejeff112@employee-us.net
            </a>
          </p>
          <p className="text-sm md:text-xs">
            Phone:{" "}
            <a
              href="tel:+1 (925) 2036179"
              className="text-blue-300 hover:text-blue-400"
              aria-label="Call Us"
            >
              +1 (925) 2036179
            </a>
            <br />
            <a
              href="tel:+1 (515) 5814855"
              className="text-blue-300 hover:text-blue-400"
              aria-label="Call Us"
            >
              +1 (515) 5814855
            </a>
          </p>
        </div>

        {/* Navigation Section */}
        <div className="md:w-1/4">
          <h2 className="text-lg md:text-lg font-bold mb-2">Navigation</h2>
          <ul className="text-sm md:text-xs">
            <li>
              <Link
                to="/"
                className="block text-gray-100 hover:text-gray-300 py-1"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-gray-100 hover:text-gray-300 py-1"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block text-gray-100 hover:text-gray-300 py-1"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className="block text-gray-100 hover:text-gray-300 py-1"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="block text-gray-100 hover:text-gray-300 py-1"
              >
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
