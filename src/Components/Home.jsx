import { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../Style/Home.css';


const Home = () => {
    const [locations, setLocations] = useState([]);
    const handleClick = (latitude, longitude) => {
        return (
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={15}
                center={{ lat: latitude, lng: longitude }}>
            </GoogleMap>
        );
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('http://localhost:8080/incidents')
            .then(response => setLocations(response.data))
            .catch(error => console.error('Error fetching locations:', error));
    };


    const mapStyles = {
        height: '550px',
        width: '100%',
    };

    return (
        <div className="container">
            <div className='home-container '>
            <div className="incident-container ">
            <h2>Recents Updates </h2>
                    <div>
                        {locations.map(location => (
                            <div key={location.id} className="listitem"
                                 onClick={() => handleClick(location.latitude.toFixed(4),location.longitude.toFixed(4))}>
                                <h3>{location.type} - {location.locationName} </h3>
                                <p>Location Name: {location.locationName}</p>
                                <p>Status: {location.status}</p>
                                <p>Type: {location.type}</p>
                                <p>Department: {location.department}</p>
                                <p>Updated Time: {location.currentTime}</p>
                            </div>
                        ))}
                    </div>
            </div>

            <div className="map-container">
            <LoadScript googleMapsApiKey="AIzaSyC4NO2yZ0tRfg0pxV0h6cbFpKLRzG6NdyU">
                        <GoogleMap
                            mapContainerStyle={mapStyles}
                            zoom={11}
                            center={{lat: 7.0896, lng: 80.0127}}

                        >
                            {locations.map(location => (
                                <Marker
                                    key={location.id}
                                    position={{lat: location.latitude, lng: location.longitude}}
                                />
                            ))}
                        </GoogleMap>
                    </LoadScript>
            </div>
            </div>
        </div>
    );
};

export default Home;