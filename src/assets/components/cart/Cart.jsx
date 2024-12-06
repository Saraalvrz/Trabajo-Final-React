import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Cargar productos del carrito desde localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  // Guardar productos en localStorage
  const saveCartToLocalStorage = (items) => {
    localStorage.setItem('cart', JSON.stringify(items));
  };

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.title === product.title);

    let updatedCart;

    if (existingProduct) {
      updatedCart = cartItems.map(item => 
        item.title === product.title
          ? { ...item, quantity: item.quantity + 1 } // Incrementar la cantidad
          : item
      );
    } else {
      updatedCart = [...cartItems, { ...product, quantity: 1 }];
    }

    setCartItems(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  // Función para aumentar la cantidad de un producto
  const increaseQuantity = (productId) => {
    const updatedCart = cartItems.map(item => 
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 } // Aumentar la cantidad
        : item
    );
    setCartItems(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  // Función para disminuir la cantidad de un producto
  const decreaseQuantity = (productId) => {
    const updatedCart = cartItems.map(item => 
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 } // Disminuir la cantidad, pero no menos de 1
        : item
    );
    setCartItems(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  // Función para limpiar el carrito
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
  };

  // Calcular el precio total
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Carrito de compras</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.title} width="50" />
              <div>{item.title}</div>
              <div>{item.price} USD</div>
              
              {/* Botones para aumentar o disminuir cantidad */}
              <div>
                <button className="btn btn-light" onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button className="btn btn-light" onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              
              <div>{item.price * item.quantity} USD</div>
              <button className="btn btn-dark" onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          ))}

          <h3>Total: {totalPrice} USD</h3>
          <button className="btn btn-dark" onClick={clearCart}>Limpiar carrito</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
