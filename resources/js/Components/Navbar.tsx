import React from "react";
import Drawer from "./Drawer";
const Navbar: React.FC = () => {
    return (
      <nav className=" w-full drop-shadow p-2 bg-white flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
        <Drawer/>
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