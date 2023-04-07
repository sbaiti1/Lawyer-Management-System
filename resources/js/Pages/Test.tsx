
import React from "react";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FolderIcon from '@mui/icons-material/Folder';
import LogoutIcon from '@mui/icons-material/Logout';
import WidgetsIcon from '@mui/icons-material/Widgets';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());

  

  return (
    <div className="mx-auto max-w-2xl">
       
  
    </div>
  );
};

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

const Sidebar: React.FC = () => {
  return (
    <div className="bg-white p-4 h-full">
      <ul>
         <li className="py-0 text-lg font-medium">
          <a href="#"> <AccountBalanceIcon style={{color : "#fff"}}/></a>
        </li>
        <li className="py-8 text-lg font-medium">
          <a href="#">        <WidgetsIcon style={{color : "#2dd4bf"}}/></a>
        </li>
        <li className="py-8 text-lg font-medium">
          <a href="#"> <CalendarMonthIcon style={{color : "#2dd4bf"}}/> </a>
        </li>
        <li className="py-5 text-lg font-medium">
          <a href="#"><FolderIcon style={{color : "#2dd4bf"}}/></a>
        </li>
        <li className="py-5 text-lg font-medium">
          <a href="#"><LogoutIcon style={{color : "#94a3b8"}} /></a>
        </li>
      </ul>
    </div>
  );
};

const Test: React.FC = () => {
  return (
    <div dir="rtl" className="h-screen flex  bg-slate-100">
      <div className="w-fit flex-shrink-0">
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar />
        <div className="p-4">م
        </div>
  </div>
</div>
);
};

export default Test;

