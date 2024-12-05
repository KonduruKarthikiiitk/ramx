import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleFeaturesDropdown = () => setIsFeaturesOpen(!isFeaturesOpen);
  const toggleSolutionsDropdown = () => setIsSolutionsOpen(!isSolutionsOpen);
  const navigate = useNavigate();

  return (
    <nav className="bg-white fixed m-3 w-full max-w-[1054px] h-[54px] top-4 left-[46%] transform -translate-x-1/2 z-20 border border-[#E5E7EB] opacity-100 px-6 rounded-lg">
      <div className="flex items-center justify-between px-5 py-2 mx-auto max-w-screen-xl">
        <a href="/" className="flex items-center space-x-3">
          <div className="text-red-600 text-xl font-bold">
            <span className="text-black">R</span>Max
          </div>
        </a>

        {/* Navigation Links and Buttons */}
        <div className="hidden md:flex items-center ml-auto space-x-6">
          {/* Navigation Items */}
          <ul className="flex items-center space-x-6">
            <li onClick={() => navigate("/")}>
              <Link
                to="/"
                className="py-2 px-3 text-gray-800 font-medium hover:text-blue-600"
                aria-current="page"
              >
                Home
              </Link>
            </li>

            {/* Features Dropdown */}
            <li
              className="hover:text-red-600 cursor-pointer relative"
              onClick={toggleFeaturesDropdown}
            >
              Features
              {isFeaturesOpen && (
                <div className="absolute bg-white shadow-lg py-4 mt-2 w-96 grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
                  <div>
                    <h4 className="font-semibold text-black text-lg">Discover</h4>
                    <ul>
                      <li className="text-gray-600 py-1 hover:text-black">Custom Branded website</li>
                      <li className="text-gray-600 py-1 hover:text-black">User Mobile App</li>
                      <li className="text-gray-600 py-1 hover:text-black">Business Webpage</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black text-lg">Manage</h4>
                    <ul>
                      <li className="text-gray-600 py-1 hover:text-black">Courses</li>
                      <li className="text-gray-600 py-1 hover:text-black">Communication</li>
                      <li className="text-gray-600 py-1 hover:text-black">Trail Session</li>
                      <li className="text-gray-600 py-1 hover:text-black">Staff Roles</li>
                      <li className="text-gray-600 py-1 hover:text-black">Workshops</li>
                      <li className="text-gray-600 py-1 hover:text-black">Reporting tools</li>
                      <li className="text-gray-600 py-1 hover:text-black">Multi-Location</li>
                      <li className="text-gray-600 py-1 hover:text-black">Events</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black text-lg">Grow</h4>
                    <ul>
                      <li className="text-gray-600 py-1 hover:text-black">AI Marketing Tools</li>
                      <li className="text-gray-600 py-1 hover:text-black">Social Media Integration</li>
                      <li className="text-gray-600 py-1 hover:text-black">CRM</li>
                    </ul>
                  </div>
                </div>
              )}
            </li>

            <li onClick={() => navigate("/pricing")} className="hover:text-blue-600 cursor-pointer">
              Pricing
            </li>

            {/* Solutions Dropdown */}
            <li
              className="hover:text-blue-600 cursor-pointer relative"
              onClick={toggleSolutionsDropdown}
            >
              Solutions
              {isSolutionsOpen && (
                <div className="absolute bg-white shadow-lg py-2 mt-2 w-40">
                  <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                    Solution 1
                  </Link>
                  <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                    Solution 2
                  </Link>
                </div>
              )}
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex items-center gap-4 px-3">
            <span>|</span>
            <button
              type="button"
              className="text-black border border-[rgba(229,231,235,1)] bg-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center"
            >
              Login
            </button>
            <button
              type="button"
              className="text-white bg-[rgba(245,79,53,1)] hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-2 text-center"
            >
              Try For Free
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-gray-800 hover:text-gray-600 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-8 6h8"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[56px] left-0 right-0 bg-white shadow-lg md:hidden flex flex-col items-center space-y-4 py-4">
          <Link to="/" className="text-gray-600 hover:text-black cursor-pointer py-2 px-3">
            Home
          </Link>
          <div
            className="text-gray-600 hover:text-black cursor-pointer relative py-2 px-3"
            onClick={toggleFeaturesDropdown}
          >
            Features
            {isFeaturesOpen && (
              <div className="absolute bg-white shadow-lg py-2 mt-2 w-40">
                <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                  Feature 1
                </Link>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                  Feature 2
                </Link>
              </div>
            )}
          </div>
          <Link to="/pricing" className="text-gray-600 hover:text-black cursor-pointer py-2 px-3">
            Pricing
          </Link>
          <div
            className="text-gray-600 hover:text-black cursor-pointer relative py-2 px-3"
            onClick={toggleSolutionsDropdown}
          >
            Solutions
            {isSolutionsOpen && (
              <div className="absolute bg-white shadow-lg py-2 mt-2 w-40">
                <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                  Solution 1
                </Link>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                  Solution 2
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
