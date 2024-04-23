import "../styles/LoginAndRegister.css"
import user_icon from "../assets/person.png"
import email_icon from "../assets/email.png"
import password_icon from "../assets/password.png"
import NavBar from "../components/NavBar";
import { useState ,useEffect} from "react";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { ToastContainer, toast,Slide } from 'react-toastify';

import ProjectFooter from "./ProjectFooter"


const LoginAndRegister = () =>{
    const [action,setAction] = useState("Login")
    const [userType, setUserType] = useState("PublicUser");
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [publicName,setName] = useState('');
    const [publicNic,setNic] = useState('');
    const [publicPnumber,setPhonenum] = useState('');
    const [conpassword,setConpassword] = useState('');
    const [publicAddress,setAddress] = useState('');
    const [serviceType,setServiceType] = useState('');
    const [users, setUsers] = useState(''); 

    const SuccessfulNotify = (message, options = {}) => {
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        style: { top: '100px' },
        ...options 
      });
    }

    const resetFormFields = () => {
      setEmail('');
      setPassword('');
      setName('');
      setNic('');
      setUserType('PublicUser')
      setPhonenum('');
      setAddress('');
      setConpassword('');
  };

    const ErrorNotify = (message, options = {}) => {
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        style: { top: '100px' },
        ...options 
        });
    }

    const isValidEmail = (email) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
    
    const isEmpty = (value) => value.trim() === '';

  //   const isValidPassword = (password) => {
  //     const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d[^A-Za-z\d]]{8,}$/;
  //     return re.test(String(password));
  // }
    
    const arePasswordsMatching = (password, confirmPassword) => password === confirmPassword;
    

    
   
    const handleLogin = async () => {
      if (isEmpty(email) || isEmpty(password) ) {
        ErrorNotify('Please Enter Email and  Password.');
        return;
      }
      try {
        const response = await axios.post('http://localhost:8080/user/login', { email, password });
        if (response.status === 200) {
          updateSessionStorage(response.data);
          window.location.href = '/';
          return;
        }
      } catch (error) {
        if (error.response.data === "User does not exist") {
          await handleServiceLogin();
        } else {
          ErrorNotify(error.response.data);
        }
      }
    }

        const handleServiceLogin = async () => {
          try {
            const response = await axios.post('http://localhost:8080/admin/login', { email, password });
            if (response.status === 200) {
              updateSessionStorage(response.data);
              window.location.href = '/';
            }
          } catch (error) {
            if (error.response.data === "User does not exist") {
              await handleAdminLogin();
            } else {
              ErrorNotify(error.response.data);
            }
          }
        };
        

        const handleAdminLogin = async () => {
          try {
            const response = await axios.post('http://localhost:8080/admin/login', { email, password });
            if (response.status === 200) {
              updateSessionStorage(response.data);
              window.location.href = '/';
            }
          } catch (error) {
            ErrorNotify(error.response.data);
          }
        };
        const updateSessionStorage = ({ email, publicName, serviceName, adminName, role, Role }) => {
          sessionStorage.setItem('loggedUserEmail', email);
          sessionStorage.setItem('loggedUserName', publicName||serviceName||adminName);
          sessionStorage.setItem('loggedUserRole', role||Role);
        };

    const handleSignUp = async () => {
      if (isEmpty(email) || isEmpty(password) || (action === "Sign Up" && (isEmpty(publicName) || isEmpty(publicNic) || isEmpty(publicPnumber) || isEmpty(publicAddress)))) {
        ErrorNotify('Please fill in all required fields.');
        return;
      }
    
      if (!isValidEmail(email)) {
        ErrorNotify('Invalid email format.');
        return;
      }

      // if(!isValidPassword(password)){
      //   ErrorNotify('Your password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character (e.g., !, @, #, ?).')
      //   return; 
      // }
    
      if (action === "Sign Up" && !arePasswordsMatching(password, conpassword)) {
        ErrorNotify('Passwords do not match.');
        return;
      }
    
      try {
        let response;
        if (userType === "PublicUser") {
          response = await axios.post('http://localhost:8080/user/register', {
            publicName,
            email,
            publicNic,
            publicPnumber,
            publicAddress,
            password,
          });
        } else if (userType === "ServiceUser") {
          response = await axios.post('http://localhost:8080/service/register', {
            serviceName: publicName,
            serviceType,
            email,
            serviceRegnumber: publicNic,
            servicePnumber: publicPnumber,
            serviceAddress: publicAddress,
            password,
          });
        }
    
        if (response && response.status === 200) {
          SuccessfulNotify('Registration Successful!');
          setAction("Login");
        } else {
          ErrorNotify('Registration failed');
        }
      } catch (error) {
        ErrorNotify(error.response.data);
      }
    };
    

      const handleSubmit = async () => {
        if (action === "Sign Up") {
          handleSignUp();
        } else {
          handleLogin();
        }
      };

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    const handleServiceTypeChange = (event) => {
      setServiceType(event.target.value);
  };

  const switchToSignUp = () => {
    resetFormFields();
    setAction("Sign Up");
};

