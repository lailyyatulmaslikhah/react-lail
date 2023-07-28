function Avatar({ person, size}){
    return(
        // <img 
        // className="image"
        // src="https://i.imgur.com/1bX5QH6.jpg"
        // alt="Anti Lanying"
        // width={100}
        // height={100}
        // />

        //Membaca data props (person dan size) dari Avatar
        <>
        Name: {person.name}
        <p>ID: {person.imageId}</p>
        Ukuran: {size}
        </> 
    );
}

export default function Datadiri(){
    return (
       <Avatar person={{ name: "Lin Lanying", imageId: "P5017Y"}} size={100} />
    );
        }
