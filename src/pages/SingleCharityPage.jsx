import React from 'react';
import { useLocation } from "react-router-dom";


function SingleCharityPage({charity}) {
    return (
        <div>
            <h1>Charity</h1>
            <h3>{charity.name}</h3>
        </div>
    );
}

export default SingleCharityPage;