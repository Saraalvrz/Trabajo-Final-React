import React from 'react';

const ApiComponent = async () => {
    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        console.log('Api en funcionamiento')
        console.log(data)
        return data; 
    } catch (error) {
        console.error('Error al obtener productos:', error);
        return []; 
    }
};

export const filtrarProductosPorCategoria = (productos, categoria) => {
    if (!categoria) return productos;
    
    const mapaCategorias = {
        'Shoes': 2,
        'Clothing': 1,
        'Miscellaneous': 3
    };

    const idCategoria = mapaCategorias[categoria];
    return productos.filter(producto => producto.category.id === idCategoria);
};

export default ApiComponent;