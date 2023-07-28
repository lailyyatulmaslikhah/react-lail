 //membuat component Navbar dengan teknik expor named
//  export function Navbar(){
//     return (
//       <div className="topnav">
//         <h1><marquee>~CURRICULUM VITAE~</marquee></h1>   
//         {/* <h1>~CURRICULUM VITAE~</h1>   */}
//       </div>
//     );
//   }
 import { Link } from "react-router-dom";
import React from 'react';


 //Membuat component Navbar dengan teknik export named
 export function Navbar() {
  return (
    <div className="topnav">
      <Link to="/" className="App-link">
        Home
      </Link>
      {/* <Link to="Latihan1" className="App-link">
        Latihan 1
      </Link> */}
      <Link to="Tugprak1" className="App-link">
        Tugprak 1
      </Link>
      {/* <Link to="Latihan2" className="App-link">
        Latihan 2
      </Link> */}
      <Link to="Uts" className="App-link">
        UTS
      </Link>
      <Link to="State" className="App-link">
        State
      </Link>
      <Link to="Hooks" className="App-link">
        Hooks
      </Link>
      {/* <Link to="login/admin" className="App-link">
        CudBook
      </Link> */}
        <Link to="akses" className="App-link">
        Product
      </Link>
      <Link to="/daftar" className="App-link">
      Register
      </Link>
      <Link to="login" className="App-link">
      Login
      </Link>
      <Link to="login/" className="App-link">
        Admin
      </Link>
      <Link to="admin" className="App-link">
        Bar Admin
      </Link>

      <Link to="Mahasiswi" className="App-link">
        Mahasiswi
      </Link>
      
    </div>
  );
 };
