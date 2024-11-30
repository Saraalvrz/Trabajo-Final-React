import React, { useState, useEffect } from 'react';
import Footer from '../../layouts/footer';
import ApiComponent from '../../components/Api'
import '../products/style.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isExpanded, setIsExpanded] = useState([]);

  const toggleDescription = (productId) => {
    setIsExpanded(isExpanded === productId ? null : productId);
  }

  useEffect(() => {
    const loadProducts = async () => {
      const data = await ApiComponent();
      setProducts(data);
    };
    loadProducts();
  }, []);



  return (
    <>
      <div>
        <h2 className=''>Productos Disponibles</h2>
        <div className='column mt-5'>
          {products.map((product) => (
            <div className='card d-flex' key={product.id}>
              <img className='card-img-top img-prod' src={product.images[0]} alt={product.title} />
              <div className="card-body">
                <h2 className='card-title fs-4'>{product.title}</h2>
                <p>{product.price} USD</p>
                <p className="card-text">
                  {isExpanded === product.id ? product.description : `${product.description.slice(0, 100)}...`}
                  <a className='' onClick={() => toggleDescription(product.id)}>
                  {isExpanded === product.id ? "Ver menos" : "Ver más"}
                </a>
                </p>
                <p>{product.category.name}</p>
                <button className='btn btn-dark'>Añadir al carrito</button>
              </div>

            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}


export default Products;