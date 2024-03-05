import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Habit Tracker
                </Link>
                <button onClick={toggleNavbar} className= 'navbar-toggler' type="button"  >
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div isOpen={isOpen} className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Add New Habit
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/view-weekly">
                                    View Weekly
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
            </div>
        </nav>
    );
};

export default Navbar;