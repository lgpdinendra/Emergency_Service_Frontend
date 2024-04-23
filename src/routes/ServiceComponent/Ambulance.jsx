import './Ambulance.css'
import AmbulanceIm from '../ServiceComponent/images/ambulance.jpg'
import NavBar from '../../components/NavBar';
import Hero from '../../components/Hero';
import ProjectFooter from "./ProjectFooter"

const data = [
    {
      id: 1,
      company_name: "Dj Company",
      location:"Gampha",
      description:"With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text.",
      contact_no:"+9478905673",
      imageSrc: AmbulanceIm,
      
    },
  ];
const Ambulance = () => {
  return (
    <div>
      <NavBar/>
            <Hero
                pName="service"
                heroImg="https://www.adlittle.pt/sites/default/files/reports/adl_ambulance_services_-_optimizing_operations_cover.jpg"
                title="Ambulance Service"
                text="When an emergency strikes and every second counts, ambulance services are there to offer quick medical help and a safe ride to the hospital. They're the first responders who jump into action to ensure that you get the care you need, right when you need it the most."
            />
     <div className="progress-bar1">
        <div className="progress-bar-info1">
        </div>
        <div className='main-bar'>
        <div className='image-bar'>
        {data?.map((service) => {
            return (
              <div className="progress-bar-item1" key={service.id}>
                
                <img src={service.imageSrc} alt="Ambulance" className="ambulance-image" />
                 
                  
                
               
              </div>
            );
          })}
        </div>
        <div className="bar-list">
          {data?.map((service) => {
            return (
              <div className="progress-bar-item1" key={service.id}>
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
      <ProjectFooter/>
    </div>
  )
}

export default Ambulance
