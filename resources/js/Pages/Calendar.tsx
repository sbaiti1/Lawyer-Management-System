
import React from "react";
import "react-calendar/dist/Calendar.css";
import { PageProps } from '@/types';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import PeopleIcon from '@mui/icons-material/People';
import GavelIcon from '@mui/icons-material/Gavel';
import Layout from "@/Layouts/Layout";
import DemoApp from "@/Components/Calendar/DemoApp";
import { Box } from "@mui/material";
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




const MY: React.FC<TableProps> = ( ) => {
  console.log('hi');
  
  return (
    <Layout>
    
            <div className="cards w-full">
            <div className="w-full">
                  <h2 className="text-amber-300 text-lg font-bold mb-2"> <PeopleIcon style={{color : '#fcd34d'}}/> إجمالي الموكلين</h2>
            <DemoApp />
          </div>
                </div>
              
          
          

          
    
        

       
                  
 
          
          
  
          </Layout>
);
};

export default MY;

