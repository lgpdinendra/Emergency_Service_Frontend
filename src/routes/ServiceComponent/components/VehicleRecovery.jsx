import React from 'react'
import './Ambulance.css'
import AmbulanceIm from '../assets/images/ambulance.jpg'

const data = [
    {
      id: 1,
      company_name: "Dj Company",
      location:"Gampha",
      description:"With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text.",
      contact_no:"+9478905673",
      imageSrc: AmbulanceIm,
      
    },
    // {
    //   id: 2,
    //   name: "ICT-SINHALA-G10-001",
    //   percentValues: 65,
    // },
    // {
    //   id: 3,
    //   name: "ICT-ENGLISH-G13-004",
    //   percentValues: 75,
    // },
    // {
    //   id: 4,
    //   name: "BIOLOGY-SINHALA-G12-005",
    //   percentValues: 80,
    // },
    // {
    //   id: 5,
    //   name: "MATHEMATICS-SINAHALA-G09-002",
    //   percentValues: 70,
    // },
  ];
const VehicleRecovery = () => {
  return (
    <div>
     <div className="progress-bar">
        <div className="progress-bar-info">
          <h4 className="progress-bar-title">Vehicle Recovery Service</h4>
        </div>
        <div className='main-bar'>
        <div className='image-bar'>
        {data?.map((service) => {
            return (
              <div className="progress-bar-item" key={service.id}>
                
                <img src={service.imageSrc} alt="Ambulance" className="ambulance-image" />
                 
                  
                
               
              </div>
            );
          })}
        </div>
        <div className="bar-list">
          {data?.map((service) => {
            return (
              <div className="progress-bar-item" key={service.id}>
                <div className="item-info">
                
                  <h4 className="item-info-name">Company Name : {service.company_name}</h4>
                  <h5 className="item-info-location">Location : {service.location}</h5>
                  <p className="item-info-description"><b>Description : </b>{service.description}</p>
                  <h5 className="item-info-contact">Contact No : {service.contact_no}</h5>
                  
                </div>
               
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </div>
  )
}

export default VehicleRecovery
