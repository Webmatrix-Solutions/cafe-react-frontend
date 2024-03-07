import React from 'react'
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MobileMenu from './MobileMenu';



function Layout() {
    // State variable to track the visibility of the menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            {/* Header Start */}
            <header className="main-header" id="hero-section">
                <div className="header-sticky">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <a className="navbar-brand" href="index.html">
                                <img src="images/logo.svg" alt="Logo" />
                            </a>
                            <div className="collapse navbar-collapse main-menu">
                                <ul className="navbar-nav mr-auto" id="menu">
                                    <li className="nav-item first-menu">
                                        <Link className="nav-link" to='/'>
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/about'>
                                            About us
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/menu'>
                                            Menu
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/gallery'>
                                            Gallery
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/contact-us'>
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li className="nav-item highlighted-menu">
                                        <a className="btn-default" href="booking.html">
                                            Book Now
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            {/* Main Menu End */}
                            <MobileMenu />
                        </div>
                    </nav>
                </div>
            </header>
            {/* Header End */}
        </>
    )
}

export default Layout