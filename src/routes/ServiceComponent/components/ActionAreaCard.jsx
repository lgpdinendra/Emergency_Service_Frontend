import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Ambulance from '../assets/images/ambulance.jpg'
import Fire from '../assets/images/fire.jpg'
import Car from '../assets/images/carrecover.jpg'
import Flood from '../assets/images/flood.jpg'
import './AreaCard.css';
import { Link } from 'react-router-dom';


export default function ActionAreaCard() {
  return (
    <div className='main'>
    <div className='container'>

    <Link to="/ambulance" className='link'>
       <div className='card-1'>
        <Card sx={{ maxWidth: 345 }}>
     
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Ambulance}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Ambulance Service
          </Typography>
          <Typography variant="body2" color="text.secondary">     
            Ambulance services offer rapid medical assistance and transport during emergencies, 
            staffed with trained professionals to swiftly deliver care and transport patients 
            to medical facilities. 
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </Link>

    <Link to="/fire" className='link'>
    <div className='card-2'>
    <Card sx={{ maxWidth: 345 }}>
   
      <CardActionArea >
      <CardMedia
          component="img"
          height="140"
          image={Fire}
          alt="green iguana"
        />
         <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Fire and Rescue Services
          </Typography>
          <Typography variant="body2" color="text.secondary">     
          Respond to fires in homes, businesses, and outdoor areas to 
          extinguish flames and rescue individuals.Locate and extricate individuals who 
          are lost, injured, or trapped, often in wilderness or disaster situations.
            </Typography>
        </CardContent>
        </CardActionArea>
        
        </Card>
        </div>
   </Link>
   


    <div className='container'>

    <Link to="/vehicle" className='link'>
       <div className='card-3'>
        <Card sx={{ maxWidth: 345 }}>
     
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Car}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Vehicle Recovery Service
          </Typography>
          <Typography variant="body2" color="text.secondary">     
          If a vehicle breaks down and cannot be repaired at the scene, 
          the service provider will arrange for the vehicle to be towed to a 
          repair shop or another desired location.The recovery of any vehicle to 
          another place.
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </Link>


    <Link to="/flood" className='link'>
    <div className='card-4'>
    <Card sx={{ maxWidth: 345 }}>
   
      <CardActionArea >
      <CardMedia
          component="img"
          height="140"
          image={Flood}
          alt="green iguana"
        />
         <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Flood Natural Disaster Management
          </Typography>
          <Typography variant="body2" color="text.secondary">     
          Flood disaster management: Assess risk, prevent with infrastructure, 
          prepare communities, respond swiftly, recover infrastructure, and build 
          resilience for future.
            </Typography>
        </CardContent>
        </CardActionArea>
        
        </Card>
        </div>
   </Link>
    </div>
    </div>
    </div>
  );
}