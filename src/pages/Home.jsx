import React from 'react';
import {useEffect,useState} from "react";
import Login from "../components/Login.jsx";
import LoggedIn from "../components/LoggedIn.jsx";


function Home({loggedIn}) {
const [intiailState, setIntiailState] = useState({});



useEffect(() => {
    fetch("http://localhost:8080/ca2_backend_war_exploded/api/jokes").then(res =>{
        if(res.ok){
            return res.json()
        }
    }).then(jsonResponse => setIntiailState(jsonResponse))

}, [])


    console.log(intiailState.chuckJoke)
    console.log(intiailState.dadJoke)
    return (

        <div>
            <h3>Homepage</h3>


            <button class="btn">want to see a joke??</button>

            {!loggedIn ? (<div>no joke</div>) :
                (<div>
                    <p>Chuck Joke:</p>
                    <p>{intiailState.chuckJoke}</p>

                    <p>Dad Joke:</p>
                    <p>{intiailState.dadJoke}</p>

                </div>)}



        </div>


    );
}

export default Home;

