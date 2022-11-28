import React, {useEffect, useState} from 'react';
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import Contact from "./pages/Contact.jsx";
import AdminPageDelete from "./pages/AdminPageDelete.jsx";
import UserCreate from "./pages/UserCreate.jsx";
import Header from "./components/Header.jsx";
import apiFacade from "./utils/apiFacade.js";
import facade from "./utils/apiFacade.js";

function App(props) {

    const [loggedIn, setLoggedIn] = useState(false)
    const [role, setRole] = useState("")
    const [errorMessage, setErrorMessage] = useState('All is good ... so far');

    useEffect(() => {
        if(apiFacade.getToken()) setLoggedIn(true), setRole(apiFacade.getUserRoles())
    })


    const obj = {
        name: "TestName",
        street: "TestStreet",
        town: "TestTown",
        country: "TestCountry",
    }

    return (
        <>
            <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn} setRole={setRole} role={role}/>
            <Routes>
                <Route path="/" element={<Home loggedIn={loggedIn}/>}/>
                <Route path="search" element={<Search/>}/>
                <Route path="contact" element={<Contact address={obj}/>}/>

                <Route path="userCreate" element={<UserCreate/>}/>
                <Route path="admin" element={facade.hasUserAccess('admin', loggedIn) && <AdminPageDelete facade={facade} setErrorMessage={setErrorMessage}/>}/>

                <Route path="*" element={<h1>Page Not Found !!!!</h1>}/>
            </Routes>
        </>
    );
}

export default App;
