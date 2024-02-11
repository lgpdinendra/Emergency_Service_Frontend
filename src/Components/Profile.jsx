import React, { useEffect, useState } from 'react'
import '../Style/Profile.css'
import men from '../icon/profile.jpg';
import axios from 'axios';

const Profile = () => {
  //const [studentid, setId] = useState('');
  const [users, setUsers] = useState(''); 
  //const [public_lastname,setLastname] = useState('');
  //const [email,setEmail] = useState('');

 /* useEffect(() => { fetchUsers(); }, []);  
  
    const fetchUsers = () => { 
        axios.get('/user', { 
            baseURL: 'http://localhost:8080' }) 
            .then(response => setUsers(response.data)) 
            .catch(error => console.error('Error fetching products:', error.response)); 
        
        };  */
        useEffect(() => {
          
          const fetchData = async (email) =>{
           
            try{
              
              const response = await fetch(`http://localhost:8080/user/${email}`);
              
              const data = await response.json();
              
              console.log(data)
               setUsers(data);
               
            }catch(err){
              setError(err.message);
            }
          }
          const loggedEmail = sessionStorage.getItem('loggedUserEmail')
          fetchData(loggedEmail);
         
        }, [])

        

  const deleteProduct = (email) => { 
    axios.delete(`/user/${email}`, { 
        baseURL: 'http://localhost:8080' }) 
        .then(() => fetchProducts()) 
        .catch(error => console.error('Error deleting product:', error.response)); 
    }; 

  return (
    <div className='profile-fullheader'>
      <div className='profile-header'>
        <img src={men} alt='Profile' className='profile'/>

        <div className='profile-details'>
        
                     
                        
                         <strong>Name:</strong> {users.public_firstname} {users.public_lastname}<br /> 
                         <strong>Email:</strong> {users.email}<br />
                        
                          
                     
    
        </div>
      </div>

      <div className="profile-change">

      <input
          type="text"
          placeholder="First Name"
          value=""
          //onChange={(e) => setFirstname(e.target.value)}

          className="profile-input1"
          required
        />

        <input
          type="text"
          placeholder="Last Name"
          value=""
          //onChange={(e) => setFirstname(e.target.value)}

          className="profile-input1"
          required
        />

        <input
          type="text"
          placeholder="Address"
          value=""
          //onChange={(e) => setFirstname(e.target.value)}

          className="profile-input"
          required
        />

<div className='btn-delete-submit'>
        <button
          type="button"
          //onClick={handleRegister}
          onClick={() => deleteProduct(users.email)}
          id="registerButton"
          className="delete_account"
        >
          Delete Account
        </button>

        <button
          type="button"
          //onClick={handleRegister}
          id="registerButton"
          className="submit_account"
        >
          Submit
        </button>

        </div>
      </div>
    </div>
  )
}

export default Profile
