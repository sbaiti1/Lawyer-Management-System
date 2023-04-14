import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect, FormEventHandler } from 'react';
import Navbar from '@/Components/Navbar';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


interface FormValues {
  nom: string;
  prenom: string;
  email: string;
  CIN: string;
  phone: string;
}

const Create: React.FC = () => {
  /*const [formValues, setFormValues] = useState<FormValues>({
    firstname: '',
    lastname: '',
    email: '',
    phone : '' ,
  });*/

  const { data, setData, post, processing, errors, reset } = useForm({
    nom: '',
    prenom: '',
    email: '',
    CIN: '',
    phone : '' ,
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
  const [age, setAge] = React.useState('');

  const handleAge = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div className='bg-gray-50'>
         <Navbar />
    <div className="mt-6 py-12 flex flex-col justify-center sm:px-6 lg:px-8">
               

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className=" text-center text-3xl font-extrabold text-gray-900">
        إضافة ملف جديد
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" method='post' onSubmit={handleSubmit}>
          <div className="flex gap-2">
            
          <div>
            
              
            </div>
            </div>
           

            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              رقم البطاقة الوطنية
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="CIN"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  value={data.CIN}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                البريد الإلكتروني
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleAge}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

           
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