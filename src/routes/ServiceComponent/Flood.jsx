import './Ambulance.css'
import AmbulanceIm from '../ServiceComponent/images/flood.jpg'
import ProjectFooter from "./ProjectFooter"
import Hero from '../../components/Hero';
import NavBar from '../../components/NavBar';

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
const Flood = () => {
  return (
    <div>
      <NavBar/>
            <Hero
                pName="service"
                heroImg="https://media.istockphoto.com/id/623826228/photo/flood-in-jakarta-indonesia.jpg?s=1024x1024&w=is&k=20&c=6WycLAlnWHuU3_dvi6DorSIlI10UuLWj2zGaLR_YDVg="
                title="Flood Natural Disaster Management"
                text="When it comes to managing flood disasters, it's all about being prepared. By assessing the risks and building strong infrastructure, communities can shield themselves from the impact of floods. This proactive approach helps minimize damage and keeps everyone safer when the waters rise."
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

export default Flood
