import React from 'react';

const data = [
  { id: 1, name: 'علي', age: 25, city: 'جدة' },
  { id: 2, name: 'محمد', age: 30, city: 'الرياض' },
  { id: 3, name: 'فاطمة', age: 27, city: 'الدمام' },
  { id: 4, name: 'نورة', age: 22, city: 'مكة المكرمة' },
];

const Table = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="px-4 py-2 text-center">#</th>
            <th className="px-4 py-2 text-center">الاسم</th>
            <th className="px-4 py-2 text-center">العمر</th>
            <th className="px-4 py-2 text-center">المدينة</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b bg-gray-100">
              <td className="px-4 py-2 text-center">{item.id}</td>
              <td className="px-4 py-2 text-center">{item.name}</td>
              <td className="px-4 py-2 text-center">{item.age}</td>
              <td className="px-4 py-2 text-center">{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
