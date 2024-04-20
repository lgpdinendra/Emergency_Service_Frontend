import "../styles/LoginAndRegister.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import ProjectFooter from "./ProjectFooter";

const LoginAndRegister = () => {
  const [action, setAction] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [public_firstname, setFirstname] = useState("");
  const [public_lastname, setLastname] = useState("");
  const [public_nic, setNic] = useState("");
  const [public_pnumber, setPhonenum] = useState("");
  const [conpassword, setConpassword] = useState("");
  const [public_address, setAddress] = useState("");

  useEffect(() => {
    const fetchData = async (email) => {
      try {
        const response = await fetch(`http://localhost:8080/user/${email}`);
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    const loggedEmail = sessionStorage.getItem("loggedUser");
    fetchData(loggedEmail);
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/user/login", {
        email,
        password,
      });

      if (response.status === 200) {
        console.log("User login successfully");

        const { email, public_name } = response.data;

        sessionStorage.setItem("loggedUserEmail", email);
        sessionStorage.setItem("loggedUserName", public_name);

        window.location.href = "/";
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://localhost:8080/user/register", {
        public_firstname,
        public_lastname,
        email,
        public_nic,
        public_pnumber,
        public_address,
        password,
      });

      if (response.status === 200) {
        console.log("User registered successfully");

        window.location.href = "/signup";
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error.message);
    }
  };

  const handleSubmit = async () => {
    if (action === "Sign Up") {
      handleSignUp();
    } else {
      handleLogin();
    }
  };

  return (
    <>
      <div className="logingBack">
        <div className="logandreg">
          <img
            alt="HeroImg"
            src="https://thamesgroupuk.com/wp-content/uploads/2019/04/heroimagegraphic.png"
            className="heroimg"
          />
          <NavBar />
          <div className={action === "Login" ? "Logincontainer" : "Signcontainer"}>
            <div className="Signheader">
              <div className="Signtext">{action}</div>
              <div className="Signunderline"></div>

              <div className="Signsubmit-container">
                <button
                  className={action === "Login" ? "Signsubmit gray" : "Signsubmit"}
                  onClick={() => setAction("Sign Up")}
                >
                  Sign Up
                </button>
                <button
                  className={action === "Sign Up" ? "Signsubmit gray" : "Signsubmit"}
                  onClick={() => setAction("Login")}
                >
                  Login
                </button>
              </div>

              <div className="Signinputs">
                {action === "Login" ? (
                  <div style={{ display: "none" }}></div>
                ) : (
                  <div className="Signinput">
                    <img src={user_icon} alt="" />
                    <input
                      type="text"
                      placeholder="First Name"
                      value={public_firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>
                )}

                {action === "Login" ? (
                  <div style={{ display: "none" }}></div>
                ) : (
                  <div className="Signinput">
                    <img src={user_icon} alt="" />
                    <input
                      type="text"
                      placeholder="Lastst Name"
                      value={public_lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                )}

                <div className="Signinput">
                  <img src={email_icon} alt="" />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {action === "Login" ? (
                  <div style={{ display: "none" }}></div>
                ) : (
                  <div className="Signinput">
                    <img src={user_icon} alt="" />
                    <input
                      type="text"
                      placeholder="NIC"
                      value={public_nic}
                      onChange={(e) => setNic(e.target.value)}
                    />
                  </div>
                )}
                {action === "Login" ? (
                  <div style={{ display: "none" }}></div>
                ) : (
                  <div className="Signinput">
                    <img src={user_icon} alt="" />
                    <input
                      type="text"
                      placeholder="Phone"
                      value={public_pnumber}
                      onChange={(e) => setPhonenum(e.target.value)}
                    />
                  </div>
                )}
                {action === "Login" ? (
                  <div style={{ display: "none" }}></div>
                ) : (
                  <div className="Signinput">
                    <img src={user_icon} alt="" />
                    <input
                      type="text"
                      placeholder="Address"
                      value={public_address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                )}

                <div className="Signinput">
                  <img src={password_icon} alt="" />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {action === "Login" ? (
                  <div style={{ display: "none" }}></div>
                ) : (
                  <div className="Signinput">
                    <img src={password_icon} alt="" />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      value={conpassword}
                      onChange={(e) => setConpassword(e.target.value)}
                    />
                  </div>
                )}
              </div>
              {action === "Sign Up" ? (
                <div style={{ display: "none" }}></div>
              ) : (
                <div className="forgot-password">
                  Forget Password? <span>Click Here</span>
                </div>
              )}

              <div className="Signsubmit-container">
                <button className="Signsubmit" onClick={handleSubmit} style={{ width: "500px" }}>
                  {action}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProjectFooter />
    </>
  );
};

export default LoginAndRegister;
