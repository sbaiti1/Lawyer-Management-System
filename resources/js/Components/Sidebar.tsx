import React from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FolderIcon from '@mui/icons-material/Folder';
import LogoutIcon from '@mui/icons-material/Logout';
import WidgetsIcon from '@mui/icons-material/Widgets';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

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

export default Sidebar ;