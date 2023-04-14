
import React, { useState } from 'react';
import { PageProps } from '@/types';
import { Link } from '@inertiajs/react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AddIcon from '@mui/icons-material/Add';
import FolderIcon from '@mui/icons-material/Folder';
import Layout from '@/Layouts/Layout';

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

interface FormValues {
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
  
}

interface ShowProps extends PageProps {
  data: FormValues;
  dossiers :  Dossier[]

}



const Show : React.FC<ShowProps> = (props : ShowProps) => {
  console.log(props.dossiers);
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const [searchQuery, setSearchQuery] = useState("");  
  const filteredDossiers = props.dossiers.filter((item) => item.code.toLowerCase().includes(searchQuery.toLowerCase()));
  const output = filteredDossiers ? filteredDossiers : props.dossiers
        return (
            <>
                        <Layout>
                        <div className="flex w-full gap-7 px-6 py-7">
                            <div className="bg-white flex flex-col items-center gap-2 shadow-md h-96 w-fit rounded-lg py-8 px-7">
                                    <div className="text-slate-700 w-fit font-bold text-xl mb-8 ">{props.data.nom} {props.data.prenom }</div>
                                    <div className="text-gray-600 font-medium text-md mb-2 px-8 flex gap-1 items-center">  {props.data.email}  <EmailIcon style={{color : '#10b981'}}/></div>
                                    <div className="text-gray-600 font-medium text-md mb-2"> {props.data.phone} <PhoneIcon style={{color : '#10b981'}}/> </div>
                                    <div className="text-gray-600 font-medium text-md mb-2"> <strong className='text-emerald-500'>CIN : </strong>{props.data.CIN}</div>
                                    <button className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded mt-4">
                                    تعديل
                                    </button>
                            </div>

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
                                <div className="flex-shrink-0">   <Link href={`/dossiers/create?client_id=${props.data.id}`} className="bg-emerald-500 text-white px-4 py-2 rounded"><span><AddIcon/></span> إضافة </Link>
 </div>
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
                                              <FolderIcon   style={{color : '#f87171'}} /> 
                                          <Typography sx={{padding : '0 12px' , color : '#334155'}}> {x.code} </Typography>
                                          </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{display : 'flex' , justifyContent : 'space-between'}}>
                                        <Timeline sx={{maxWidth : 250}} >
                                              <TimelineItem>
                                                <TimelineOppositeContent color="text.secondary">
                                                  09:30 am
                                                </TimelineOppositeContent>
                                                <TimelineSeparator>
                                                  <TimelineDot />
                                                  <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent>Eat</TimelineContent>
                                              </TimelineItem>
                                              <TimelineItem>
                                                <TimelineOppositeContent color="text.secondary">
                                                  10:00 am
                                                </TimelineOppositeContent>
                                                <TimelineSeparator>
                                                  <TimelineDot />
                                                  <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent>Code</TimelineContent>
                                              </TimelineItem>
                                              <TimelineItem>
                                                <TimelineOppositeContent color="text.secondary">
                                                  12:00 am
                                                </TimelineOppositeContent>
                                                <TimelineSeparator>
                                                  <TimelineDot />
                                                  <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent>Sleep</TimelineContent>
                                              </TimelineItem>
                                              <TimelineItem>
                                                <TimelineOppositeContent color="text.secondary">
                                                  9:00 am
                                                </TimelineOppositeContent>
                                                <TimelineSeparator>
                                                  <TimelineDot />
                                                  <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent>Repeat</TimelineContent>
                                              </TimelineItem>
                                            </Timeline>
                                            <Card sx={{ minWidth: 275 , background : 'transparent' ,  boxShadow : '0' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
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