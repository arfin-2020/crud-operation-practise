import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <div className="header">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/products/add">Add Product</Link>
            </nav>
        </div>
        </div>
    );
};

export default Header;