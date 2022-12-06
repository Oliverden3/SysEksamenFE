import React, {useEffect, useRef, useState} from 'react';
import BlacklistForm from "../components/BlacklistForm.jsx";

function AdminPageDelete({UserId}) {

    const inputRef = useRef();
    const [items, setItems] = useState([]);
    const [user, setUser] = useState([]);
    console.log(inputRef.current)




    useEffect(() => {
        fetch("http://localhost:8080/api/user/all")
            .then(res =>{
                if(res.ok){
                    return res.json()
                }
            }).then(jsonResponse => setUser(jsonResponse))
    }, [])





    return (
        <div>
            <h1>AdminPage</h1>



            {UserId}
                
                <ul>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>User Name</th>
                            <th>Role</th>
                        </tr>

                    {user.map(item => (

                            <tr>
                                <td>{item.id}</td>
                                <td>{item.userName}</td>
                                <td>{item.roles.toString()}</td>
                            </tr>

                        ))}



                    </table>
                </ul>

            <BlacklistForm/>
        </div>
    );
}

export default AdminPageDelete;
