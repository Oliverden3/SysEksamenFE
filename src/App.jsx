import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import Contact from "./pages/Contact.jsx";
import AdminPageDelete from "./pages/AdminPageDelete.jsx";
import Header from "./components/Header.jsx";
import apiFacade from "./utils/apiFacade.js";
import facade from './utils/apiFacade.js';

function App(props) {

    const [loggedIn, setLoggedIn] = useState(false)
    const [role, setRole] = useState("")


    useEffect(() => {
        if(apiFacade.getToken()) setLoggedIn(true)
        console.log(facade.getUserRoles())
    }, [])

    const obj = {
        name: "TestName",
        street: "TestStreet",
        town: "TestTown",
        country: "TestCountry",
    }

    return (
        <>
            <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn} role={role}/>
            <Routes>
                <Route path="/" element={<Home loggedIn={loggedIn}/>}/>
                <Route path="search" element={<Search/>}/>
                <Route path="contact" element={<Contact address={obj}/>}/>
                <Route path="admin" element={<AdminPageDelete/>} />
                <Route path="*" element={<h1>Page Not Found !!!!</h1>}/>
            </Routes>
        </>
    );
}

export default App;
