import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
        <Link to="/" className="navbtn">Home</Link>
        <Link to="/collection" className="navbtn">Collection</Link>
        <Link to="/cocktails" className="navbtn">Cocktails</Link>
        </nav>
    )
}

export default Navbar;
