import React, {useEffect, useState} from 'react';

function Datafetchinguseeffect() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/api/book');
            const data = await response.json();
            setData(data);
        };
        fetchData();
    },
    []);

    return (
        <div>
            {data.map(item => (
                 <p key={item.ISBN}>{item.ISBN}, {item.jdlbuku}, {item.deskripsi} </p>
            ))}
        </div>
    );
    }
     export default Datafetchinguseeffect;