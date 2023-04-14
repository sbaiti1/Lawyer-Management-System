
import React from "react";
import "react-calendar/dist/Calendar.css";
import Table from "./Table";
import AddIcon from '@mui/icons-material/Add';
import { PageProps } from '@/types';
import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/react";
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

        

<div className="flex gap-6 justify-between items-center mb-5">
                                <div className="flex-shrink-0 text-slate-600 w-fit font-bold text-xl"> لائحة الموكلين </div>
                                <div className="flex-grow"> </div>
                                <div className="flex-shrink-0"><input
                                  className="block w-full bg-slate-50 px-2 py-1 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                  type="text"
                                  placeholder="بحث"
                                /></div>
                                <div className="flex-shrink-0">   <Link href="/clients/create" className="bg-emerald-500 text-white px-4 py-2 rounded"><span><AddIcon/></span> إضافة </Link>
 </div>
                            </div>
        <Table data={props.data} />
          </div> 
</Layout>

);
};

export default Home;

