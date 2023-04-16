
import React from "react";
import "react-calendar/dist/Calendar.css";
import { PageProps } from '@/types';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import PeopleIcon from '@mui/icons-material/People';
import GavelIcon from '@mui/icons-material/Gavel';
import Layout from "@/Layouts/Layout";
import DemoApp from "@/Components/Calendar/DemoApp";
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
  console.log('hi');
  
  return (
    <Layout>
    
            <div className="cards w-2/3  ">
            <div className="flex flex-wrap items-stretch justify-between mx-8">
            <div className="w-full md:w-1/2 lg:w-1/4 mb-4 mx-2 ">
              <div className="flex flex-col bg-white rounded-md h-full shadow-md cursor-pointer hover:scale-105 transform transition duration-300 ">
                <div className="flex-grow p-4">
                  <h2 className="text-amber-300 text-lg font-bold mb-2"> <PeopleIcon style={{color : '#fcd34d'}}/> إجمالي الموكلين</h2>
                  <p className="text-gray-500 text-sm"> {props.total} موكل</p>
                </div>
              </div>
            </div>
          <div className="w-full h-fit md:w-1/2 lg:w-1/4 mb-4 mx-2" >
            <div className="flex flex-col bg-white shadow-md cursor-pointer hover:scale-105 transform transition duration-300 rounded-lg h-full">
              <div className="flex-grow p-4">
                <h2 className="text-blue-500 text-lg font-bold mb-2"> <FolderCopyIcon style={{color : '#3b82f6'}}/> إجمالي الملفات </h2>
                <p className="text-gray-500 text-sm"> {props.totalD} ملف</p>
              </div>
            </div>
          </div>
          <div className="w-full h-fit md:w-1/2 lg:w-1/4 mb-4 mx-2">
            <div className="flex flex-col bg-white shadow-md cursor-pointer hover:scale-105 transform transition duration-300 rounded-lg h-full">
              <div className="flex-grow p-4">
                <h2 className="text-emerald-500 text-lg font-bold mb-2"><GavelIcon style={{color : '#10b981'}}/> جلسات اليوم</h2>
                <p className="text-gray-500 text-sm"> 6 جلسات </p>
              </div>
            </div>
            
          </div>

          
    
        </div>
        <div className="">
            <DemoApp />
          </div>
                  </div>
 
          <div className="flex flex-col gap-8 w-1/3 px-8 ">
            <div className="bg-white border-2 border-zinc-200  h-40 rounded shadow-xs ">

            <h1 className="text-blue-500 text-xl text-center p-4">Quick access</h1>
            </div>

            <div className="bg-white border-2 border-zinc-200  h-72 rounded shadow-xs ">

            <h1 className="text-blue-500 text-xl text-center p-4">Quick access</h1>
            </div>
          </div>
          
  
          </Layout>
);
};

export default Home;

