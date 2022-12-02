import React, {useEffect, useRef, useState} from 'react';

function AdminPageDelete({UserId}) {

    const inputRef = useRef();
    const [items, setItems] = useState([]);
    console.log(inputRef.current)


    useEffect(() => {
        fetch("http://localhost:8080/BackEnd_CA2_war_exploded/api/user/all")
        .then(res =>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonResponse => setItems(jsonResponse))
    }, [])

    const handleClick = async (Category) => {
        await fetch("http://localhost:8080/BackEnd_CA2_war_exploded/api/charity/"+Category).then(res =>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonResponse => setData(jsonResponse))
    }



    const blackListwebsite = async (Category, Slug) => {
        console.log("Category = "+ Category + ", Slug = " + Slug)
        fetch("http://localhost:8080/BackEnd_CA2_war_exploded/api/charity/api/charity/"+Category+Slug)
        .then(res => {
            if(res.ok){
                return res.json()
            } 
        }).then(jsonResponse => setItems(jsonResponse))
    }


    return (
        <div>
             <form action = {blackListwebsite}>
                <input type="text" placeholder="Category" id="Category"/>
                <input type="text" placeholder="Slug" id="Slug"/>
                <input type="submit" value="Submit"/>
            </form>
            <h1>AdminPage</h1>


            {UserId}
                
                <ul>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>User Name</th>
                            <th>Role</th>
                        </tr>

                    {items.map(item => (

                            <tr>
                                <td>{item.id}</td>
                                <td>{item.userName}</td>
                                <td>{item.roles[0]}  {item.roles[1]}</td>
                            </tr>

                        ))}

                    </table>
                </ul>


        </div>
    );
}

export default AdminPageDelete;
