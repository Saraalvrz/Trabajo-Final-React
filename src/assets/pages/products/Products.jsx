import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../layouts/footer';
import ApiComponent, { filtrarProductosPorCategoria } from '../../components/Api';
import '../products/style.css';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [expandido, setExpandido] = useState(null);
  const { category } = useParams();

  const alternarDescripcion = (idProducto) => {
    setExpandido(expandido === idProducto ? null : idProducto);
  };

  const nombresCategorias = {
    Shoes: "Electrónicos",
    Clothing: "Ropa",
    Miscellaneous: "Misceláneos",
  };

  const tituloCategoria = nombresCategorias[category] || category;

  const addToCart = (producto) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(producto);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  useEffect(() => {
    const cargarProductos = async () => {
      const datos = await ApiComponent();
      const productosFiltrados = filtrarProductosPorCategoria(datos, category);
      setProductos(productosFiltrados);
    };
    cargarProductos();
  }, [category]);

  return (
    <>
      <div>
        <h2>{category ? `Productos de ${tituloCategoria}` : 'Todos los Productos'}</h2>
        <div className="column mt-5">
          {productos.map((producto) => (
            <div className="card d-flex" key={producto.id}>
              <img className="card-img-top img-prod" src={producto.images[0]} alt={producto.title} />
              <div className="card-body">
                <h2 className="card-title fs-4">{producto.title}</h2>
                <p>{producto.price} USD</p>
                <p className="card-text">
                  {expandido === producto.id ? producto.description : `${producto.description.slice(0, 100)}...`}
                  <a onClick={() => alternarDescripcion(producto.id)}>
                    {expandido === producto.id ? "Ver menos" : "Ver más"}
                  </a>
                </p>
                <button className="btn btn-dark" onClick={() => addToCart(producto)}>
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Productos;
