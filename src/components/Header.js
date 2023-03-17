import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {  faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

const Header = () => {
    return (

            <div className="main-container">
                <div className="container">

                    <h1 className='text-big '>School Name</h1>
                    <div >
                        <p >Location: Kathmandu, Nepal</p>
                        <p > Phone Number: 01-4289766</p>
                    </div>
                </div>
                <nav className="navbar background">
                    <ul className="nav-list">

                        <li>
                            <Link to="/">Home</Link>

                        </li>
                        <li>
                            <Link to="/about">
                                About Us</Link>


                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>

                        </li>
                    </ul>


                    <div className="social-media-icons">
                        <Link to="/" target="_blank"><FontAwesomeIcon icon={faUser} color='white'></FontAwesomeIcon></Link>
                        <Link to="https://facebook.com"> <FontAwesomeIcon icon={faFacebook} color='white'></FontAwesomeIcon></Link>
                        <Link to="https://instagram.com"> <FontAwesomeIcon icon={faInstagram} color='white'></FontAwesomeIcon></Link>
                        <Link to="https://twitter.com"><FontAwesomeIcon icon={faTwitter} color='white'></FontAwesomeIcon></Link>
                    </div>
                </nav>
            </div>
    )
}

export default Header