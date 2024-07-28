import logo from "../logo.svg";
import React from "react";
import { Link } from "react-router-dom";
import '../Style/Navbar.css';

const Navbar = () =>{
    
return (

        <div style={{backgroundColor:'#212529'}}>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img src={logo} alt="Logo" style={{height:'30px'}}/>                  
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{color: 'white'}}>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/works" >Works</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" >Contact</Link>
                            </li>
                        </ul>
                        <button className="btn btn-sm btn-outline-secondary" type="button">Let's Talk</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
