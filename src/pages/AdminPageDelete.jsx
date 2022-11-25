import React, {useEffect, useRef, useState} from 'react';

function AdminPageDelete(props) {

    const inputRef = useRef();
    const [items, setItems] = useState([]);
    console.log(inputRef.current)


    useEffect(() => {
        fetch("http://localhost:8080/sys/api/user/all").then(res =>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonResponse => setItems(jsonResponse))



    }, [])



    return (
        <div>
            <h1>AdminPage</h1>


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
