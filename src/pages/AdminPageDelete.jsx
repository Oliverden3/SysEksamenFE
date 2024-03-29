import React, {useEffect, useRef, useState} from 'react';
import PostForm from "../components/PostForm.jsx";
import axios from "axios";
import EditUser from "../components/EditUser.jsx";
import {useNavigate} from "react-router-dom";
import CreateTripForm from '../components/CreateTripForm.jsx';
import CreateGuideForm from '../components/CreateGuideForm.jsx';

function AdminPageDelete({UserId}) {

    const inputRef = useRef();
    const [items, setItems] = useState([]);
    const [users, setUsers] = useState([])
    const [charity, setCharity] = useState([]);
    const navigate = useNavigate();
    console.log(inputRef.current)




    useEffect(() => {
        fetch("https://www.slothj.com/tomcat/EksamenBackend/api/user/all")
            .then(res =>{
                if(res.ok){
                    return res.json()
                }
            }).then(jsonResponse => setUsers(jsonResponse))
    }, [])

    const handelDelete = (index) => {
    axios.delete(`https://www.slothj.com/tomcat/EksamenBackend/api/user/${index}`)
        setUsers([...users]);
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
            {<CreateTripForm/>}
            {<CreateGuideForm/>}
            <br /> 
            
                <ul>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>User Name</th>
                            <th>Role</th>
                        </tr>

                    {   users.map(item => (

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
                

        </div>
    );
}

export default AdminPageDelete;
