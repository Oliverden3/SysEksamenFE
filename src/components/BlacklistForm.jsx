import React, {useState} from "react";

function BlacklistForm(){
   const [data, setData] = useState({
       "category":"",
       "slug": ""
   });

    function submit(e){
        e.preventDefault();
        fetch("http://localhost:8080/api/charity/"+data.category+"+"+data.slug)
            .then(res => {
                console.log(res.data)
            })

    }

    function handel(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return(
        <div>
            <form onSubmit={(e)=> submit(e)}>
                <input onChange={(e)=>handel(e)} id="category" value={data.category} placeholder={"category"} type={"text"}></input>
                <br/>
                <input onChange={(e)=>handel(e)} id="slug" value={data.slug} placeholder={"slug"} type={"text"}></input>
                <br/>
                <button>Blacklist</button>
            </form>
        </div>

    )
}
export default BlacklistForm;