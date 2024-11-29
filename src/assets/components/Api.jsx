import React from 'react';

const ApiComponent = async () => {
    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error('Error al obtener productos:', error);
        return []; 
    }
};

export default ApiComponent;
