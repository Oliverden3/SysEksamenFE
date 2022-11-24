import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Login from "./Login.jsx";
import LoggedIn from "./LoggedIn.jsx";
import "../styles/header.css";
import facade from "../utils/apiFacade.js";


function Header({setErrorMsg, loggedIn, setLoggedIn}) {


    return (
        <nav className="topnav">
            <NavLink className="active" to="/"><i className="fa fa-fw fa-home"></i> Home</NavLink>
            <NavLink to="/search"><i className="fa fa-fw fa-search"></i> Search</NavLink>

            {facade.getUserRoles() !== "admin" ? (<role setErrorMsg={setErrorMsg} />) :
                (<div>
                    <NavLink to="/admin"><i className="fa fa-fw fa-admin"></i> Admin Page</NavLink>
                </div>)}


            <NavLink to="/contact"><i className="fa fa-fw fa-envelope"></i> Contact</NavLink>

            {!loggedIn ? (<Login setLoggedIn={setLoggedIn} setErrorMsg={setErrorMsg}  />) :
                (<div>
                    <LoggedIn setLoggedIn={setLoggedIn}/>
                </div>)}
        </nav>
    );
}

export default Header;
