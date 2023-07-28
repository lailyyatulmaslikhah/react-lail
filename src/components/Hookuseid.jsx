import { useId } from 'react';
import React from 'react';



function PasswordField() {
    const passwordHintId = useId();
    console.log('Generated identifier:', passwordHintId)
    return(
        <>
        <div className="bio">
        <label>
            Nama Lengkap:  
            <input
                type="text"
                aria-describedby={passwordHintId}
            />
        </label>
        <br />
        <br />
        <label>
            Username: 
            <input
                type="username"
                aria-describedby={passwordHintId}
            />
        </label>
        <br />
        <br />
        <label>
            Password:  
            <input
                type="password"
                aria-describedby={passwordHintId}
            />
        </label>
        <br />
        <br />
        <label>
            Email: 
            <input
                type="email"
                aria-describedby={passwordHintId}
            />
        </label>
        <br />
        <br />
        <label>
            <input 
                Submit
                type="submit" 
                className="App-link"
            />
        </label>
        </div>
    </>
    );
}

export default function Hookuseid() {
    return(
        <>
            <h2 className="text">Registrasi</h2>
            <PasswordField />
        </>
    );
}
