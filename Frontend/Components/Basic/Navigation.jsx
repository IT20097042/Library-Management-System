import React from 'react';
import {Link} from "react-router-dom";
import {FaFileSignature} from 'react-icons/fa'
import {ImDisplay} from 'react-icons/im'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Navigation(props) {

    return (
        <>
            <nav className='navbar navbar-expand-lg bg-light rounded'>
            <div className= 'container-fluid'>
                                    <Link  to='/'> <h1 className="navbar-brand ">Library App </h1></Link>
                                </div>

                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to='/insertBook' className="nav-link">
                                            <h3><FaFileSignature color="black"/> Insert Book </h3>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to='/insertAuthor' className="nav-link">
                                            <h3><FaFileSignature color="black"/> Insert Author </h3>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/viewBook' className="nav-link">
                                            <h3><ImDisplay color="black"/> Books </h3>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/viewAuthor' className="nav-link">
                                            <h3><ImDisplay color="black"/> Authors </h3>
                                        </Link>
                                    </li>
                                </ul>
                    </nav>
        </>

    );
}

export default Navigation;