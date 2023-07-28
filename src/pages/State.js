//panggil component profile yang sudah kita buat difolder components
import Likestate from "../components/Likestate";
import Counterusestate from "../components/Counterusestate";
import React from 'react';



export default function State() {
    return (
        <>
        <header>
                    <h5>1. USE STATE</h5>
                    <center><h2>LIKE DAN DISLIKE</h2></center>
      </header>
                <hr />
                <Likestate />
                <hr />
                <header>
                    <h5>2. USE STATE MATERI</h5>
                    <center><h2>COUNTER</h2></center>
      </header>
                <hr /><center>
                <Counterusestate />
                <hr /></center>
        
       
        </>
    );
}