import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect, FormEventHandler } from 'react';
import Navbar from '@/Components/Navbar';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { PageProps } from '@/types';

interface FormValues {
  id : number ;
  nom: string;
  prenom: string;
  CIN: string;
  email: string;
  phone: string;
}

interface CreateProps extends PageProps {
  client: FormValues;
}

const Create: React.FC<CreateProps> = (props:CreateProps) => {

  const { data, setData, post, processing, errors, reset } = useForm({
    code: '',
    description: '',
    client_id: props.client.id,
   
});

  const handleSubmit : FormEventHandler = (e) => {
    e.preventDefault();
    post(route('dossiers.store'));
    

    // Handle form submission here
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  

  return (
    <div className='bg-gray-50'>
         <Navbar />
    <div className="mt-6 flex flex-col justify-center sm:px-6 lg:px-8">
               

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className=" text-center text-3xl font-extrabold text-gray-900">
        إضافة ملف جديد
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-4 px-4 shadow sm:rounded-lg sm:px-10">
          <h2 className="text-gray-700 text-lg font-medium py-2">الموكل : <span className='text-emerald-500 text-2xl'> {props.client.nom} {props.client.prenom} </span> </h2>
          <form className="space-y-6" method='post' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              رقم الملف 
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="code"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  value={data.code}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              ملاحظة حول الملف      </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="description"
                  type="text"
                  
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  value={data.description}
                  onChange={handleChange}
                />
              </div>
            </div>



            <Divider>
    <Chip label="الاجراء" />
  </Divider>
            
            <div className="flex gap-2">

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
نوع الاجراء              </label>
              <div className="mt-1">
              <select className="border border-gray-300 p-2 px-8 rounded">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
            </select>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              مدة الاجراء              </label>
              <div className="mt-1">
              <input
                  id="email"
                  name="email"
                  type="number"
                  autoComplete="email"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
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
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  
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
               
                إضافة
</button>
</div>
</form>
</div>
</div>
</div>
</div>
);
};

export default Create;