
import React, { useState } from 'react';
import { PageProps } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Layout from '@/Layouts/Layout';

interface FormValues {
  id : number ;
  nom: string;
  prenom: string;
  CIN: string;
  email: string;
  phone: string;
}

interface EditProps extends PageProps {
  data: FormValues;
}

const Edit: React.FC<EditProps> = (props: EditProps) => {
  console.log(props.data);
  
  const { data, setData, patch, processing, errors, reset } = useForm({
    id : props.data.id ,
    nom: props.data.nom,
    prenom:  props.data.prenom,
    CIN: props.data.CIN,
    email: props.data.email,
    phone :  props.data.phone ,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    patch(route('clients.update', { client: data.id }));  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });

  };

  return (
    <Layout>
      <div className=" flex flex-col w-full justify-center sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        تعديل حساب 
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex gap-2">
            
          <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                الاسم
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="nom"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  value={data.nom}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                النسب
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="prenom"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  value={data.prenom}
                  onChange={handleChange}
                />
              </div>
            </div>
            </div>
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              رقم الهاتف
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="phone"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  value={data.phone}
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

           
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py
                -2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-amber-400 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                
تعديل</button>
</div>
</form>
</div>
</div>
</div>
</Layout>

);
};

export default Edit;

