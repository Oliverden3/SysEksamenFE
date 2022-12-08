import React from 'react';
import { useLocation } from "react-router-dom";


function SingleCharityPage() {
    const location = useLocation();

    let charity = location.state.charity;
    return (
        <div>
            <h1>Charity</h1>
            <h3>{charity.name}</h3>
            <p>{charity.slug}</p>
            <p>{charity.category}</p>
        </div>
    );
}

export default SingleCharityPage;