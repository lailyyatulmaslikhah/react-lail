import React, { useState } from 'react';

export default function Husestate() {
    const [jumlah, setJumlah] = useState(0);
    return (
        <div><center>
            <p><center>Jumlah Skor : {jumlah} Skor </center></p>
            <button onClick={() => setJumlah(jumlah+1) }> Tambah Skor</button>
            </center></div>
    )
}


