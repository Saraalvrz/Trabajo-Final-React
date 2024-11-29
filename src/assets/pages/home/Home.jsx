import React, { useState, useEffect } from 'react';
import Footer from '../../layouts/footer';
import ApiComponent from '../../components/Api'

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const data = await ApiComponent();
            setProducts(data);
        };
        loadProducts();
    }, []);

    return (
        <div>
            <main>
                <h1>Bienvenido a Maxfit</h1>
                <div>
                    <h2>Productos Destacados</h2>
                    {products.map((product) => (
                        <div key={product.id}>
                            <img src={product.images[0]} alt={product.title} />
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <p>{product.price} USD</p>
                        </div>
                    ))}
                </div>
            </main>


            <Footer />
        </div>
    )
}

export default Home;    