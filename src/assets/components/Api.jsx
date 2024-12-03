import React from 'react';

const ApiComponent = async () => {
    try {
        const productResponse = await fetch('https://api.escuelajs.co/api/v1/products');
        const userResponse = await fetch('https://api.escuelajs.co/api/v1/users');
        
        const products = await productResponse.json()
        const users = await userResponse.json();

        return { products, users };
    } catch (error) {
        console.error('Error al obtener productos:', error);
        return {products: [], users: []}; 
    }
};


export default ApiComponent;
