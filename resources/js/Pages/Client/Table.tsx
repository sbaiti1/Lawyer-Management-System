import { PageProps } from '@/types';

import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: '#', width: 70 },
  { field: 'nom', headerName: 'الاسم', width: 130 },
  { field: 'prenom', headerName: ' النسب', width: 130 },
  {
    field: 'CIN',
    headerName: 'CIN',
    type: 'number',
    width: 120,
  },
  {
    field: 'phone',
    headerName: 'الهاتف',
    type: 'number',
    width: 200,
  },
  { field: 'email', headerName: ' البريد الإلكتروني', width: 250 },

  
];


interface TableProps {
  data: {
    id : number ;
    nom: string;
    prenom: string;
    email: string;
    CIN: string;
    phone: string;
  }[];
}

const Table : React.FC<TableProps> = ({data}) => {
  const rows = data ;
  return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      checkboxSelection
    />
  </div>
  );
};

export default Table;
