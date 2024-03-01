import { Component } from "react";
import "../styles/NavBarStyles.css"
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

class NavBar extends Component{
    state = {clicked:false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavBarItems">
                <h1 className="navbar-logo">RapidResponse</h1>
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
                    <li><Link className="nav-links-btn" to="/signup">Sign Up</Link></li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;