import React, { useState, useEffect } from 'react';

const ApiComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        return response.json(); 
      })
      .then(data => {
        console.log(data)
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message); 
        setLoading(false); 
      });
  }, []); 
  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {data && data.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiComponent;
