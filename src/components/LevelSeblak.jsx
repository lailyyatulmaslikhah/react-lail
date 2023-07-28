import React from 'react';


function Seblak({level, pedas}){
    if (pedas){
        //Menggunakan Conditional (tenary) operator (? :)
        return(
            <li className="Seblak">{level} <strong>PEDAS</strong>
            </li>

         //LOGIKA AND
    //     return(
    //         <li className="Seblak">
    //             {level} {pedas && "PEDAS"}
    //         </li>
        );
    }
    //IF ELSE
    return(
        <li className="Seblak">
            {level} <strong>Tidak PEDAS</strong>
        </li>
    );
  
}
export default function LevelSeblak(){
    return(
        <section>
            <h1>Daftar Level Seblak</h1>
            <ul>
                <Seblak pedas={true} level="Seblak Siomay"/>
                <Seblak pedas={true} level="Seblak Basreng"/>
                <Seblak pedas={false} level="Seblak Campur"/>
                <Seblak pedas={false} level="Seblak Kerupuk"/>
            </ul>
        </section>
    );
}