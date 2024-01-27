import React, { useState } from 'react'
import '../Style/Register.css';
import axios from 'axios';

const Register = () => {
    
  const [public_firstname,setFirstname] = useState('');
  const [public_lastname,setLastname] = useState('');
  const [public_email,setEmail] = useState('');
  const [public_nic,setNic] = useState('');
  const [public_phonenum,setPhonenum] = useState('');
  const [public_password, setPassword] = useState('');
  const [conpassword,setConpassword] = useState('');
  const [public_address,setAddress] = useState('');

  const handleRegister = async () => {
    
    try {
      const response = await axios.post('http://localhost:8080/api/publicuser/register', {
        public_firstname,
        public_lastname,
        public_email,
        public_nic,
        public_phonenum,
        public_address,
        public_password,
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
      <div>
      <h2 className="registration-header">Registration</h2>
      <form>
        <input
          type="text"
          placeholder="First Name"
          value={public_firstname}
          onChange={(e) => setFirstname(e.target.value)}

          className="registration-input"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={public_lastname}
          onChange={(e) => setLastname(e.target.value)}

          className="registration-input"
        />
        <input
          type="email"
          placeholder="Email"
          value={public_email}
          onChange={(e) => setEmail(e.target.value)}

          className="registration-input"
        />
         <input
          type="text"
          placeholder="NIC"
          value={public_nic}
          onChange={(e) => setNic(e.target.value)}

          className="registration-input"
        />
        <input
          type="number"
          placeholder="Phone Number"
          value={public_phonenum}
          onChange={(e) => setPhonenum(e.target.value)}
          id="usernameInput"
          className="registration-input"
        />
        <input
          type="address"
          placeholder="Address"
          value={public_address}
          onChange={(e) => setAddress(e.target.value)}

          className="registration-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={public_password}
          onChange={(e) => setPassword(e.target.value)}

          className="registration-input"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={conpassword}
          onChange={(e) => setConpassword(e.target.value)}

          className="registration-input"
        />
        <button
          type="button"
          onClick={handleRegister}
          id="registerButton"
          className="registration-button"
        >
          Register
        </button>
      </form>
    </div>
    </div>
  )
}

export default Register
