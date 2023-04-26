import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect, FormEventHandler } from 'react';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { PageProps } from '@/types';
import Layout from '@/Layouts/Layout';
import { log } from 'console';
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

interface Tache{
  client_id : number ;
  id : number ;
  nom : string ;
  description : string ;
  echeance : string ;
}

interface CreateProps extends PageProps {
  client: FormValues;
  dossier : Dossier ; 
  tache : Tache ;
}

const Edit: React.FC<CreateProps> = (props:CreateProps) => {

  const { data, setData, patch, processing, errors, reset } = useForm({
    dossier_id : props.dossier.id ,
    client_id : props.client.id ,
    id: props.tache.id,
    tache_nom : props.tache.nom , 
    tache_desc : props.tache.description , 
    echeance : props.tache.echeance


   
});


  const handleSubmit : FormEventHandler = (e) => {
    e.preventDefault();
    patch(route('taches.update' , {tach : data.id}));
    

    // Handle form submission here
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  

  console.log(data.tache_nom);
  

  return (
    
    <Layout>
         
    <div className="flex flex-col w-full justify-center sm:px-6 lg:px-8">
               

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className=" text-center text-3xl font-extrabold text-gray-900">
        تعديل اجراء 
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-4 px-4 shadow sm:rounded-lg sm:px-10">
          <h2 className="text-gray-700 text-lg font-medium py-2">الموكل : <span className='text-emerald-500 text-2xl'> {props.client.nom} {props.client.prenom} </span> </h2>
          <h2 className="text-gray-700 text-lg font-medium py-2">الملف : <span className='text-emerald-500 text-2xl'> {props.dossier.code}  </span> </h2>

          <form className="space-y-6" method='post' onSubmit={handleSubmit}>
           



            <Divider>
    <Chip label="الاجراء" />
  </Divider>
            
            <div className="flex gap-2">

            <div>
              <label htmlFor="tache_nom" className="block text-lg font-medium text-gray-700">
نوع الاجراء              </label>
              <div className="mt-1">
              <select value={data.tache_nom} name='tache_nom' onChange={handleChange} className="border border-gray-300 p-2 px-8 rounded">
                  <option value="فتح الملف">فتح الملف</option>
                  <option value="إستدعاء">إستدعاء</option>
                  <option value="حكم"> حكم</option>
            </select>

{/* <select name="tache_nom" value={data.tache_nom} onChange={handleChange} className="border border-gray-300 p-2 px-8 rounded">
  {['فتح الملف', 'إستدعاء', 'حكم'].map((option) => (
    <option key={option} value={option} selected={data.tache_nom === option ? true :false}>
      {option}
    </option>
  ))}
</select> */}

              </div>
            </div>

            <div>
              <label htmlFor="echeance" className="block text-lg font-medium text-gray-700">
              تاريخ الاجراء              </label>
              <div className="mt-1">
              <input
                  id="echeance"
                  name="echeance"
                  type="date"
                  value={new Date(data.echeance).toLocaleDateString('fr-CA')}                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  onChange={handleChange}
                />
              </div>
            </div>
            
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              ملاحظة حول الاجراء      </label>
              <div className="mt-1">
                <input
                  id="tache_desc"
                  name="tache_desc"
                  type="tache_desc"
                  value={data.tache_desc}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  onChange={handleChange}
                />
              </div>
            </div>
            


           
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py
                -8 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
               
               تعديل
</button>
</div>
</form>
</div>
</div>
</div>
</Layout>
);
};

export default Edit;