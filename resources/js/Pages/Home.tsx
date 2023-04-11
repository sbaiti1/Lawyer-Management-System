
import React from "react";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import Table from "./Client/Table";
import { PageProps } from '@/types';

interface TableProps extends PageProps {
  total : number
  totalD : number
  data: {
    id : number ;
    nom: string;
    prenom: string;
    email: string;
    CIN: string;
    phone: string;
  }[];
}




const Home: React.FC<TableProps> = ( props : TableProps ) => {
  return (
    <div dir="rtl" className="h-screen flex  bg-slate-100">
      {/* <div className="w-fit flex-shrink-0">
        <Sidebar />
      </div> */}
      <div className="w-full">
        <Navbar />
        <div className="p-4">
        <div className="mt-5 w-2/3">
  <div className="flex flex-wrap gap-8 items-stretch">
    <div className="w-full h-fit md:w-1/2 lg:w-1/4 mb-4 mx-2">
      <div className="flex flex-col bg-sky-400 rounded-lg h-full shadow-lg">
        <div className="flex-grow p-4">
          <h2 className="text-white text-lg font-bold mb-2">إجمالي الموكلين</h2>
          <p className="text-white text-sm"> {props.total} موكل</p>
        </div>
      </div>
    </div>
    <div className="w-full h-fit md:w-1/2 lg:w-1/4 mb-4 mx-2" >
      <div className="flex flex-col bg-blue-500 rounded-lg h-full">
        <div className="flex-grow p-4">
          <h2 className="text-white text-lg font-bold mb-2">إجمالي الملفات</h2>
          <p className="text-white text-sm"> {props.totalD} ملف</p>
        </div>
      </div>
    </div>
    <div className="w-full h-fit md:w-1/2 lg:w-1/4 mb-4 mx-2">
      <div className="flex flex-col bg-emerald-500 rounded-lg h-full">
        <div className="flex-grow p-4">
          <h2 className="text-white text-lg font-bold mb-2">إجمالي جلسات اليوم</h2>
          <p className="text-white text-sm"> 6 جلسات </p>
        </div>
      </div>
    </div>
    
  </div>
 <Table data={props.data} /> 
</div>

        </div>
  </div>
</div>
);
};

export default Home;

