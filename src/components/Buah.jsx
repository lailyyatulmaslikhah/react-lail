import '../App.css'
import React from 'react';


const Fruit=(props)=>{
    return(
        <>
        <h1>MANFAAT {props.title}</h1>;
<div className="cards">
        <h2>{props.title}</h2>
        <img src={props.imgsrc} alt=""/>
        <p>{props.manfaat}</p>
        <button>{props.btn}</button>
        <hr></hr>
        </div>
       </>
    )
}

//export default Buah;
 export default function Buah(){
        return(
         <>
        <div className="container">
 <Fruit
  title="STAWBERRY"
  imgsrc="https://i.pinimg.com/564x/58/47/4a/58474a451804ea6d37ae05dff8ad60a0.jpg"
 manfaat="Buah Strawberry disebut-sebut dapat menurunkan risiko berbagai penyakit kronis. Buah berwarna ini bermanfaat untuk membantu meningkatkan fungsi serta kesehatan jantung, menurunkan kadar gula darah, serta membantu mencegah penyakit kanker. Anda dapat merasakan khasiat dari buah ini dengan cara mengonsumsi secara langsung atau dijadikan jus." 
  btn="Baca Selengkapnya"
  />
  <Fruit
  title="APEL"
  imgsrc="https://i.pinimg.com/564x/60/c3/dd/60c3dd2d6f24059a1fed2e9ba9ad43d7.jpg"
 manfaat="Apel segar merupakan sumber vitamin C yang baik bagi tubuh. Kulit apel juga memiki manfaat yakni sumber antikoksidan yang singnifikan termasuk quercetin yang dianggal melindungi sel-sel otak. Hal ini dapat membantu mengurangi beberapa faktor resiko kerusakan ginjal.
 .Apel bisa di konsumsi dengan rutin dengan cara mengkonsumsinya langsung, ditambahkan ke salad, atau di jadikan jus." 
   btn="Baca Selengkapnya" 
   />
   <Fruit
  title="DELIMA"
  imgsrc="https://i.pinimg.com/564x/2b/cd/83/2bcd8344840bef1a062e7a129fb6d265.jpg"
 manfaat=" Delima adalah buah yang bernutrisi tinggi. Delima mengandung sekitar 83 kalori per 100 gram, sedikit lebih banyak daripada apel. Buah ini pun tidak mengandung kolesterol atau lemak jenuh sehingga baik untuk mencegah penyakit jantung.

  Delima juga merupakan sumber serat makanan larut dan tidak larut yang baik dengan kandungan sekitar 4 gram per 100 gram. Serat makanan membantu kelancaran pencernaan dan buang air besar." 
    btn="Baca Selengkapnya" />  
        </div>
        </>
        );
}