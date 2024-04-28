import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";
import { useEffect, useState } from "react";

const IncidentScreen = () => {
  const [locations, setLocations] = useState([]);
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
            setSubmitEnabled(false); // Disable submit button if any field is empty
        } else {
            setSubmitEnabled(true); // Enable submit button if all fields are filled
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedLocation) {
            console.log('Form submitted!', formData);
            axios.post('http://localhost:8080/incidents/new', {
                locationName: formData.locationName,
                status: formData.status,
                type: formData.type,
                department: formData.department,
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
                    setSubmitEnabled(false);
                })
                .catch(error => console.error('Error adding location:', error));
        }
    };

    const mapStyles = {
        height: '550px',
        width: '100%',
    };

    return (
        <div className="Icontainer">
            <div className="form-container">
                <h2>Form</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Location Name:</label>
                        <input type="text" name="locationName" value={formData.locationName} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Status:</label>
                        <input type="text" name="status" value={formData.status} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Type:</label>
                        <input type="text" name="type" value={formData.type} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Department:</label>
                        <input type="text" name="department" value={formData.department} onChange={handleChange}/>
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
            <div className="map-container">
                <LoadScript googleMapsApiKey="AIzaSyD6BxQK32kXIjqVFFQZOWmkML7kl3oMIcc">
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

export default IncidentScreen;
