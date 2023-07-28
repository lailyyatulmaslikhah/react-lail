import React, { useState, useEffect} from "react";

function DataFetching() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/book');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setData(data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            fetchData();
        }, []);

        return (
            <div>
                {data.map(item => (
                    <p key={item.ISBN}>{item.ISBN}, {item.jdlbuku}, {item.deskripsi} </p>
                ))}
            </div>
        );
    }
    export default DataFetching;