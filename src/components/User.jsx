// import React from 'react';
import React, { useState, useEffect } from "react";
import EditUser from '../users/EditUser';
import '../App.css'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { FaSearch, FaSearchLocation } from "react-icons/fa";
import LoginForm from './LoginForm';

  const User = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [editedUser, setEditedUser] = useState("");
    const [cari, setCari] = useState("");

    //Panggil fungsi 'fetchBooks' menggunakan 'useEffect untuk ambil data saat komponen dimuat
    useEffect(() => {
        fetchUsers();
    }, []);
    
    //Buat fungsi 'fetchBooks' untuk mengambil data dari API dan perbaharui state 
    const fetchUsers = async () => {
        const response = await fetch("http://localhost:5000/api/user");
        const data = await response.json();
        setUsers(data);
    };

  return(
    <>
        <div className="akses-data">
          <h1><center>DATA USER</center></h1>
         <center><Form>
  <InputGroup 
            class='my-5'>
            <Form.Control 
            onChange={(e) => setCari(e.target.value)}
            placeholder='Search User'
            />
            </InputGroup>
             </Form></center>
             <div class="box">
          <center><div class="container-1">
         </div></center>
         <br></br>
            <table border="1">
                <thead>
                    <tr>
                    <th className="judul" width="10">No</th>
                        <th className="judul" width="50"><center>Username</center></th>
                        <th className="judul" width="10"><center>Password</center></th>
                    </tr>
                </thead>
                <tbody>
              {  Object.values(users).filter((user) => {
                        return cari.toLowerCase() === '' ? user : user.username.
                        toLowerCase().includes(cari)
                    }).map((user, index) =>(
                        <tr key={user._id}>
                             <td>{index + 1}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            </tr>
                    ))}
                </tbody>  
            </table>
   

            {/* Komponen Edit Book */}
            <div>
            </div>
            </div>
            {/* {editBook && <EditBook book={editBook} updateBook={updateBook} />} */}
            </div>
            </>
  );
}


export default User;