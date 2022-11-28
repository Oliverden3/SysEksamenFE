import React from 'react';
import {useEffect,useState} from "react";
import apiFacade from "../utils/apiFacade.js";
import Login from "../components/Login.jsx";
import LoggedIn from "../components/LoggedIn.jsx";


function UserCreate({loggedIn}) {
    const [intiailState, setIntiailState] = useState({});




    return (

        <div>
            <h3>User Create page</h3>

            <p>you are logged in as: {apiFacade.getUserRoles()}</p>



        </div>


    );
}

export default UserCreate;

