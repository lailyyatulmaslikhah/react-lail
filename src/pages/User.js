//panggil component profile yang sudah kita buat difolder components
//import Search from "../components/Search";
import React from 'react';
import EditUser from "../users/EditUser";
import AddUser from "../users/AddUser";






export default function User() {
    return (
        <>
         {/* <Search /> */}
        <AddUser />
        <EditUser/>
        </>
    );
}
