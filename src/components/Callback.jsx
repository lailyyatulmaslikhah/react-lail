import { useCallback } from 'react';
import Data from './Data.jsx';
import React from 'react';


export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);

  return (
    <div className={theme}>
      <Data onSubmit={handleSubmit} />
    </div>
  );
}

function post(url, data) {
  console.log('POST /' + url);
  console.log(data);
}