import React from 'react';



// <h1>Daftar Level Seblak</h1>
//Aray data Medicine
const medicine = [
    { id: 1, namaobat: "Amoxcilin", harga: 50000},
    { id: 2, namaobat: "Paracetamol", harga: 100000},
    { id: 3, namaobat: "Super Tetra", harga: 50000},
];

export default function MedicineList(){
    //Petakan data obat ke dalam array baru JSX, listMedicine
    const listMedicine = medicine.map((obat) => (
    <ul>
        <li>
            {/* Tampilkan data obat sesuai dengan field */}
            ID={obat.id} Nama Obat={obat.namaobat} harga={obat.harga}
        </li>
    </ul>
    ));

    //Tampilkan data listMedicine dari Component
    return<ul>
        {listMedicine}
    </ul>
}