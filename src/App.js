// import logo from './logo.svg';
import './App.css';
import React from 'react';
//import component Header(teknik export default)
//import Detailimage from "./components/Detailimage";
import Carddiri from "./components/Carddiri";
import Pahlawan from "./components/Pahlawan";
import Abstraksi from "./components/Abstraksi";
import Buah from "./components/Buah";
import Header from "./components/Header";
//import ButtonProps from "./components/ButtonProps";
//import component Navbar (teknik export named)
import { Navbar } from "./components/Navbar";
//import Profile from "./components/Profile";
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
//import Datadiri from "./components/Datadiri";
//import LulusUjian from "./components/LulusUjian";
import LevelSeblak from "./components/LevelSeblak";
//import RenderingList from "./components/RenderingList";
import MedicineList from "./components/MedicineList";
import Husestate from './components/Husestate';
import Likestate from './components/Likestate';
import Counterusestate from './components/Counterusestate';
import Useeffectres from './components/Useeffectres';
import Windowwidth from './components/Windowwidth';
import Datafetchinguseeffect from "./components/Datafetchinguseeffect";
import Callback from "./components/Callback";
import Hookuseid from "./components/Hookuseid";
import Ref from "./components/Ref";
import Themecontext from "./components/Themecontext";
import DataFetching from "./components/DataFetching";
import LoginForm from "./components/LoginForm";
import RegisterForm from './components/RegisterForm';
import ProtectedAdmin from "./components/ProtectedAdmin";
import Tepibar from "./components/Tepibar";
import Databuku from "./components/Databuku";
import Akses from './components/Akses';
import Search from './components/Search'
import Cari from './components/Cari';
import AddMahasiswa from './mahasiswas/AddMahasiswa';
import EditMahasiswa from './mahasiswas/EditMahasiswa';
import AddMahasiswi from './mahasiswis/AddMahasiswi';
import EditMahasiswi from './mahasiswis/EditMahasiswi';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import User from './components/User';
import Mahasiswi from "./pages/DataMahasiswi";
//import EditMahasiswa from './mahasiswas/EditMahasiswa';


            // PAGES //
import Home from "./pages/Home";
// import Latihan1 from "./pages/Latihan1";
import Tugprak1 from "./pages/Tugprak1";
// import Latihan2 from "./pages/Latihan2";
import Uts from "./pages/Uts";
import State from "./pages/State";
import Hooks from "./pages/Hooks";
import Book from "./pages/Book";
import Admin from "./pages/Admin";
import Mahasiswa from './pages/Mahasiswa';

// import User from './pages/User';





          // CUDBOOK //
import AddBook from "./books/AddBook";
import EditBook from "./books/EditBook";





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//component button
// function MyButton(){
//   return <button>I'm a button </button>
// }

// function MyApp(){
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   )
// }

// export default MyApp

//component baru header

// function Header(){
//   return(
//     <div>
//       <h1>Header Component</h1>
//     </div>
//   );
// }
//component baru 2
// function Navbar(){
//   return(
//     <div className='topnav'>
//       <h1>navbar Component</h1>
//     </div>
//   );
// }

//component baru 3
// function Post(){
//   return(
//     <div>
//       <h1>Ini Halaman Post</h1>
//     </div>
//   );
// }

// //component baru 4
// function Sidebar(){
//   return(
//     <div>
//       <h1>Ini Halaman Sidebar</h1>
//     </div>
//   );
// }

// //component baru 5
// function Parent(){
//   return(
//     <div className="row">
//       <div className="leftcolumn">
//         <h1>Post Component</h1>
//         <Post />
//         </div>
//         <div className="rightcolumn">
//           <h1>SideBar Component</h1>
//           <Sidebar />
//           </div>
//           </div>
//   );
// }

// //component baru 6
// function Footer(){
//   return(
//     <div className="footer">
//       <h1>Ini Halaman Footer</h1>
//     </div>
//   );
// }

// function Home(){
//   return(
//     <div className="App">
//       <Header />
//       <Navbar />
//       <Parent />
//       <Footer />
//     </div>
//   );
// }

export default function MyApp(){
  return (
     <div>
    <BrowserRouter>
     <Header />
     <Navbar />
     <>
     <Routes>
      <Route exact path="/" element={<Home />} />
      {/* <Route exact path="Latihan1" element={<Latihan1 />} /> */}
      <Route exact path="Tugprak1" element={<Tugprak1 />} />
      {/* <Route exact path="Latihan2" element={<Latihan2 />} /> */}
      <Route exact path="Uts" element={<Uts />} />
      <Route exact path="State" element={<State />} />
      <Route exact path="Hooks" element={<Hooks />} />
      <Route exact path="Admin" element={<Admin />} />
      <Route exact path="Book" element={<Book />} />
      <Route exact path="/mahasiswa" element={<Mahasiswa />} />
      <Route exact path="databuku" element={<Databuku />} />
      <Route exact path="akses" element={<Akses />} />
      {/* <Route exact path="login" element={<AddBook />} /> */}
      <Route exact path="/daftar" element={<RegisterForm/>} />
      <Route exact path="login" element={<LoginForm />} /> 
      <Route exact path="admin" element={<Admin />} /> 
      <Route exact path="login/mahasiswa" element={<AddMahasiswa />} />
              {/* ROUTE KHUSUS KOMPONEN CUDBOOK */}
      {/* <Route path="login/admin" element={<AddBook />} /> */}
      <Route path="login/admin" element={<ProtectedAdmin />} />
      <Route path="/user" element={<User />} />
    
    
    
     </Routes>
     </>
    </BrowserRouter>

      
       {/* <Header /> */}
      {/* <Navbar /> */}
       {/* <ButtonProps/> 
        <Profile /> */}
      {/* <Sidebar />  */}
      {/* <Datadiri /> */}
       {/* <Detailimage /> */}
       {/* <Carddiri /> */}
       {/* <Abstraksi /> */}
       {/* <LulusUjian/> */}
       {/* <LevelSeblak/> */}
       {/* <RenderingList/>  */}
         {/* <MedicineList/> */}
   
      
    </div>
  );
}
// export default Home;
