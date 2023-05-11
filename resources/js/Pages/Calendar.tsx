
import React from "react";
import "react-calendar/dist/Calendar.css";
import { PageProps } from '@/types';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import PeopleIcon from '@mui/icons-material/People';
import GavelIcon from '@mui/icons-material/Gavel';
import Layout from "@/Layouts/Layout";
import DemoApp from "@/Components/Calendar/DemoApp";
import { Box } from "@mui/material";
import codeDB from './../data/data.json'
interface Props extends PageProps {
  total : number
  totalD : number
  events : Event[]
  data: {
    id : number ;
    nom: string;
    prenom: string;
    email: string;
    CIN: string;
    phone: string;
  }[];
}

interface Event {
  id: number;
  nom: string;
  echeance: string;
  archived: boolean;
  dossier_code: string;
  client_nom: string;
}


const MY: React.FC<Props> = (props : Props) => {
  console.log('hi');
  
  function getCourtName(c: string): string | null {
    const code = c.slice(3, 7);

    for (const item of codeDB) {
      for (const court of item.court) {
        if (court.code.includes(parseInt(code))) {
          return court.name;
        }
      }
    }
    return null; // return null if the code is not found
  }

  
  return (
    <Layout>
    
            <div className="cards w-full">
            <div className="w-full">
                  <PeopleIcon style={{color : '#fff'}}/> 
            {/* <DemoApp /> */}
            <div className="shadow overflow-hidden rounded border-b border-gray-200">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr className="text-center">
            <th className=" text-left py-3 px-4 uppercase font-medium text-sm">رقم الملف</th>
            <th className=" text-left py-3 px-4 uppercase font-medium text-sm">المدعي</th>
            <th className="text-left py-3 px-4 uppercase font-medium text-sm">المدعى عليه</th>
            <th className="text-left py-3 px-4 uppercase font-medium text-sm">الإجراء</th>
            <th className=" text-left py-3 px-4 uppercase font-medium text-sm">المحكمة</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          
          {props.events.map((data) => (
  <tr className="text-center" key={data.dossier_code}>
    <td className="w-1/5 text-left py-3 px-4">{data.dossier_code}</td>
    <td className="w-1/5 text-left py-3 px-4">{data.client_nom}</td>
    <td className="w-1/5 text-left py-3 px-4">---</td>
    <td className="w-1/5 text-left py-3 px-4">{data.nom}</td>
    <td className="w-1/5 text-left py-3 px-4">محكمة  {getCourtName(data.dossier_code)} </td>
  </tr>
))}
        </tbody>
      </table>
    </div>
          </div>
                </div>
              
          
          

          
    
        

       
                  
 
          
          
  
          </Layout>
);
};

export default MY;

