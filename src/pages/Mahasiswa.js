//panggil component profile yang sudah kita buat difolder components
import AddMahasiswa from "../mahasiswas/AddMahasiswa";
import EditMahasiswa from "../mahasiswas/EditMahasiswa";
import React from 'react';


export default function Mahasiswa() {
    return (
        <>
        <AddMahasiswa />
        <EditMahasiswa />
        </>
    );
}