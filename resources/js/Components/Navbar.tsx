import React from "react";
import Drawer from "./Drawer";
import Avatar from '@mui/material/Avatar';

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
        <Avatar
        alt="Remy Sharp"
        src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        sx={{ width: 45, height: 45 }}
      />
          <span className="text-gray-500 text-md px-3 font-medium">اسم المستخدم</span>
        </div>
      </nav>
    );
  };

export default Navbar ;