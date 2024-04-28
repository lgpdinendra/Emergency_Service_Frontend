import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/HomeIncidentStyles.css"

const HomeIncident = () =>{
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

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/incidents');
            setLocations(response.data);
        } catch (error) {
            console.error('Error fetching locations:', error);
        }
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
            <LoadScript googleMapsApiKey="AIzaSyBQhG1GJ6hnWqTTNK1Y1lNy_i20wgDxleA" async>
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
export default HomeIncident;