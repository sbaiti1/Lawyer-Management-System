
import React from 'react';
import { PageProps } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Layout from '@/Layouts/Layout';

interface Client {
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
  description: string;
  client_id : number
  
}

interface EditProps extends PageProps {
  data: Client;
  dossier : Dossier 

}

const Edit: React.FC<EditProps> = (props: EditProps) => {
  console.log(props.data);
  
  const { data, setData, patch, processing, errors, reset } = useForm({
    id : props.dossier.id ,
    code: props.dossier.code,
    description:  props.dossier.description,
    client_id : props.dossier.client_id
    
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    patch(route('dossiers.update', { dossier: data.id }));  };

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
        تعديل ملف 
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex gap-2">
            
          <h2 className="text-gray-700 text-lg font-medium py-2">الموكل : <span className='text-emerald-500 text-2xl'> {props.data.nom} {props.data.prenom} </span> </h2>

            </div>
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
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
               ملاحظة حول الملف
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="description"
                  type="text"
                  autoComplete="name"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  value={data.description}
                  onChange={handleChange}
                />
              </div>
            </div>

            

           
            <div>
            <button
                type="submit"
                className="group relative w-full flex items-center justify-center py
                -8 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
تعديل               <DoneIcon />
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

