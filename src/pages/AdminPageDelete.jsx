import React, {useEffect, useRef, useState} from 'react';
import PostForm from "../components/PostForm.jsx";
import Blacklist from '../components/BlackListForm.jsx';
import axios from "axios";
import EditUser from "../components/EditUser.jsx";
import {useNavigate} from "react-router-dom";

function AdminPageDelete({UserId}) {

    const inputRef = useRef();
    const [items, setItems] = useState([]);
    const [charity, setCharity] = useState([]);
    const navigate = useNavigate();
    console.log(inputRef.current)




    useEffect(() => {
        fetch("http://localhost:8080/api/user/all")
            .then(res =>{
                if(res.ok){
                    return res.json()
                }
            }).then(jsonResponse => setCharity(jsonResponse))
    }, [])

    const handelDelete = (index) => {
    axios.delete(`http://localhost:8080/api/user/${index}`)
        setCharity([...charity]);
    window.location.reload(false);
    }

    const handleSpeseficUserEdit = (chosenUserId) =>{
        navigate('/editUser/'+chosenUserId, {
            state: { userId: chosenUserId },
        })
    }




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

                    {charity.map(item => (

                            <tr>
                                <td>{item.id}</td>
                                <td>{item.userName}</td>
                                <td>{item.roles[0]}  {item.roles[1]}</td>
                                <td><button onClick={() => handleSpeseficUserEdit(item.id)}>edit</button></td>
                                <button className="delete" onClick={()=>handelDelete(item.id)}>delete</button>
                            </tr>

                        ))}



                    </table>
                </ul>
                        <Blacklist/>

        </div>
    );
}

export default AdminPageDelete;
