import { useContext, useEffect, useRef, useState } from "react";
import LogoBlue from "../assets/logo_blue.svg";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import {
  MdOutlineClose,
  MdOutlineGridView,
} from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";

import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { SidebarContext } from "../context/SideBarContext";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);
  const [action,setAction] = useState("")
  

  // closing the navbar when clicked outside the sidebar area
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-oepn-btn"
    ) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
      ref={navbarRef}
    >
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <img src={LogoBlue} alt="" />
          <span className="sidebar-brand-text">   </span>
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/dashboard" className={action==="dashbord"?"menu-link active":"menu-link"} onClick={ () => setAction("dashbord")}>
                <span className="menu-link-icon">
                  <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Dashboard</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/dashboard/incident" className={action==="incident"?"menu-link ":"menu-link"} onClick={ () => setAction("incident")}>
                <span className="menu-link-icon">
                  <LiaChalkboardTeacherSolid size={20} />
                </span>
                <span className="menu-link-text">Incident</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/dashboard/services" className={action==="Service"?"menu-link ":"menu-link"} onClick={ () => setAction("Service")}>
                <span className="menu-link-icon">
                  <PiStudentBold size={18} />
                </span>
                <span className="menu-link-text">Service Users</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/dashboard/users" className={action==="Users"?"menu-link ":"menu-link"} onClick={ () => setAction("Users")}>
                <span className="menu-link-icon">
                  <PiStudentBold size={20} />
                </span>
                <span className="menu-link-text">public Users</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
