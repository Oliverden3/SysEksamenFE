import {useState} from "react";

function FavoriteForm(charitySlug, userId) {

    const [data, setData] = useState([])
    let favoriteInfo = {
        "userId": userId,
        "charitySlug": charitySlug,

    }

    const handleFavorite = async () => {
        await fetch("http://localhost:8080/api/charity/",favoriteInfo)
        console.log("Favorite charity with slug: " + favoriteInfo.charitySlug)
    }



  return (
    <div>
      <form>
       <button onClick={() => handleFavorite()}>Favorite</button>
      </form>
    </div>
  );
}
export default FavoriteForm;