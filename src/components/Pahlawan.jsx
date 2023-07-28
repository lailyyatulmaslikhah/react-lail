import '../App.css'
import React from 'react';


const Hero=(props)=>{
    return(
        <>
<div className="cards">
        <h2>{props.title}</h2>
        <img src={props.imgsrc} alt=""/>
        <p>{props.biografi}</p>
        <button>{props.btn}</button>
        <hr></hr>
        </div>
       </>
    )
}

// export default Pahlawan;
export default function Pahlawan(){
    return(
        <>
        <div className="container">
<Hero
      title="Ki Hadjar Dewantara"
      imgsrc="https://i.pinimg.com/564x/4d/75/02/4d7502ac39b1844654869c89fd5ad71d.jpg"
      biografi="Ki Hajar Dewantara dilahirkan pada hari kamis legi, 2 Ramadhan 1309 H atau bertepatan dengan tanggal 2 Mei 1889. Karena keluarga besar beliau merupakan keturunan pangeran Kadipaten Puro Pakualaman yang notabenenya adalah seorang ningrat, maka nama lengkapnya menjadi Raden Mas Soewardi Soejaningrat" 
      btn="Baca Selanjutnya"
      />
      <Hero
      title="Soekarno"
      imgsrc="https://i.pinimg.com/564x/db/0b/22/db0b22e2ade2fe2648e67dbd6cfbf5d2.jpg"
      biografi="Ir. Soekarno adalah presiden pertama Republik Indonesia, sekaligus tokoh proklamator negara ini. Soekarno akrab dipanggil dengan julukan Bung Karno. Bung Karno juga dikenal sebagai Putra Sang Fajar karena lahir saat fajar menyingsing." 
      btn="Baca Selanjutnya" 
      />
      <Hero
       title="B.J. Habibie"
       imgsrc="https://i.pinimg.com/564x/57/a2/a1/57a2a1288400fd41f037b40540abdbd7.jpg"
       biografi=" BJ Habibie belajar menguasai teknologi dan menjadi ahli pesawat terbang yang pertama kali menciptakan pesawat terbang di Indonesia. Jadi tidak heran jika ia dijuluki sebagai bapak teknologinya Indonesia karena karyanya yang luar biasa." 
       btn="Baca Selanjutnya" />
              </div>
       </>
       );
}