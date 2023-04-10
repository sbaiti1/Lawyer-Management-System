
import React from "react";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import Table from "./Table";
import { PageProps } from '@/types';

interface TableProps extends PageProps {
  
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
      <div className="w-fit flex-shrink-0">
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar />
        
        <div className="w-11/12 mt-10 mx-auto">
          <h1 className="text-lg font-medium ">لائح الموكلين  </h1>
        <Table data={props.data} />
          </div> 
</div>

        </div>

);
};

export default Home;

