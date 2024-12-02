import React, { useState, useEffect } from 'react';
import Footer from '../../layouts/footer';
import ApiComponent from '../../components/Api';
import './Home.css';

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
                <h2>Productos Destacados</h2>
                <div className="products-container">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.images[0]} alt={product.title} />
                            <div className="product-info">
                                <h2 className="product-title">{product.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Home;
