import * as React from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Layout from "@/Layouts/Layout";
import Table from '../Client/Table';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { PageProps } from '@/types';

import Dossiers from './dossier';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface TableProps extends PageProps {
  
    data: {
      id : number ;
      nom: string;
      prenom: string;
      email: string;
      CIN: string;
      phone: string;
    }[];

    dossiers : {
      id : number ;
      code: string;
      taches : {
        client_id : number ;
        id : number ;
        nom : string ;
        description : string ;
        echeance : string ;
      }[]
    }[];
  }
  

const Archive : React.FC<TableProps>  = ( props : TableProps )=>{
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    return(
        <Layout>
            <div className=" mx-auto w-full">
            <div  className="mx-3 pb-5 flex">
            <div className="hidden"><AcUnitIcon sx={{display : 'hidden'}} /></div>
            <h1 className="text-2xl font-bold text-emerald-500">قائمة الأرشيف</h1>


            </div>
            <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="الموكلين" {...a11yProps(0)} />
          <Tab label="الملفات" {...a11yProps(1)} />
          <Tab label="..." {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Table data={props.data}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Dossiers data={props.dossiers} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
            </div>
        </Layout>
    )
}

export default Archive
