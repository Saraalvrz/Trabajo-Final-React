import React from 'react';

const ApiComponent = async () => {
    console.log('Haciendo la solicitud a la API'); // Agrega esta línea
    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        if (!response.ok) {
            throw new Error(`Error al obtener productos: ${response.status}`);
        }
        const data = await response.json();
        console.log(data); // Verifica la respuesta de la API
        return data; 
    } catch (error) {
        console.error('Error al obtener productos:', error);
        return []; 
    }
};

export default ApiComponent;
