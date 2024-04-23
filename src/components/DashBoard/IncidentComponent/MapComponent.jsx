import { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './MapComponent.css';

const MapComponent = () => {
    const [locations, setLocations] = useState([]);
    const [incidentStatus,setIncidentStatus] = useState('');
    const [incidentService,setIncidentService] = useState('');
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [formData, setFormData] = useState({
        locationName: '',
        status: '',
        type: '',
        department: ''
    });
    const [submitEnabled, setSubmitEnabled] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('http://localhost:8080/incidents')
            .then(response => setLocations(response.data))
            .catch(error => console.error('Error fetching locations:', error));
    };

    const handleMapClick = (event) => {
        setSelectedLocation({
            latitude: event.latLng.lat(),
            longitude: event.latLng.lng(),
        });
        setSubmitEnabled(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        if (value.trim() === '') {
            setSubmitEnabled(false); 
        } else {
            setSubmitEnabled(true); 
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedLocation || formData.locationName.trim() === '') {
            console.error('Invalid form data');
            return;
        }
        axios.post('http://localhost:8080/incidents/new', {
            locationName: formData.locationName,
            status: incidentStatus,
            type: formData.type,
            department: incidentService,
            latitude: selectedLocation.latitude,
            longitude: selectedLocation.longitude
        })
        .then(response => {
            console.log('Location added:', response.data);
            fetchData();
            setSelectedLocation(null);
            setFormData({
                locationName: '',
                status: '',
                type: '',
                department: ''
            });
            setIncidentStatus('');
            setIncidentService('');
            setSubmitEnabled(false);
        })
        .catch(error => console.error('Error adding location:', error));
    };

    const mapStyles = {
        height: '550px',
        width: '100%',
    };

    const handleIncidentStatus = (event) => {
        setIncidentStatus(event.target.value);
    };

    const handleService = (event) => {
        setIncidentService(event.target.value);
    };

    return (
        <div className="SIcontainer">
            <div className="Sform-container">
                <h2>Report Incident </h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Location Name:</label>
                        <input type="text" name="locationName" value={formData.locationName} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Status:</label>
                        <select className='Sselect' onChange={handleIncidentStatus}>
                            <option value="Pending">Pending</option>
                            <option value="Responded">Responded</option>
                            <option value="Controlled">Controlled</option>
                            <option value="Out of Controll">Out of Controll</option>
                        </select>
                    </div>
                    <div>
                        <label>Discription:</label>
                        <input type="text" name="type" value={formData.type} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Department:</label>
                        <select className='Sselect' name="serviceType" onChange={handleService}>
                            <option value="Ambulance Service">Ambulance Service</option>
                            <option value="Fire and Rescue">Fire and Rescue</option>
                            <option value="Vehicle Recovery Service">Vehicle Recovery Service</option>
                            <option value="Flood and Natural Disaster">Flood and Natural Disaster</option>
                        </select>
                    </div>
                    <div>
                        <label>Selected Location:</label>
                        {selectedLocation && (
                            <div>
                                Latitude: {selectedLocation.latitude.toFixed(4)},
                                Longitude: {selectedLocation.longitude.toFixed(4)}
                            </div>
                        )}
                    </div>
                    {submitEnabled && <button type="submit">Submit</button>}
                </form>

            </div>
            <div className="Smap-container">
                <LoadScript googleMapsApiKey="AIzaSyBQhG1GJ6hnWqTTNK1Y1lNy_i20wgDxleA">
                    <GoogleMap
                        mapContainerStyle={mapStyles}
                        zoom={11}
                        center={{lat: 7.0896, lng: 80.0127}}
                        onClick={handleMapClick}
                    >
                        {locations.map(location => (
                            <Marker
                                key={location.id}
                                position={{ lat: location.latitude, lng: location.longitude }}
                            />
                        ))}
                        {selectedLocation && (
                            <Marker
                                position={{ lat: selectedLocation.latitude, lng: selectedLocation.longitude }}
                                icon={{
                                    path: window.google.maps.SymbolPath.CIRCLE,
                                    scale: 8,
                                    fillColor: '#4285F4',
                                    fillOpacity: 1,
                                    strokeColor: '#4285F4',
                                    strokeWeight: 3,
                                }}
                            />
                        )}
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
};

export default MapComponent;