import { Component } from "react";
import "../styles/NavBarStyles.css"
import { MenuItems } from "./MenuItems";
import { Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import RapidResponseLogo from '../assets/RapiResponseLogo.jpg';

class NavBar extends Component{

    state = {clicked:false,
            isLoggedIn: false,
            userName: ''}
            

    componentDidMount() {
        const loggedUserName = sessionStorage.getItem('loggedUserName');
        const loggedUserRole = sessionStorage.getItem('loggedUserRole');
        
        if (loggedUserName) {
            this.setState({ isLoggedIn: true, userName: loggedUserName, userRole: loggedUserRole });
        }
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    handleLogout = () => {
        sessionStorage.clear();
        window.location.href = '/';
    };

    redirectToDashboard = () => {
        const { userRole } = this.state;
        if (userRole == "ServiceUsers" || userRole == "PublicUsers"|| userRole =="Admin") {
            window.location.href = '/dashboard';
        }
    };

    render(){
        return(
            <nav className="NavBarItems">
                <h1 className="navbar-logo">
                <img src={RapidResponseLogo} alt="Logo" className="logo-image" />
                RapidResponse</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                <FontAwesomeIcon icon={this.state.clicked ? faTimes : faBars} />
                </div>
                <ul className={this.state.clicked ? "nav-menu active":"nav-menu"}>
                    {MenuItems.map((item,index,) => 
                    {
                        return(
                            <li key = {index}>
                                <Link className={item.cName} to = {item.url}>
                                <i className={item.icon}></i>
                                {item.title}
                                </Link>
                            </li>
                        )
                    })}
                
                    {this.state.isLoggedIn ? ( 
                        
                        <DropdownButton title={this.state.userName}>
                            <Dropdown.Item href="#/action-1" onClick={this.redirectToDashboard}>Dashboard</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" onClick={this.handleLogout} >Log Out</Dropdown.Item>
                            
                        </DropdownButton>
                    ) : (
                        <li>
                            
                            <Link className="nav-links-btn" to="/signup">Sign Up</Link>
                        </li>
                    )}
                </ul>
            </nav>
        )
    }
}

export default NavBar;