import React from 'react';
import { PageProps } from '@/types';
import { Link } from '@inertiajs/react';
interface TableProps {
  data: {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    CIN: string;
    phone: string;
  }[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              #
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              الاسم
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              النسب
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              CIN
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              الهاتف
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              البريد الإلكتروني
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap ">{item.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">{item.nom}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">{item.prenom}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">{item.CIN}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">{item.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">{item.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <Link href={`/clients/${item.id}`}>
                  <span className="text-indigo-600 hover:text-indigo-900">
                  المزيد
                  </span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
