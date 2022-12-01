import React, {useEffect, useRef, useState} from 'react';

function AdminPageDelete({UserId}) {

    const inputRef = useRef();
    const [items, setItems] = useState([]);
    console.log(inputRef.current)


    useEffect(() => {
        fetch("http://localhost:8080/api/user/all")
        .then(res =>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonResponse => setItems(jsonResponse))
    }, [])

    const handleClick = async (Category) => {
        await fetch("http://localhost:8080/api/charity/"+Category).then(res =>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonResponse => setData(jsonResponse))
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
