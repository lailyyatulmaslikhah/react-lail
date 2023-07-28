//import React dan model untuk 'fetch'
// import React, { useState, useEffect } from "react";
// import EditUser from "./EditUser";
// import '../App.css';
// import Form from 'react-bootstrap/Form'
// import InputGroup from 'react-bootstrap/InputGroup'
// import { FaSearch, FaSearchLocation } from "react-icons/fa";
//import 'bootstrap/dist/css/bootstrap.min.css'

//Buat komponen React dan Definisikan State untuk data yang akan kita ambil dari API 
// const AddUser = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [editUser, setEditUser] = useState("");
//     const [error, setError] = useState("");
//     const [user, setUser] = useState(false);
//     const [search, setSearch] = useState("");

    //Panggil fungsi 'fetchBooks' menggunakan 'useEffect untuk ambil data saat komponen dimuat
    
    // }
  
    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     const userData = { username, password };
    
    //   const response = await fetch("http://localhost:5000/api/user/tambah", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(userData),
    //   });
    //   const data = await response.json();
    //   setUser([...user, data]);

    //Buat fungsi 'fetchBooks' untuk mengambil data dari API dan perbaharui state 
    // async function addUser() {
    //         const response = await fetch("http://localhost:5000/api/user",{
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({ username, password}),
            
    //         });
    //         const data = await response.json();
    //         setUser([...user, data]);
    //     }
    //Buat fungsi untuk menambah data baru melalui API dengan method 'POST'
    // async function addUser() {
    //     const response = await fetch("http://localhost:5000/api/user", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ username, password }),
    //     });
    //     const data = await response.json();
    //     setUsers([...users, data]);
    // }

    //Buat fungsi untuk Update data melalui API dengan method 'PUT'
    // const updateUser = async (id, newAddUser) => {
    //     const response = await fetch(`http://localhost:5000/api/user/${id}`, {
    //         method: "PUT",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(newAddUser),
    //     });
    //     const data = await response.json();
    //     setUsers(users.map((user) => (user._id ===  id ? { ...data } : user)));
    // };

    //Buat fungsi untuk menghapus data melalui API dengan method 'Delete'
    // const deleteUser = async (id) => {
    //     await fetch(`http://localhost:5000/api/user/${id}`, {
    //         method: "DELETE",
    //     });
    //     setUsers(users.filter((user) => user._id !== id));
    // };

    //Buat fungsi "handle" yang menangani suatu operasi sehinggaa menghasilkan aksi sesuai kebutuhan 
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     addUser();
    //     setUsername("");
    //     setPassword("");
    // };

    // const handleEditClick = (user) => {
    //     setEditUser(user);
    // };

    // const handleBatalEdit = (user) => {
    //     setEditUser();
    // };
    // };

    //Tampilkan data diri dari API ke komponen JSX
    // return (
    //     <div>
    //         <form onSubmit={handleSubmit}>
                {/* <label><center>
                    Username : 
                    <input
                    type="text"
                    class="form_input"
                    value={username} 
                    onChange={(event) => setUsername(event.target.value)}
                    />
                </center></label>
                
                <label><center>
                Password : 
                <input
                type="text"
                class="form_input"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                />
                </center></label>
                <center>
                <button type="submit"><input type="button" class="btn-add"></input></button></center> */}
            {/* </form>
            <br />
            <h3><center>DATA USER</center></h3>
            <center><Form>
  <InputGroup className='my-5'>
            <Form.Control 
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search USER'
            />
            </InputGroup>
             </Form></center>
             <br></br>
            <table border="1">
                <thead>
                    <tr>
                     <th className="judul" width="10">No</th>
                        <th className="judul" width="120"><center>Username</center></th>
                        <th className="judul" width="80"><center>Password</center></th>
                        <th className="judul" colspan="50"><center>Aksi</center></th>
                    </tr>
                </thead>
                <tbody>
                {user.filter((user) => {
                        return search.toLowerCase() === '' ? user: user.username.
                        toLowerCase().includes(search)
                    }).map((user, index) =>(
                        <tr key={user._id}>
                             <td>{index + 1}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td> */}
                            {/* <td><center>
                                <button onClick={() => handleEditClick(user)}><input type="button" class="btn-update"></input>UPDATE</button>
                         
                                <button onClick={() => deleteUser(user._id)}><input type="button" class="btn-delete"></input>DELETE</button>
                           
                                <button onClick={() => handleBatalEdit(users)}><input type="button" class="btn-cancel"></input>CANCEL</button>
            //                     </center></td> */}
                     {/* </tr> */}
                {/* ))}
                 </tbody>   */}
             {/* </table> */}
            {/* Komponen Edit Book */}
            // <div>
                {/* {editUser && <EditUser user={editUser} updateUser={updateUser} />} */}
            {/* </div>
        </div> */}
     {/* );
     };


// export default AddUser; */}