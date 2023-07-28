//import React dan modul untuk 'fetch'
import React, { useState, useEffect } from "react";
import EditMahasiswa from "./EditMahasiswa";
import '../App.css';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { FaSearch, FaSearchLocation } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
//import { useHistory } from "react-router-dom";
// import "../pages/Upload";
// import Upload from "../pages/Upload";

//Buat komponen React dan Definisikan State untuk data yang  kita ambil dari API
 const AddMahasiswa = () => {
    const [mahasiswas, setMahasiswas] = useState([]);
    const [nama, setNama] = useState("");
    const [nim, setNim] = useState("");
    const [prodi, setProdi] = useState("");
    const [angkatan, setAngkatan] = useState("")
    const [foto, setFoto] = useState("");
    // const [fotoPreview, setFotoPreview] = useState(null);
    const [editMahasiswa, setEditMahasiswa] = useState("");
    const [search, setSearch] = useState("");
    //const history = useHistory();
    const [saveFoto, setSaveFoto] = useState(null);

    function handleUploadChange(e) {
        console.log(e.target.files[0]);
        let uploaded = e.target.files[0];
        setFoto(URL.createObjectURL(uploaded));
        setSaveFoto(uploaded);
    }

    function uploadFoto(){
        if(!saveFoto){
            alert('Mohon isi Foto');
        } else {
            //
            let formData = new FormData();
            formData.append("photo", saveFoto);


            fetch('http://localhost:5000/api/mahasiswa', {
                method: 'POST',
                body: formData
            }) .then((res) => res.json()).then(data => {
                if(data.status === 'success'){
                    window.location.href = data.foto;
                }
            })
        }
    }

    //Panggil fungsi 'fetchBooks' menggunakan 'useEffect untuk ambil data saat komponen dimuat
    useEffect(() => {
        fetchMahasiswas();
    }, []);

    //Buat fungsi 'fetchMahasiswas' untuk mengambil data dari API dan perbaharui state
    const fetchMahasiswas = async () => {
        const response = await fetch("http://localhost:5000/api/mahasiswa");
        const data = await response.json();
        setMahasiswas(data);
    };

    //Buat fungsi untuk menambah data baru melalui API 'POST'
    // async function addMahasiswa() {
       
        // const addMahasiswa = async (formdata, endpoint) => {
        //     try {
        //     const response = await fetch("http://localhost:5000/api/mahasiswa", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({ nama, nim, prodi, angkatan, foto}),
        //     });
        //     const data = await response.json();
        //     setMahasiswas([...mahasiswas, data]);
        // };
        async function addMahasiswa() {
            const response = await fetch("http://localhost:5000/api/mahasiswa", {
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                body: JSON.stringify({ nama, nim, prodi, angkatan, foto }),
            });
            const data = await response.json();
            setMahasiswas([...mahasiswas, data]);
        }
    
    

    //Buat fungsi untuk Update data melalui API dengan method 'PUT'
    const updateMahasiswa = async (id, newMahasiswa) => {
        const response = await fetch (`http://localhost:5000/api/mahasiswa/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newMahasiswa),
        });
        const data = await response.json();
        setMahasiswas(mahasiswas.map((mahasiswa) => (mahasiswa._id === id ? { ...data } : mahasiswa)));
    };

    //Buat fungsi untuk menghapus data melalui API dengan method 'Delete'
    const deleteMahasiswa = async (id) => {
        await fetch(`http://localhost:5000/api/mahasiswa/${id}`, {
            method: "DELETE",
        });
        setMahasiswas(mahasiswas.filter((mahasiswa) => mahasiswa._id !== id));
    };

    //Buat fungsi "handle" yang menangani suatu operasi sehingga menghasilkan aksi sesuai kebutuhan
    const handleSubmit = (event) => {
        event.preventDefault();
        addMahasiswa();
        setNama("");
        setNim("");
        setProdi("");
        setAngkatan("");
        setFoto("");

    
    };


    // const onFotoUpload = (event) => {
    //     const file = event.target.files[0];
    //     setFoto(file)
    //     setFotoPreview(URL.createObjectURL(file))
    // }

    const handleEditClick = (mahasiswa) => {
        setEditMahasiswa(mahasiswa);
    };

    const handleBatalEdit = (mahasiswa) => {
        setEditMahasiswa();
    };

    //Tampilkan data dari API ke komponen JSX
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label><center>
                    Nama :
                    <input
                    type="text"
                    class="form_input1"
                    value={nama}
                    onChange={(event) => setNama(event.target.value)}
                    />
                </center></label>
                <br/>

                <label><center>
                    Nim :
                    <input
                    type="text"
                    class="form_input1"
                    value={nim}
                    onChange={(event) => setNim(event.target.value)}
                    />
                </center></label>
                <br />

                <label><center>
                    Prodi :
                    <input
                    type="text"
                    class="form_input1"
                    value={prodi}
                    onChange={(event) => setProdi(event.target.value)}
                    />
                </center></label>
                <br />

                <label><center>
                    Angkatan :
                    <input 
                    type="text"
                    class="form_input1"
                    value={angkatan}
                    onChange={(event) => setAngkatan(event.target.value)}
                    />
                </center></label>
                <br />

              
                  <label><center>
                    Foto :
                    <input 
                    type="file"
                    class="form_input1"
                    multiple
                    onChange={(event) => setFoto(event.target.files)}
                    /> 
                </center></label> 
                
               <br/>
                <center><button type="submit"><input type="button" class="btn-add"></input></button></center>
            </form>
            <br />

            <h3><center>DATA MAHASISWA</center></h3>
            <center><Form>
  <InputGroup className='my-5'>
            <Form.Control 
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search Mahasiswa'
            />
            </InputGroup>
             </Form></center>
             <br></br>
            <table border="1">
                <thead>
                    <tr>
                     <th className="judul" width="10">No</th>
                        <th className="judul" width="120"><center>Nama</center></th>
                        <th className="judul" width="80"><center>NIM</center></th>
                        <th className="judul" width="150"><center>Prodi</center></th>
                        <th className="judul" width="50"><center>Angkatan</center></th>
                        <th className="judul" width="390"><center>Foto</center></th>
                        <th className="judul" colspan="100"><center>Aksi</center></th>
                    </tr>
                </thead>
                <tbody>
                {mahasiswas.filter((mahasiswa) => {
                        return search.toLowerCase() === '' ? mahasiswa : mahasiswa.nama.
                        toLowerCase().includes(search)
                    }).map((mahasiswa, index) =>(
                        <tr key={mahasiswa._id}>
                             <td>{index + 1}</td>
                            <td>{mahasiswa.nama}</td>
                            <td>{mahasiswa.nim}</td>
                            <td>{mahasiswa.prodi}</td>
                            <td>{mahasiswa.angkatan}</td>
                            <td>{mahasiswa.foto}</td>
                            
                            <td><center>
                                <button onClick={() => handleEditClick(mahasiswa)}><input type="button" class="btn-update"></input>UPDATE</button>
                         
                                <button onClick={() => deleteMahasiswa(mahasiswa._id)}><input type="button" class="btn-delete"></input>DELETE</button>
                           
                                <button onClick={() => handleBatalEdit(mahasiswas)}><input type="button" class="btn-cancel"></input>CANCEL</button>
                                </center></td>
                        </tr>
                    ))}
                </tbody>
            </table>
          {/* Komponen EditMahasiswa */}
          <div>
            {editMahasiswa && <EditMahasiswa mahasiswa={editMahasiswa} updateMahasiswa={updateMahasiswa} />}
          </div>
        </div>
    );
 };

 export default AddMahasiswa;