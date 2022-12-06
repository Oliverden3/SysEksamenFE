import React from 'react';
import {useEffect,useState} from "react";
import apiFacade from "../utils/apiFacade.js";
import Login from "../components/Login.jsx";
import LoggedIn from "../components/LoggedIn.jsx";
import "../styles/home.css";
import PostForm from "../components/PostForm.jsx";




function Blacklist() {
    

const [data, setData] = useState([])
const [isShown, setIsShown] = useState(false)




const handleClick = async (Category) => {
   await fetch("http://localhost:8080/api/charity/"+Category).then(res =>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonResponse => setData(jsonResponse.nonprofits))

        setIsShown(current => !current)
}

const handleCharityClick = async (charity) =>{
    await fetch("http://localhost:8080/api/charity/"+charity.category+"+"+charity.slug)
    console.log("Blacklisted charity with slug: " + charity.slug)
    removeCharity(charity)
}

const removeCharity = (charity) => {
    setData(current =>
      current.filter(obj => {
        return obj !== charity;
      }),
    );
  };

    return (


        <div>
                <button onClick={() => handleClick("animals")}>
                    Animals!
                </button>
                <button onClick={() => handleClick("education")}>
                    Education!
                </button>
                {isShown && (
                    <div>
                <ul>
                    <table>
                        <tr>
                            <th>Charity:</th>
                            <th>Slug:</th>
                        </tr>

                    {data.map(charity =>( 

                        <tr>
                            <td>{charity.name}</td>
                            <td>{charity.slug}</td>
                            <td><button onClick={() => handleCharityClick(charity)}>Blacklist this biatch</button></td>
                        </tr>

                    ))}

                    </table>
                </ul>                        

                    </div>

                )}
<br />    
            </div>)}
export default Blacklist;

