import React from "react";

const Navbar: React.FC = () => {
    return (
      <nav className=" w-full p-2 bg-white flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <svg
            className="h-6 w-6 text-white mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.293 8.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M3.293 11.293a1 1 0 000 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 00-1.414-1.414L10 16.586l-4.293-4.293a1 1 0 00-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-white text-lg font-bold">Logo</span>
        </div>
        {/* Search input */}
        
        {/* Profile */}
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="w-10 h-10 rounded-full mx-2"
          />
          <span className="text-white text-lg font-medium">اسم المستخدم</span>
        </div>
      </nav>
    );
  };

export default Navbar ;