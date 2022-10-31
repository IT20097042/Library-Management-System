import React from 'react';
import {Link} from "react-router-dom";
import {FaFileSignature} from 'react-icons/fa'
import {ImUser} from 'react-icons/im'
import {GrDocumentUser} from 'react-icons/gr'
import {MdOutlineMenuBook, MdLocalLibrary} from 'react-icons/md'
import {BsBookFill} from 'react-icons/bs'




function Navigation(props) {

    return (
        <>
            <nav className='navbar navbar-expand-lg bg-light rounded'>
            <div className= 'container-fluid'>
                                    <Link  to='/'> <h1 className="navbar-brand "><MdLocalLibrary color="blue"/>Library App </h1></Link>
                                </div>

                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to='/insertBook' className="nav-link">
                                            <h4><MdOutlineMenuBook color="black"/> Insert Book </h4>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to='/insertAuthor' className="nav-link">
                                            <h4><GrDocumentUser color="black"/> Insert Author </h4>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/viewBook' className="nav-link">
                                            <h4><BsBookFill color="black"/> Books </h4>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/viewAuthor' className="nav-link">
                                            <h4><ImUser color="black"/> Authors </h4>
                                        </Link>
                                    </li>
                                </ul>
                    </nav>
        </>

    );
}

export default Navigation;