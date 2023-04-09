/*import React from "react";
import { PageProps } from '@/types';

interface EditProps extends PageProps {
  name: string;
}

const Edit: React.FC<EditProps> = (props: EditProps) => {
  return (
    <div dir="rtl" className="h-screen flex ">
        {props.name}
    </div>
  );
};

export default Edit;*/


import React, { useState } from 'react';
import { PageProps } from '@/types';

interface FormValues {
  nom: string;
  lastname: string;
  email: string;
  phone: string;
}

interface EditProps extends PageProps {
  data: FormValues;
}

const Edit: React.FC<EditProps> = (props: EditProps) => {
  console.log(props.data);
  
  const [formValues, setFormValues] = useState<FormValues>({
    nom: props.data.nom,
    lastname: '',
    email: '',
    phone : '' ,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          إنشاء حساب جديد
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
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  value={formValues.nom}
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
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  value={formValues.lastname}
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
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  value={formValues.phone}
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
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
            </div>

           
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py
                -2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                                 className="h-5 w-5 text-emerald-300 group-hover:text-emerald-200"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20"
                                 fill="currentColor"
                                 aria-hidden="true"
                               >
                <path
                                   fillRule="evenodd"
                                   d="M15.707 5.293a1 1 0 00-1.414-1.414L9 9.586 5.707 6.293A1 1 0 104.293 7.707l4 4a1 1 0 001.414 0l6-6z"
                                   clipRule="evenodd"
                                 />
                </svg>
                </span>
إنشاء حساب
</button>
</div>
</form>
</div>
</div>
</div>
);
};

export default Edit;

