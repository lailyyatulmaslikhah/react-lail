import React from 'react';


function Mahasiswa({nama, lulus}){
    if (lulus){
        //Menggunakan Conditional (tenary) operator (? :)
        // return(
        //     <li className="Mahasiswa">{nama} <strong>LULUS</strong>
        //     </li>

         //LOGIKA AND
        return(
            <li className="Mahasiswa">
                {nama} {lulus && "LULUS"}
            </li>
        );
    }
    //IF ELSE
    // return(
    //     <li className="Mahasiswa">
    //         {nama} <strong>Tidak LULUS</strong>
    //     </li>
    // );
  
}
export default function Lulusujian(){
    return(
        <section>
            <h1>Daftar Nama Mahasiswa</h1>
            <ul>
                <Mahasiswa lulus={true} nama="Sony Panca B"/>
                <Mahasiswa lulus={true} nama="Danu Aji"/>
                <Mahasiswa lulus={false} nama="Brekele"/>
                <Mahasiswa lulus={false} nama="Donal"/>
            </ul>
        </section>
    );
}