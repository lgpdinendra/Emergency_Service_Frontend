import React from 'react'
import './HomeEmergencyKit.css';
import Kit from '../assets/images/kit.jpg'
import FireI from '../assets/images/fire.jpg';
import FireCover from '../assets/images/firecover.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeFireCover from '../assets/images/homefire.jpeg';


const HomeFire = () => {
  return (
    <div>
      <div className='main-container'>
        <div className='main-container-side-1'>
        <h3 className='main-name'>Home Fire Escape Plan</h3>
        
        </div>
        <div className='main-container-side-2'>
            <img src={HomeFireCover} className='main-container-side-2-image'/>
        </div>
      </div>

      <div className='second-container'>
        <div className='head'>
        <h3 className='description-head'>If there is a fire in your home, everybody in the house should know the Home Fire Escape Plan.</h3>
        </div>
    <div className='second-container-div'>
        <div className='second-container-list'>
        <h3>Face the facts</h3>

        <ul >
            <li>Have a working smoke alarm in the house;</li>
            <li>Draw a floor plan of your house showing two exits from each room;</li>
            <li>Practice your fire escape plan especially if you have children or elderly people living with you;</li>
            <li>Display your fire escape plan prominently on your fridge and discuss the plan with any overnight guests;</li>
            <li>If the smoke alarm goes off because of a fire or smoke everybody should leave immediately;</li>
            <li>Everybody should agree on a meeting point outside the front of the house e.g. At the mail box;</li>
        </ul>  

        </div>
      </div>
      </div>

      <div className='youtube-video-link'>
      <div class="ratio ratio-21x9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/watch?v=ohC9HXfryJc" ></iframe>
</div>

      </div>
    </div>
  )
}

export default HomeFire
