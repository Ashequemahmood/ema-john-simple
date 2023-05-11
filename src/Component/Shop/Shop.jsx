import React, { useEffect, useState } from "react";

import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, remove } from "../../utilities/fakedb2";


const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    // console.log(product)
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  const removeFromDb = (product) =>{
    // console.log('product removed', product);
    remove(product.id)
  }

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
            removeFromDb = {removeFromDb}
          ></Product>
        ))}
      </div>
      <div className="order-container">
        <Cart cart = {cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
