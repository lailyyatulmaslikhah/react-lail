import '../App.css';
import AddUser from "../users/AddUser";
import React, { useState }from "react";
import EditUser from '../users/EditUser';




function Cari() {
    const [query, setQuery] = useState("");
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [editedUser, setEditedUser] = useState("");

    // console.log(books.filter(book=>book.jdlbuku.includes("fe")))
    const cari = (data)=>{
        return data.filter(user=>user.username.toLowerCase().includes(query))
    }
    return (
        <div className="cari">
            <input type="text" placeholder='Search....' className='cari' onChange={e=> setQuery(e.target.value)} />
            <ul className='list'>
                {users.filter(user=>user.username.toLowerCase() .includes(query)).map((user) => (
                    <li key={user.username} className='listItem'>{users.username}</li>
                ))}
            </ul>
            <AddUser/>
            <EditUser/>
        </div>
    )
}
export default Cari