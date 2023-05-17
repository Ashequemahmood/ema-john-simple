import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const cart = useLoaderData();
    
  
    return (
        <div className='shop-container'>
            <div className=''>
                <div>
                    {
                        cart.map(product => <ReviewItem
                            key = {product.id}
                            product={product}
                        ></ReviewItem> )
                    }
                </div>
            </div>
            <div className='order-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;