const switchToLogin = () => {
    resetFormFields();
    setAction("Login");
};


    return(
        <>
        <ToastContainer/>
        <div className="logingBack">
        <div className="logandreg">
        <img alt="HeroImg" src ="https://thamesgroupuk.com/wp-content/uploads/2019/04/heroimagegraphic.png"
        className="heroimg"/>
        <NavBar/>
        <div className={action==="Login"?"Logincontainer":"Signcontainer"}>
            <div className="Signheader">
            <div className="Signtext">{action}</div>
            <div className="Signunderline"></div>

            <div className="Signsubmit-container">
                <button className={action==="Login"?"Signsubmit gray":"Signsubmit"} onClick={switchToSignUp}>Sign Up</button>
                <button className={action==="Sign Up"?"Signsubmit gray":"Signsubmit"} onClick={switchToLogin}>Login</button>
            </div>

            <div className="Signinputs">
            {action === "Sign Up" ? (
                <div className="Signinput">
                    <img src={user_icon} alt="User Icon" />
                    <select className="SigninputSelect" value={userType} onChange={handleUserTypeChange}>
                        <option value="PublicUser">Public Users</option>
                        <option value="ServiceUser">Service Users</option>
                    </select>
                </div>
            ) : <div style={{ display: 'none' }}></div>}

            {action === "Sign Up" && (
                <div className="Signinput">
                    <img src={user_icon} alt="User Icon" />
                    <input type="text" placeholder={userType==="PublicUser"?"User Full Name":"Service Company Name"} value={publicName} onChange={e => setName(e.target.value)} />
                </div>
            )}

            {action === "Sign Up" && userType === "ServiceUser" ? (
                <div className="Signinput">
                    <img src={user_icon} alt="User Icon" />
                    <select className="SigninputSelect" value={serviceType} onChange={handleServiceTypeChange}>
                        <option>Select Service Category</option>
                        <option value="Ambulance Service">Ambulance Service</option>
                        <option value="Fire Service">Fire and Rescue Service</option>
                        <option value="Vehicle Service">Vehicle Recovery Service</option>
                        <option value="Natural Disaster Service">Flood & Natural Disaster Service</option>
                    </select>
                </div>
            ) : <div style={{ display: 'none' }}></div>}
                
                <div className="Signinput">
                    <img src ={email_icon} alt=""/>
                    <input type="email" placeholder="Email" value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>

                {action==="Login"?<div style={{ display: 'none' }}></div>: 
                      <div className="Signinput">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder={userType==="PublicUser"?"NIC":"Service Registration Number"} value={publicNic}
                        onChange={(e) => setNic(e.target.value)}/>
                        </div>}
                        
                {action==="Login"?<div style={{ display: 'none' }}></div>: 
                      <div className="Signinput">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder="Contact Number" value={publicPnumber}
                        onChange={(e) => setPhonenum(e.target.value)}/>
                        </div>}
                {action==="Login"?<div style={{ display: 'none' }}></div>: 
                      <div className="Signinput">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder="Address" value={publicAddress}
                        onChange={(e) => setAddress(e.target.value)}/>
                        </div>}

                <div className="Signinput">
                    <img src ={password_icon} alt=""/>
                    <input type="password" placeholder="Password" value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>

                {action==="Login"?<div style={{ display: 'none' }}></div>: 
                      <div className="Signinput">
                        <img src ={password_icon} alt=""/>
                    <input type="password" placeholder="Confirm Password" value={conpassword}
                    onChange={(e) => setConpassword(e.target.value)}/>
                        </div>}


            </div>
            {action==="Sign Up"?<div style={{ display: 'none' }}></div>:<div className="forgot-password">Forget Password? <span>Click Here</span></div>}

            <div className="Signsubmit-container" >
                <button className="Signsubmit" onClick={handleSubmit} style={{ width:'500px' }} >{action}</button>
            </div>

            </div>
        </div>
        </div>
        </div>
        <div className={action==="Sign Up"?"footerSign":""}>
        </div>
        <ProjectFooter/>
        </>
    )
}

export default LoginAndRegister