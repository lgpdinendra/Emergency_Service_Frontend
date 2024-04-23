import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Ambulance from './images/ambulance.jpg'
import Fire from './images/fire.jpg'
import Car from './images/carrecover.jpg'
import Flood from './images/flood.jpg'
import './AreaCard.css';
import { Link } from 'react-router-dom';

export default function App() {
  const cardStyle = { maxWidth: 345, height: 370 };

  return (
    <div className='mains'>
      <div className='containers'>
        <Link to="/service/ambulance" className='links'>
          <Card sx={cardStyle}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={Ambulance}
                alt="Ambulance service"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Ambulance Service
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ambulance services offer rapid medical assistance and transport during emergencies...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>

        <Link to="/service/fire" className='links'>
          <Card sx={cardStyle}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={Fire}
                alt="Fire and rescue service"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Fire and Rescue Services
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Respond to fires in homes, businesses, and outdoor areas...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>

        <Link to="/service/vehicle" className='links'>
          <Card sx={cardStyle}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={Car}
                alt="Vehicle recovery service"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Vehicle Recovery Service
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  If a vehicle breaks down and cannot be repaired at the scene...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>

        <Link to="/service/flood" className='links'>
          <Card sx={cardStyle}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={Flood}
                alt="Flood natural disaster management"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Flood Natural Disaster Management
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Flood disaster management: Assess risk, prevent with infrastructure...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </div>
    </div>
  );
}