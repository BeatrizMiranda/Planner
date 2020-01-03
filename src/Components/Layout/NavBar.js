import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="nav-wapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo"> Mario Plan </Link>

            </div>
        </nav>
    )
}

export default Navbar