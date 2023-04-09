
import React from "react";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import Table from "./Client/Table";
const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());

  

  return (
    <div className="mx-auto max-w-2xl">
       
  
    </div>
  );
};




const Home: React.FC = () => {
  return (
    <div dir="rtl" className="h-screen flex  bg-slate-100">
      <div className="w-fit flex-shrink-0">
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar />
        <div className="p-4">
        <div className="mt-5 w-2/3">
  <div className="flex flex-wrap gap-8 items-stretch">
    <div className="w-full md:w-1/2 lg:w-1/4 mb-4 mx-2">
      <div className="flex flex-col bg-sky-400 rounded-lg h-full shadow-lg">
        <div className="flex-grow p-4">
          <h2 className="text-white text-lg font-bold mb-2">Card 1</h2>
          <p className="text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/4 mb-4 mx-2" >
      <div className="flex flex-col bg-blue-500 rounded-lg h-full">
        <div className="flex-grow p-4">
          <h2 className="text-white text-lg font-bold mb-2">Card 2</h2>
          <p className="text-white text-sm">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/4 mb-4 mx-2">
      <div className="flex flex-col bg-emerald-500 rounded-lg h-full">
        <div className="flex-grow p-4">
          <h2 className="text-white text-lg font-bold mb-2">Card 3</h2>
          <p className="text-white text-sm">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
    
  </div>
  <Table/>
</div>

        </div>
  </div>
</div>
);
};

export default Home;

