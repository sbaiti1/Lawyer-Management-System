
import React, { useState } from 'react';
import { PageProps } from '@/types';
import { Link } from '@inertiajs/react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AddIcon from '@mui/icons-material/Add';
import FolderIcon from '@mui/icons-material/Folder';
import Layout from '@/Layouts/Layout';
import { useForm } from '@inertiajs/react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';

import codeDB from '../../data/data.json'
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
  client : Client ;
  taches : {nom : string , echeance : string}[]
  
}

interface ShowProps extends PageProps {
  
  dossiers :  Dossier[]
  total : number

}



const Show : React.FC<ShowProps> = (props : ShowProps) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const { data, setData, patch, processing, errors, reset } = useForm({
    dossiers : props.dossiers,
    
  });

  const getColorName = (c : string)=>{
    
     // Extract the 4 digits starting from the 4th position
  const code = c.slice(3, 7);
    for (const obj of codeDB) {
      for (const court of obj.court) {
        if (court.code.includes(Number(code))) {
          return obj.color;
        }
      }
    }
  }  
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

    const ArchiveDossier = (event: React.FormEvent<HTMLFormElement> , id : number) => {
      event.preventDefault();
      const confirmed = window.confirm('Are you sure you want to delete this record?');
      if (confirmed) {
        patch(route(`dossiers.archive` , {id}));      }
    };

  const [searchQuery, setSearchQuery] = useState("");  
  const filteredDossiers = props.dossiers.filter((item) => item.code.toLowerCase().includes(searchQuery.toLowerCase()));
  const output = filteredDossiers ? filteredDossiers : props.dossiers
        return (
            <>
                        <Layout>
                        <div className="flex w-full gap-7 px-6 py-7">
                           

                            <div className="bg-white flex flex-col gap-2 shadow-md w-full min-h-96 rounded-lg py-5 px-12 ">
                            <div className="flex gap-6 justify-between items-center">
                            
                                <div className="flex-shrink-0 text-slate-600 w-fit font-bold text-xl"> لائحة الملفات </div>
                                <div className="flex-grow"> </div>
                                <div className="flex-shrink-0"><input
                                  className="block w-full px-2 py-1 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                  type="text"
                                  value={searchQuery}
                                  onChange={(e) => setSearchQuery(e.target.value)}
                                  placeholder="بحث"
                                /></div>
                                <div className="bg-emerald-400 rounded text-white font-medium px-10 py-1.5">
                                   {props.total} ملف
                                </div>
                                {/* <div className="flex-shrink-0">  
                                 <Link href={`/dossiers/create?client_id=`} className="bg-emerald-500 text-white px-4 py-2 rounded"><span><AddIcon/></span> إضافة </Link>
                                </div> */}
                               
                            </div>

                            <div className="mt-8 flex flex-col gap-3">

                                  
                                    {/* { output.map((x , i)=> (<div className="flex px-3 py-3 bg-slate-200 shadow-sm  rounded cursor-pointer hover:scale-105 transform transition duration-300">
                                    <FolderIcon   style={{color : '#f87171'}} />
                                    <div className="text-slate-700 px-5"> {x.code} </div>
                                  </div>) )} */}

                                  { output.map((x , i)=> (

                                  <Accordion sx={{background : '#f8fafc'}} expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
                                        <AccordionSummary
                                          expandIcon={<ExpandMoreIcon />}
                                          aria-controls={`panel${i}bh-content`}
                                          id={`panel${i}bh-header`}
                                        >
                                          <Typography sx={{ width: '33%', display : 'flex' , alignItems : 'center' , flexShrink: 0 }}>
                                              <FolderIcon   style={{color : `${getColorName(x.code)}`}} /> 
                                          <Typography sx={{padding : '0 12px' , color : '#334155'}}> {x.code} </Typography>

                                          </Typography>

                                          
                                        </AccordionSummary>
                                          <Typography sx={{padding : '0 3rem' , color : '#334155'}}> الموكل : <Button href={`clients/${x.client.id}`} > {x.client.nom} {x.client.prenom} </Button>  </Typography>
                                        <AccordionDetails sx={{display : 'flex' , justifyContent : 'space-between'}}>
                                        <Timeline sx={{maxWidth : 300}} >
                                          {x.taches.map((t , i)=>(
                                            
                                              <TimelineItem>
                                                <TimelineOppositeContent color="text.secondary">
                                                {t.echeance.slice(0, 10)}                                                 </TimelineOppositeContent>
                                                <TimelineSeparator>
                                                  <TimelineDot />
                                                  <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent>{t.nom} </TimelineContent>
                                              </TimelineItem>
                                          ))}
                                              
                                            </Timeline>
                                            <Card sx={{ minWidth: 275 , background : 'transparent' ,  boxShadow : '0' }}>
      <CardContent>
       
      
      </CardContent>
      <CardActions sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px'  }} >
      <Button sx={{margin : "0 8px"}} color='success' size='medium' startIcon={<AddIcon />}  variant="outlined" href={`/taches/create?dossier_id=${x.id}`}>إضافة إجراء</Button> 
      <Button color='warning' size='medium' startIcon={<BorderColorIcon />}  variant="outlined" href={`/dossiers/${x.id}/edit`}> تعديل </Button>      
      <Button  size='medium' startIcon={<DownloadIcon />}  variant="outlined" href={`/download/${x.id}`}>    تحميل ملف</Button> 
      <form onSubmit={(e)=>ArchiveDossier(e ,x.id)} >

<Button type='submit' color='error'  size='medium' startIcon={<DeleteIcon />}  variant="outlined"  >    حذف ملف</Button> 
</form>
</CardActions>
            
    </Card>
      
                                        </AccordionDetails>
                                  </Accordion>
                                  ) )}
                                  
                            </div>


                            </div>

                        </div>
                    </Layout>
            </>
        )
}

export default Show ;