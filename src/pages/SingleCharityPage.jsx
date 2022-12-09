import React from 'react';
import { useLocation } from "react-router-dom";


function SingleCharityPage() {
    const location = useLocation();


    let charity = location.state.charity;
    console.log(charity)

   /*const showOrDontShow = () => {
        if(charity.description === null){
            return <p>No description available<p/>
        }
                else{}
   }*/







    return (
        <div>
            <h1>Charity</h1>

            <p>Charity name: </p>
            <p>{charity.name}</p>

            <p>Charity slug: </p>
            <p>{charity.slug}</p>

            <p>Charity description: </p>
            <p>{charity.description}</p>

            <td> <a href={charity.profileUrl}>{charity.profileUrl}</a></td>
            {/*<p>{!charity.description ? "" : charity.description}</p>*/}

        </div>
    );
}

export default SingleCharityPage;