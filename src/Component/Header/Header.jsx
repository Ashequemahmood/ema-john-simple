import React from 'react';
import '../Header/Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <Link to="/">Shop</Link>
                <Link to="/Inventory">Inventory</Link>
                <Link to="/Orders">Orders</Link>
                <Link to="/Login">Login</Link>
            </nav>
        </div>
    );
};

export default Header;