import React, { useState, useEffect } from "react";
import axios from "axios";
//import "bootstrap/dist/css/bootstrap.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import EditMahasiswi from "./EditMahasiswi";

const Edit = () => {
  const [mahasiswis, setMahasiswis] = useState([]);
  const [formData, setFormData] = useState({
    image: null,
    nama: "",
    nim: "",
    prodi: "",
    angkatan: "",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [editMahasiswi, setEditMahasiswi] = useState("");

  useEffect(() => {
    fetchMahasiswis();
  }, []);

  const fetchMahasiswis = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/mahasiswi");
      setMahasiswis(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, image: file });
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = new FormData();
      data.append("image", formData.image);
      data.append("nama", formData.nama);
      data.append("nim", formData.nim);
      data.append("prodi", formData.prodi);
      data.append("angkatan", formData.angkatan);

      await axios.post("http://localhost:5000/api/mahasiswi", data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      setFormData({ nama: "", nim: "", prodi: "", angkatan: "", image: null });
      setImagePreview(null);
      fetchMahasiswis();
    } catch (error) {
      console.log(error);
    }
  };
  const UpdateMahasiswi = async (id, newMahasiswi) => {
    try {
      await axios.put(`http://localhost:5000/api/mahasiswi/${id}`);
      fetchMahasiswis();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/mahasiswi/${id}`);
      fetchMahasiswis();
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditClick = (mahasiswi) => {
    setEditMahasiswi(mahasiswi);
  };

  const handleBatalEdit = (mahasiswi) => {
    setEditMahasiswi();
  };

  return (
    <div>
      <h2>Mahasiswi List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nama"
          value={formData.nama}
          onChange={handleInputChange}
          placeholder="Nama Mahasiswi"
        />
        <input
          type="text"
          name="nim"
          value={formData.nim}
          onChange={handleInputChange}
          placeholder="nim"
        />
        <input
          type="text"
          name="prodi"
          value={formData.prodi}
          onChange={handleInputChange}
          placeholder="prodi"
        />
          <input
          type="text"
          name="angkatan"
          value={formData.angkatan}
          onChange={handleInputChange}
          placeholder="angkatan"
        />
        <input type="file" name="image" onChange={handleImageChange} />
        {imagePreview && <img src={imagePreview} alt="Product Preview" />}
        <Button type="submit">Add Mahasiswi</Button>
      </form>
      <br />
      <div className="card-container">
        {mahasiswis.map((mahasiswi) => (
          <div className="card" key={mahasiswi._id}>
            <div className="card-content">
              <h4>
                {mahasiswi.image && (
                  <img
                    className="img1"
                    src={`http://localhost:5000/${mahasiswi.image}`}
                    alt=""
                  />
                )}
              </h4>
              <p>Nama Mahasiswi: {mahasiswi.nama}</p>
              <p>NIM: {mahasiswi.nim}</p>
              <p>Prodi: {mahasiswi.prodi}</p>
              <p>Angkatan: {mahasiswi.angkatan}</p>
              <div className="button-group">
                <Button onClick={() => handleEditClick(mahasiswi)}>Edit</Button>
                <Button onClick={() => handleDelete(mahasiswi._id)}>
                  Delete
                </Button>
                <Button onClick={handleBatalEdit}>Batal</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {editMahasiswi && (
          <EditMahasiswi mahasiswi={editMahasiswi} updateMahasiswi={UpdateMahasiswi} />
        )}
      </div>
    </div>
  );
};

export default Edit;
