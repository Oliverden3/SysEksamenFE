import React from 'react';
import {useEffect,useState} from "react";
import apiFacade from "../utils/apiFacade.js";
import Login from "../components/Login.jsx";
import LoggedIn from "../components/LoggedIn.jsx";


function UserCreate({loggedIn}) {
    const [intiailState, setIntiailState] = useState({});



    useEffect(() => {
        fetch("http://localhost:8080/sys/api/jokes")
            .then(res =>{
                if(res.ok){
                    return res.json()
                }
            }).then(jsonResponse => setIntiailState(jsonResponse))

    }, [])


    return (

        <div>
            <h3>User Create page</h3>

            <p>{}</p>

            {!loggedIn ? (<div>you are logged in ass {apiFacade.getUserName()}</div>) :
                (<div>

                   <p>hello</p>

                </div>)}



        </div>


    );
}

export default UserCreate;

