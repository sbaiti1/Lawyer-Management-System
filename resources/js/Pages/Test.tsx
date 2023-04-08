
import React from "react";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());

  

  return (
    <div className="mx-auto max-w-2xl">
       
  
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

