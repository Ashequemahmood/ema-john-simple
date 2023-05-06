import React from 'react';
import '../Header/Header.css';
import logo from '../../images/Logo.svg';


const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/Order">Order</a>
                <a href="/Order Review">Order Review</a>
                <a href="/Inventory">Inventory</a>
                <a href="/Login">Login</a>
            </nav>
        </div>
    );
};

export default Header;