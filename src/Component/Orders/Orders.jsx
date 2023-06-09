import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, remove } from '../../utilities/fakedb2';

const Orders = () => {
    const savedcart = useLoaderData();
    const[cart, setCart]= useState(savedcart);
    const handleRemoveCart = (id) =>{
        const remainning = cart.filter(pd=> pd.id !==id);
        setCart(remainning);
        remove(id);
    }
    
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();

  }  
  
    return (
        <div className='shop-container'>
            <div className=''>
                <div>
                    {
                        cart.map(product => <ReviewItem
                            key = {product.id}
                            product={product}
                            handleRemoveCart = {handleRemoveCart}
                            
                            
                        ></ReviewItem> )
                    }
                </div>
            </div>
            <div className='order-container'>
                <Cart
                 cart={cart}
                 handleClearCart = {handleClearCart}
                 ></Cart>
            </div>
        </div>
    );
};

export default Orders;