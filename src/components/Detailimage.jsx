import { getImageUrl } from "./Image";
import React from 'react';


// //Menampilkan data dari props
function Avatar({ person, size }){
    return(
    <img
    src={getImageUrl(person)}
    alt={person.name}
    width={size}
    height={size}
    />
);
}

export default function Detailimage() {
    return (
        <>
        {/* Memberi nilai props dari file Image.jsx */}
        <Avatar
        size={100}
        person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
        />
        <Avatar
        size={80}
        person={{ name: "Aklilu Lemma", imageId: "OKS67lh" }}
        />
        <Avatar
        size={50}
        person={{ name: "Lin Lanying", imageId: "1bX5QH6" }}
        />
         </>
    //      {/* <Card>
    //   <Avatar
    //     size={100}
    //     person={{ 
    //       name: 'Katsuko Saruhashi',
    //       imageId: 'YfeOqp2'
    //     }}
    //   />
    // </Card>
    //     </>
  
    //     <div>
    //     <Avatar
    //       size={100}
    //       person={{ 
    //         name: 'Katsuko Saruhashi', 
    //         imageId: 'YfeOqp2'
    //       }}
    //     />
    //     <br />
    //     <Avatar
    //       size={80}
    //       person={{
    //         name: 'Aklilu Lemma', 
    //         imageId: 'OKS67lh'
    //       }}
    //     />
    //     <br />
    //     <tr></tr>
    //     <Avatar
    //       size={50}
    //       person={{ 
    //         name: 'Lin Lanying',
    //         imageId: '1bX5QH6'
    //       }}
    //     />
    //   </div> */}
       
    );
}