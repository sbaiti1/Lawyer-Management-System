
import React from "react";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import Table from "./Table";
import AddIcon from '@mui/icons-material/Add';
import { PageProps } from '@/types';
import Layout from "@/Layouts/Layout";

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
    
        <Layout>
        
        <div className="w-11/12 mt-5 mx-auto">

        <div className="py-8 flex justify-between">
  <h1 className="text-xl font-bold">لائحة الموكلين</h1>
  <button className="bg-blue-500 text-white px-4 py-2 rounded"><span><AddIcon/></span> إضافة </button>
</div>
        <Table data={props.data} />
          </div> 
</Layout>

);
};

export default Home;

