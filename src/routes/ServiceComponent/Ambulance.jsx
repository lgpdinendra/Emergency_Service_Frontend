import './Ambulance.css'
import NavBar from '../../components/NavBar';
import Hero from '../../components/Hero';
import ProjectFooter from "./ProjectFooter"
import axios from 'axios';
import { useState,useEffect, } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const Ambulance = () => {
  const cardStyle = { maxWidth: 345, height: 370 };
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchData();
}, []);

  const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:8080/service/by-service-type/Ambulance Service');
        setServices(response.data);
    } catch (error) {
        console.error(error);
    }
  };

  return (
    <div className='servicePages'>
      <NavBar/>
            <Hero
                pName="service"
                heroImg="https://www.adlittle.pt/sites/default/files/reports/adl_ambulance_services_-_optimizing_operations_cover.jpg"
                title="Ambulance Service"
                text="When an emergency strikes and every second counts, ambulance services are there to offer quick medical help and a safe ride to the hospital. They're the first responders who jump into action to ensure that you get the care you need, right when you need it the most."
            />
            {/* <div className="sincident-container ">
                        {services.map(services => (
                            <div key={services.id} className="slistitem">
                                <h3>{services.serviceName} </h3>
                            </div>
                        ))}
                    </div> */}

<div className='mains'>
      <div className='containers'>
      {services.map(services => (
                            <div key={services.id} className="slistitem">
                                <Link className='links'>
          <Card sx={cardStyle}>
            <CardActionArea>
              <CardMedia
                component="img"
                style={{ width: '345px', height: '40%' }} 
                image="https://www.redcross.lk/wp-content/uploads/2023/11/image_3aad9b0c54.jpg"
                alt="Ambulance service"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {services.serviceName}
                <div>
                  email : {services.email}<br/>
                  contact: {services.servicePnumber}
                </div>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
                            </div>
                        ))}
        
      </div>
    </div>

      <ProjectFooter/>
    </div>
  )
}

export default Ambulance