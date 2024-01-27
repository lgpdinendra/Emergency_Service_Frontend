import React, { useState } from 'react'
import '../Style/PublicUserLogin.css';
import axios from 'axios';
import firstname_icon from '../icon/person.png'
import email_icon from '../icon/email.png'
import password_icon from '../icon/password.png'

const PublicUserLogin = () => {

  const [public_email,setEmail] = useState('');
  const [public_password, setPassword] = useState('');
  //const [conpassword,setConpassword] = useState('');
  

  const handleLogin = async () => {
    
    try {
      const response = await axios.post('http://localhost:8080/api/publicuser/register', {
        
        public_email,
        public_password,
      });

      if (response.status === 200) {
        console.log('User login successfully');
        alert('User login successfully');
        window.location.href = '/login';
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>Login</div>
            <div className='underline'></div>
        </div>
      
      <form>
        <div className='inputs'>
        <div className='input'>
            <img src={email_icon}  alt='email'/>
        <input
          type="email"
          placeholder="Email"
          value={public_email}
          onChange={(e) => setEmail(e.target.value)}

          className=""
        />
        </div>

        <div className='input'>
            <img src={password_icon}  alt='email'/>
        <input
          type="password"
          placeholder="Password"
          value={public_password}
          onChange={(e) => setPassword(e.target.value)}

          className=""
        />
        </div>
        </div>

        <div className='submit-container'>
        <button
          type="button"
          onClick={handleLogin}
          id="registerButton"
          className="submit"
        >
          Login
        </button>
        </div>
        </form>
    </div>
  )
}

export default PublicUserLogin
