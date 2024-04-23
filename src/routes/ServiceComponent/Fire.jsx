import './Ambulance.css'
import AmbulanceIm from '../ServiceComponent/images/fire.jpg'
import Hero from '../../components/Hero';
import NavBar from '../../components/NavBar';
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
const Fire = () => {
  return (
    <div>
      <NavBar/>
            <Hero
                pName="about"
                heroImg="https://www.columbian.com/wp-content/uploads/2015/12/80737_auto_accident_roll_over_Auto_accident_roll_over_woman_tra.jpg"
                title="Fire and Rescue Services"
                text="When a fire breaks out, whether it's at home, at work, or outdoors, firefighters are the heroes who rush in to tackle the flames, keep us safe, and protect our property. They're always ready to respond, day or night, making sure that everyone can feel a little safer knowing help is just a call away."
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

export default Fire
