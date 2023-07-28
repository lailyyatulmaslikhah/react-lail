// import React, { useState } from "react";

// const EditUser = ({ user, updateUser }) => {
//     const [editUser, setEditUser] = useState(user);

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setEditUser((prevUser) => ({
//             ...prevUser,
//             [name]: value,
//         }));
//     };

//     const handleUpdateClick = () => {
//         updateUser(user._id, editUser);
//     };

//     return (
//         <div>
//             <center><h3>EDIT USER</h3></center>
//             <center><label className="typetext">
//                 <span>USERNAME</span>
//             <input 
//            type="text"
//             class="form_input"
//            name="username"
//            value={editUser.username}
//            onChange={handleInputChange}
//            />
//             </label></center>
            
//             <center><label className="typetext">
//                 <span>Password : </span>
           
//             <input 
//            type="text"
//             class="form_input"
//            name="password"
//            value={editUser.password}
//            onChange={handleInputChange}
//            />
//             </label></center>

            

//             {/* <center><button onclick={handleUpdateClick}><input type="button" class="btn-update"></input>UPDATE</button></center> */}
//             <center><button className="typesubmit" type="button" class="btn-update" onClick={handleUpdateClick}>Update</button></center>
//         </div>
        
//     );
// };

// export default EditUser;