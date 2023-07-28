// import { useEffect, useState } from "react";
// //import React, {useEffect, useState} from "react";
// import axios from 'axios'

// function LifeCycle(){

//     //const[namaLengkap, setNamaLengkap] = useState({nama:'Lail', marga:'Sari'})
//     useEffect{()=>(
//         console.log("Memanggil Use Effect")

//     )

//     }

//     return (
//         <div>
//         <h4><center>Nama : {namaLengkap.nama}</center></h4>
//         <h4><center>Marga : {namaLengkap.marga}</center></h4>
//         </div>
//     )
// }

// export default LifeCycle

import React,  { useState, useEffect } from "react";


export default function Useeffectres () {
    const [resourceType, setResourceType] = useState('post')
    // const [items, setItems] = useState([])

    useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/${resourceType}')
    // .then(response => response.json())
    // .then(json => setItems(json))
    console.log('resource changed')

    return () => {
        console.log('return from resource change')
    }
    }, [resourceType])
    

    return(
        <>
        <div>
            <button onClick={() => setResourceType('posts')}>Posts</button>
            <button onClick={() => setResourceType('users')}>Users</button>
            <button onClick={() => setResourceType('comments')}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
        {/* {items.map(item => {
            return <pre>{JSON.stringify(item)}</pre>
        })} */}
        </>
    )
}