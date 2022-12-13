import React from 'react';
import { useLocation } from "react-router-dom";


function SingleCharityPage() {
    const location = useLocation();


    let charity = location.state.charity;
    console.log(charity)

    return (
        <div>
            <h1>{charity.name}</h1>
            <br/>
            <h4>{charity.description}</h4>
            <br/>
            <p>{charity.location}</p>

            <td> <a href={charity.profileUrl}>{charity.profileUrl}</a></td>

        </div>
    );
}

export default SingleCharityPage;