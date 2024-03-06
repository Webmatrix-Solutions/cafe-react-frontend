import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
    const [collapseOpen, setCollapseOpen] = useState(false);

    const handleToggle = () => {
        setCollapseOpen(!collapseOpen);
    };
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid" style={{ background: 'white !important' }}>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded={collapseOpen ? 'true' : 'false'} aria-label="Toggle navigation" onClick={handleToggle}>
                    <span className="navbar-toggler-icon"></span>
                </button>

            </div>
            <Collapse in={collapseOpen} className='d-lg-none'>
                <div className="fixed-bottom">
                    <div className="bg-dark p-4">
                        <ul>
                            <Link to="/"><li className="list-item">Home</li></Link>
                            <Link to="/about"><li className="list-item">About</li></Link>
                            <li className="list-item">Menu</li>
                            <li className="list-item">Gallery</li>
                            <li className="list-item">Contact</li>
                            <Link to="/book-now">
                                <a className="btn btn-success book-now">
                                    Book Now
                                </a>
                            </Link>
                        </ul>
                    </div>
                </div>
            </Collapse>
            <style jsx>
                {
                    `.list-item {
                        font-family: 'Domine', sans-serif;
                        color: #fff;
                        list-style: none;
                        margin-bottom: 10px
                    }`
                }
            </style>
        </nav>
    );
};

export default MobileMenu;
