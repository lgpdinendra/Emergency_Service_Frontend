
import './HomeEmergencyKit.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Con1 from '../assets/images/contact1.png';
import Con2 from '../assets/images/contact2.png';
import Con3 from '../assets/images/contact3.png';


const Resource = () => {
  return (
    <div>
      <div className='main-container'>
        <div className='main-container-side-1'>
        <h3 className='main-name'>Useful Resources</h3>
        <h4 className='second-name'>Other information and websites to access for preparedness and during times of emergency.</h4>
        </div>
        <div className='main-container-side-2'>
            {/* <img src={FireCover} className='main-container-side-2-image'/> */}
        </div>
      </div>

      <div className='second-container'>
        <div className='head-name'>
            <h3>Disaster Management Center - Ministry of Defense</h3>
        </div>
        <img src={Con1} alt='contactt' className='contact-image'/>
        <img src={Con2} alt='contact' className='contact-image'/>
        <img src={Con3} alt='contact' className='contact-image'/>

 
    <div className='head-name'>
            <h3>Sri Lanka Red Cross</h3>
        </div>
        <div className='con-details'>
       <h4><b>Address : </b></h4>123A, High Level Road, Kottawa, Pannipitiya
       <h4><b>Contact No : </b></h4>(+94) 112178880
       </div>
        
 
      </div>
    </div>
  )
}

export default Resource
