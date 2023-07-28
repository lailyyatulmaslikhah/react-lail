import React from 'react';


//Aray data Buku
const books = [
    { id: 1, jdlbuku: "Expressjs.1", ISBN: 111},
    { id: 2, jdlbuku: "Expressjs.2", ISBN: 222},
    { id: 3, jdlbuku: "Expressjs.3", ISBN: 333},
];

export default function RenderingList(){
    //Petakan data buku ke dalam array baru JSX, listBook
    const listBook = books.map((buku) => (
    <ul>
        <li>
            {/* Tampilkan data buku sesuai dengan field */}
            ID={buku.id} Judul Buku={buku.jdlbuku} ISBN={buku.ISBN}
        </li>
    </ul>
    ));

    //Tampilkan data listBook dari Component
    return<ul>
        {listBook}
    </ul>
}