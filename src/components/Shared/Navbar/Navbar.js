import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'

const Navbar = () => {
    return (
        <nav className="container navbar navbar-expand-lg navbar-light">
            <Link className='mt-3 ' to='/'><img src={logo} alt=""/></Link>
            <button className="navbar-toggler mt-3 " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse mt-3 " id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-3 text-center" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-3 text-center" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-3 text-center" href="#">All Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-3 text-white text-center" href="#">Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-3 text-white text-center" href="#">Blogs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-3 text-white text-center" href="#">Contact Us</a>
                    </li>
                    <Link to="/login"><button className='button'>Login</button> </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;