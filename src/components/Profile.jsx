import { useEffect, useState } from 'react'
import '../Style/Profile.css'
import men from '../icon/profile.jpg';
import axios from 'axios';
import NavBar from '../components/NavBar';

const Profile = () => {
  const [users, setUsers] = useState('');  

  return (
  <>
  <NavBar/>
  </>
   
  );
}

export default Profile