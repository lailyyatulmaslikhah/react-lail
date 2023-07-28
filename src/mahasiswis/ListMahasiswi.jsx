import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import EditMahasiswi from "./EditMahasiswi";

const Edit = ({ data }) => {
  const [mahasiswis, setMahasiswis] = useState(data);
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
    if (data?.length) {
      setMahasiswis(data);
    } else {
      fetchMahasiswis();
    }
  }, [mahasiswis]);

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
      <h2>
        <center> Mahasiswi List </center>
      </h2>
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
              <p>Nama : {mahasiswi.nama}</p>
              <p>Harga: {mahasiswi.nim}</p>
              <p>Deskripsi: {mahasiswi.prodi}</p>
              <p>Angkatan: {mahasiswi.angkatan}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        {editMahasiswi && (
          <EditMahasiswi makhasiswi={editMahasiswi} updateMahasiswi={UpdateMahasiswi} />
        )}
      </div>
    </div>
  );
};

export default Edit;
