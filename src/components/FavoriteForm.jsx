import React, {useState, useEffect} from "react";
import Axios from "axios";


function FavoriteForm({userId, charity}){
    const url = "http://localhost:8080/api/user/favorite"
    const [UserId, setUserId] = useState ("")
    const [charitySlug, setCharitySlug] = useState("")
    const [isLoading, setIsLoading] = useState();

    

    const handleClick = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            userid: userId,
            slug: charity.slug,
          }),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
  
        const result = await response.json();
  
        console.log('result is: ', JSON.stringify(result, null, 4));
  
        setData(result);
      } catch (err) {
        setErr(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    
    return(
        <div>
          
          <button onClick={handleClick}>{userId} </button> 
           {charity.slug} hej {userId}
        </div>

    )
    }
export default FavoriteForm;