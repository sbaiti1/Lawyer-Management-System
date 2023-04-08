
import React from "react";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Navbar from "@/Components/Navbar";
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

