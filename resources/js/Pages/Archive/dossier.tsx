import React, { useState } from 'react';

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

import FolderIcon from '@mui/icons-material/Folder';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useForm } from '@inertiajs/react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

interface Tache{
  client_id : number ;
  id : number ;
  nom : string ;
  description : string ;
  echeance : string ;
}

interface Props{
  data: {
    id : number ;
    code: string;
    taches : Tache[]
  }[];
}

const Dossiers : React.FC<Props> = (props : Props)=>{
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
  (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
 
    return(
      <div className="mt-8 flex flex-col gap-3 ">
       { props.data.map((x , i)=> (
      
     
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
        <Timeline sx={{maxWidth : 350}} >
          {x.taches.map((t , i)=>(

              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                {t.echeance.slice(0, 10)}                                                 </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                 
                <Box sx={{display : 'flex' , alignItems : 'center'}}>
                  <Typography> {t.nom}</Typography>
                {/* <IconButton   href={`/taches/${t.id}/edit`} > <BorderColorIcon /> </IconButton>  */}
                </Box>
                </TimelineContent>

              </TimelineItem>
          ))}
              
            </Timeline>
            <Card sx={{ minWidth: 275 , background : 'transparent' ,  boxShadow : '0' }}>
<CardContent>


</CardContent>
<CardActions>
   </CardActions>


</Card>

        </AccordionDetails>
  </Accordion> ) )

          } 
        
</div>
    )
}


export default Dossiers