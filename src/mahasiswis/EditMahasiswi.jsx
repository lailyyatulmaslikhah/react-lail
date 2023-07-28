import React, { useState } from "react";
import Upload from "../components/Upload";

const EditMahasiswi = ({ mahasiswi, updateMahasiswi }) => {
  const [editedMahasiswi, setEditedMahasiswi] = useState(mahasiswi);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedMahasiswi((prevMahasiswi) => ({
      ...prevMahasiswi,
      [name]: value,
    }));
  };

  const handleUpdateClick = () => {
    updateMahasiswi(mahasiswi._id, editedMahasiswi);
  };

  return (
    <div>
      <h2>Edit Mahasiswi</h2>
      <label>
        Nama Mahasiswi
        <input
          type="text"
          name="nama"
          value={editedMahasiswi.nama}
          onChange={handleInputChange}
        />
      </label>
      <label>
        NIM
        <input
          type="text"
          name="nim"
          value={editedMahasiswi.nim}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Prodi
        <input
          type="text"
          name="prodi"
          value={editedMahasiswi.prodi}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Angkatan
        <input
          type="text"
          name="angkatan"
          value={editedMahasiswi.angkatan}
          onChange={handleInputChange}
        />
      </label>
      <Upload onChange={handleInputChange} />

      <button className="button1" onClick={handleUpdateClick}>
        Update
      </button>
    </div>
  );
};

export default EditMahasiswi;
