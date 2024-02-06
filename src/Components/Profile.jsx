import React from 'react'
import '../Style/Profile.css'
import men from '../icon/profile.jpg';

const Profile = () => {
  return (
    <div className='profile-fullheader'>
      <div className='profile-header'>
        <img src={men} alt='Profile' className='profile'/>

        <div className='profile-details'>
        <p className='profile-firstname'>Username</p>
        <p className="profile-email">useremail</p>
        </div>
      </div>

      <div className="profile-change">
      <input
          type="text"
          placeholder="First Name"
          value=""
          //onChange={(e) => setFirstname(e.target.value)}

          className=""
          required
        />

<input
          type="text"
          placeholder="Last Name"
          value=""
          //onChange={(e) => setFirstname(e.target.value)}

          className=""
          required
        />

<input
          type="text"
          placeholder="Address"
          value=""
          //onChange={(e) => setFirstname(e.target.value)}

          className=""
          required
        />

<button
          type="button"
          //onClick={handleRegister}
          id="registerButton"
          //className="submit"
        >
          Delete Account
        </button>

        <button
          type="button"
          //onClick={handleRegister}
          id="registerButton"
          //className="submit"
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default Profile
