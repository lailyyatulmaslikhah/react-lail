import React, { useState } from "react";

const EditMahasiswa = ({ mahasiswa, updateMahasiswa }) => {
    const [editMahasiswa, setEditMahasiswa] = useState(mahasiswa);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditMahasiswa((prevMahasiswa) => ({
            ...prevMahasiswa,
            [name]: value,
        }));
    };

    const handleUpdateClick = () => {
        updateMahasiswa(mahasiswa._id, editMahasiswa);
    };

    return (
        <div>
            <center><h3>EDIT MAHASISWA</h3></center>
            <center><label className="typetext">
                <span>Nama :</span>
            <input 
           type="text"
            class="form_input"
           name="nama"
           value={editMahasiswa.nama}
           onChange={handleInputChange}
           />
            </label></center>
            
            <center><label className="typetext">
                <span>NIM : </span>
           
            <input 
           type="text"
            class="form_input"
           name="nim"
           value={editMahasiswa.nim}
           onChange={handleInputChange}
           />
            </label></center>

            <center><label className="typetext">
                <span>Prodi :</span>
            <input 
           type="text"
            class="form_input"
           name="prodi"
           value={editMahasiswa.prodi}
           onChange={handleInputChange}
           />
            </label></center>

            <center><label className="typetext">
                <span>Angkatan :</span>
           
            <input 
           type="text"
            class="form_input"
           name="angkatan"
           value={editMahasiswa.angkatan}
           onChange={handleInputChange}
           />
            </label></center>

            <center><label className="typetext">
                <span>Foto</span>
           
            <input 
           type="file"
            class="form_input"
           name="foto"
           value={editMahasiswa.foto}
           onChange={handleInputChange}
           />
            </label></center>

            

          

 
             
            {/* <center><h3>EDIT BUKU</h3></center>
            <label><center>
                Judul Buku : 
                <input
                type="text"
                class="form_input"
                name="jdlbuku"
                value={editedBook.jdlbuku}
                onChange={handleInputChange}
                />
           </center></label>
            <label><center>
                ISBN : 
                <input 
                type="text"
                class="form_input"
                name="ISBN"
                value={editedBook.ISBN}
                onChange={handleInputChange}
                />
           </center></label>
            <label><center>
                Deskripsi : 
                <input
                type="text"
                class="form_input"
                name="deskripsi"
                value={editedBook.deskripsi}
                onChange={handleInputChange}
                />
            </center></label>

            <label><center>
                Pengarang : 
                <input 
                type="text"
                class="form_input"
                name="pengarang"
                value={editedBook.pengarang}
                onChange={handleInputChange}
                />
            </center></label>
            <label><center>
                Penerbit : 
                <input
                type="text"
                class="form_input"
                name="penerbit"
                value={editedBook.penerbit}
                onChange={handleInputChange}
                />
            </center></label> */}

            {/* <center><button onclick={handleUpdateClick}><input type="button" class="btn-update"></input>UPDATE</button></center> */}
            <center><button className="typesubmit" type="button" class="btn-update" onClick={handleUpdateClick}>UPDATE</button></center>
        </div>
        
    );
};

export default EditMahasiswa;