//panggil component profile yang sudah kita buat difolder components
import LevelSeblak from "../components/LevelSeblak";
import MedicineList from "../components/MedicineList";
import Abstraksi from "../components/Abstraksi";
import Buah from "../components/Buah";
import React from 'react';


export default function Tugprak2() {
    return (
        <>
        <LevelSeblak />
        <h2>Tugas Rendering List</h2>
        <MedicineList />
        <Abstraksi />
        <Buah />
        </>
    );
}