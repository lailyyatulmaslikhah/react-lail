import React, { useState } from "react";

function RegisterForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userData = { username, password };
        try {
            const response = await fetch("http:localhost:5000/api/user/daftar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });
            const data = await response.json();
            console.log("Data Pendaftaran:", data);
            if (response.ok) {
                console.log("Pendaftaran berhasil");
                setRegistrationSuccess(true);
                setUsername("");
                setPassword("");
            } else {
                console.log("Pendaftaran gagal");
                //Lakukan tindakan jika pendaftaran gagal
            }
        } catch (error) {
            console.error("Error:", error);
                //Tambahkan logika atau tindakan lanjutan jika terjadi kesalahan pendaftaran
        }
        };

        return (
            <form onSubmit={handleSubmit}>
                <h1>Daftar Admin</h1>
                {registrationSuccess && <p>Pendaftaran berhasil</p>}
                <div>
                    <label>Username: </label>
                    <input
                    type="text"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                   />
                </div>
                <div>
                    <label>Password: </label>
                    <input 
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button type="submit">Daftar</button>
            </form>
        );
    }

    function Daftar() {
        return (
            <div>
                <RegisterForm/>
            </div>
        );
    }
export default Daftar;