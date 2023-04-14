
import React, { useState } from 'react';
import { PageProps } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Avatar from '@mui/material/Avatar';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import FolderIcon from '@mui/icons-material/Folder';
import { Divider } from '@mui/material';
import Layout from '@/Layouts/Layout';
interface FormValues {
  id : number ;
  nom: string;
  prenom: string;
  CIN: string;
  email: string;
  phone: string;
}

interface Dossier {
  id : number ;
  code: string;
  
}

interface ShowProps extends PageProps {
  data: FormValues;
  dossiers :  Dossier[]

}

function stringAvatar(name: string) {
    return {

      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

const Show : React.FC<ShowProps> = (props : ShowProps) => {
  console.log(props.dossiers);
  
        return (
            <>
                        <Layout>
                        <div className="flex w-full gap-7 px-6 py-7">
                            <div className="bg-white flex flex-col items-center gap-2 shadow-md h-96 w-fit rounded-lg py-8 px-7">
                                    <div className="text-slate-700 w-fit font-bold text-xl mb-8 ">{props.data.nom} {props.data.prenom }</div>
                                    <div className="text-gray-600 font-medium text-md mb-2 px-8 flex gap-1 items-center">  {props.data.email}  <EmailIcon style={{color : '#10b981'}}/></div>
                                    <div className="text-gray-600 font-medium text-md mb-2"> {props.data.phone} <PhoneIcon style={{color : '#10b981'}}/> </div>
                                    <div className="text-gray-600 font-medium text-md mb-2"> <strong className='text-emerald-500'>CIN : </strong>{props.data.CIN}</div>
                                    <button className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded mt-4">
                                    تعديل
                                    </button>
                            </div>

                            <div className="bg-white flex flex-col gap-2 shadow-md w-full h-96 rounded-lg py-5 px-12 ">
                            <div className="flex gap-6 justify-between items-center">
                                <div className="flex-shrink-0 text-slate-600 w-fit font-bold text-xl"> لائحة الملفات </div>
                                <div className="flex-grow"> </div>
                                <div className="flex-shrink-0"><input
                                  className="block w-full px-2 py-1 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                  type="text"
                                  placeholder="بحث"
                                /></div>
                                <div className="flex-shrink-0">   <Link href={`/dossiers/create?client_id=${props.data.id}`} className="bg-emerald-500 text-white px-4 py-2 rounded"><span><AddIcon/></span> إضافة </Link>
 </div>
                            </div>

                            <div className="mt-8 flex flex-col gap-3">

                                  
                                    {props.dossiers.map(x=> (<div className="flex px-3 py-3 bg-slate-200 shadow-sm  rounded cursor-pointer hover:scale-105 transform transition duration-300">
                                    <FolderIcon   style={{color : '#f87171'}} />
                                    <div className="text-slate-700 px-5"> {x.code} </div>
                                  </div>) )}

                                  
                                    {/* <Divider  /> */}
                            </div>


                            </div>

                        </div>
                    </Layout>
            </>
        )
}

export default Show ;