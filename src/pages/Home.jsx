import React from 'react';
import {useEffect,useState} from "react";
import apiFacade from "../utils/apiFacade.js";
import Login from "../components/Login.jsx";
import LoggedIn from "../components/LoggedIn.jsx";


function Home({loggedIn}) {
const [intiailState, setIntiailState] = useState({});



useEffect(() => {
    fetch("http://localhost:8080/sys/api/jokes").then(res =>{
        if(res.ok){
            return res.json()
        }
    }).then(jsonResponse => setIntiailState(jsonResponse))

}, [])


    return (

        <div>
            <h3>Homepage</h3>




            <button class="btn">want to see a joke??</button>

            {!loggedIn ? (<div>you are not logged in</div>) :
                (<div>
                    <p>Chuck Joke:</p>
                    <p>{intiailState.chuckJoke}</p>

                    <br/>

                    <p>{apiFacade.getUserRoles()}</p>

                    <p>Dad Joke:</p>
                    <p>{intiailState.dadJoke}</p>

                </div>)}



        </div>


    );
}

export default Home;

