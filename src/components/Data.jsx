import { memo, useState } from 'react';
import React from 'react';


const Data = memo(function Data({ onSubmit }) {
  const [count, setCount] = useState(1);

  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const orderDetails = {
      ...Object.fromEntries(formData),
      count
    };
    onSubmit(orderDetails);
  }

  return (
    <div className="bio">
    <form onSubmit={handleSubmit}>
      Input Data Keluarga Berencana 
      <br />
      <br />
      <label>
        Nama Kepala Keluarga:
        <input name="nama" />
      </label>
      <br />
      <br />
      <label>
        Alamat:
        <input name="alamat" />
      </label>
      <br />
      <br />
      <label>
        Jumlah Anggota Keluarga:  
        <button type="button" onClick={() => setCount(count - 1)}>–</button>
        {count}
        <button type="button" onClick={() => setCount(count + 1)}>+</button>
      </label>
      <br />
      <br />
      <button type="submit" className='App-link'>Submit</button>
    </form>
    </div>
  );
});

export default Data;