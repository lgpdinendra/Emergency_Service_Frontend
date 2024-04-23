import './HomeEmergencyKit.css';
import Kit from './images/kit.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';


const HomeEmergencyKit = () => {
  return (
    <div>
      <div className='main-container'>
        <div className='main-container-side-1'>
        <h3 className='main-name'>Home Emergency Kit</h3>
        <h4 className='second-name'>A Home Emergency Kit contains items that will assist you to respond better in any emergency.</h4>
        </div>
      </div>

      <div className='second-container'>
        <img src={Kit} alt='EmergencyKit' className='image-kit'/>

    <div className='second-container-div'>
        <div className='second-container-list'>
        <h3>Your Home Emergency Kit should contain:</h3>

        <ul >
            <li>Torch with spare batteries.</li>
            <li>First aid kit (with supplies necessary for your household.)</li>
            <li>Candles and waterproof matches.</li>
            <li>Important papers including emergency contact numbers.</li>
            <li>Waterproof bag for valuables.</li>
        </ul>  

        <h3>If you are required to leave your property, place in your Home Emergency Kit:</h3>

        <ul >
            <li>A good supply of required medications</li>
            <li>Any special requirements for babies, the disabled, infirm and/or elderly</li>
            <li>Strong shoes</li>
            <li>Fresh food and drinks</li>
            <li>Keep your Home Emergency Kit in a waterproof storage container.</li>
        </ul>  
        </div>
      </div>
      </div>

      <div className='youtube-video-link'>
      <div class="ratio ratio-21x9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/KKN7Ewht1DQ" ></iframe>
</div>

      </div>
    </div>
  )
}

export default HomeEmergencyKit
