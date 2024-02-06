import React, { useState } from 'react'
import '../Style/PublicUserLogin.css';
import axios from 'axios';

const Register = () => {
    
  const [public_firstname,setFirstname] = useState('');
  const [public_lastname,setLastname] = useState('');
  const [email,setEmail] = useState('');
  const [public_nic,setNic] = useState('');
  const [public_pnumber,setPhonenum] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword,setConpassword] = useState('');
  const [public_address,setAddress] = useState('');

  const handleRegister = async () => {
    
    try {
      const response = await axios.post('http://localhost:8080/user/register', {
        public_firstname,
        public_lastname,
        email,
        public_nic,
        public_pnumber,
        public_address,
        password,
      });

      if (response.status === 200) {
        console.log('User registered successfully');
        alert('User registered successfully');
        window.location.href = '/login';
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error.message);
    }
  };



  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Registration</div>
        <div className='underline'></div>
      </div>
      <form>
      <div className='inputs'>
      <div className='input'>
        <input
          type="text"
          placeholder="First Name"
          value={public_firstname}
          onChange={(e) => setFirstname(e.target.value)}

          className="registration-input"
          required
        />
        </div>
        <div className='input'>
        <input
          type="text"
          placeholder="Last Name"
          value={public_lastname}
          onChange={(e) => setLastname(e.target.value)}

          className="registration-input"
        />
        </div>

        <div className='input'>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}

          className="registration-input"
        />
        </div>

        <div className='input'>
         <input
          type="text"
          placeholder="NIC"
          value={public_nic}
          onChange={(e) => setNic(e.target.value)}

          className="registration-input"
        />
        </div>

        <div className='input'>
        <input
          type="number"
          placeholder="Phone Number"
          value={public_pnumber}
          onChange={(e) => setPhonenum(e.target.value)}
          id="usernameInput"
          className="registration-input"
        />
        </div>

        <div className='input'>
        <input
          type="address"
          placeholder="Address"
          value={public_address}
          onChange={(e) => setAddress(e.target.value)}

          className="registration-input"
        />
        </div>

        <div className='input'>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}

          className="registration-input"
        />
        </div>

        <div className='input'>
        <input
          type="password"
          placeholder="Confirm Password"
          value={conpassword}
          onChange={(e) => setConpassword(e.target.value)}

          className="registration-input"
        />
        </div>
        </div>

        <div className='submit-container'>
        <button
          type="button"
          onClick={handleRegister}
          id="registerButton"
          className="submit"
        >
          Register
        </button>
        </div>
      </form>
    
    </div>
  )
}

export default Register
