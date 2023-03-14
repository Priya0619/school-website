
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPenToSquare, faCheckSquare, faUser } from "@fortawesome/free-solid-svg-icons";

import React from 'react'

const App = () => {
    return (
        <div className='main-container-wrapper'>

            <div className="main-container">
                <div className="container">

                    <h1 className='text-big '>School Name</h1>
                    <div >
                        <h3 >Location: Kathmandu, Nepal</h3>
                        <h3 > Phone Number: 01-4289766</h3>
                    </div>
                </div>
                <nav className="navbar background">
                    <ul className="nav-list">

                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>

                    
                        <div className="social-media-icons">
                            <a href="#home" target="_blank"><FontAwesomeIcon icon={faUser} color='white'></FontAwesomeIcon></a>
                            <a href="https://facebook.com"> <FontAwesomeIcon icon={faFacebook} color='white'></FontAwesomeIcon></a>
                            <a href="https://instagram.com"> <FontAwesomeIcon icon={faInstagram} color='white'></FontAwesomeIcon></a>
                            <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} color='white'></FontAwesomeIcon></a>
                        </div>
                </nav>

                <div className="firstHalf">
                    <img className='full-width' src="https://thumbs.dreamstime.com/b/high-school-building-26880366.jpg" alt="school" />
                </div>


                <div className="secondHalf">
                    <div className="leftNav-icon">
                        <FontAwesomeIcon icon={faPenToSquare} fontSize='4rem'></FontAwesomeIcon>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reprehenderit facilis perferendis tenetur dolores.  </p>
                    </div>
                    <div className="rightNav-icon">
                        <FontAwesomeIcon icon={faCheckSquare} fontSize='4rem'></FontAwesomeIcon>
                        <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reprehenderit facilis perferendis tenetur dolores. </p>
                    </div>
                </div>
                <section className="section">
                    <div className="thirdHalf">
                        <h2 className='center'>Gallery</h2>
                        <div className="images">
                            <img src="https://www.collinsdictionary.com/images/full/school_309241295.jpg" width='300px' alt="classroom" />
                            <img src="https://www.ctvnews.ca/polopoly_fs/1.4270510.1570292473!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg" width='300px' alt="classroom" />
                            <img src="https://www.schooleducationgateway.eu/files/png6/inclusion_new1.png" width='300px' alt="classroom" />
                        </div>
                    </div>
                </section>

                <section className='contact'>
                    <h2 className="text-big center">Contact Us</h2>

                    <form className="form-div" id="form">
                        <div className="form-item">
                            <label className='input-text' htmlFor="name">Full Name</label>
                            <input className="form-input" type="text" name="fullname" id="fullname" />
                        </div>
                        <div className="form-item"> 
                            <label className='input-text' htmlFor="address">Address </label>
                            <input className="form-input" type="text" name="address" id="address" />
                        </div>
                        <div className="form-item">
                            <label className='input-text' htmlFor="contact">Contact Number</label>
                            <input className="form-input" type="number" name="contact" id="contact" />
                        </div>
                        <div className="form-item">
                            <label className='input-text' htmlFor="email"> Email Address</label>
                            <input className="form-input" type="email" name="email" id="email" />
                        </div>
                        <div className="form-item">
                            <label className='input-text' htmlFor="message"> Message</label>
                            <textarea className="form-input" name="message" id="message"  ></textarea>
                        </div>
                        <div className="form-item">
                            <button className="btn btn-move" type="submit">Submit</button>
                        </div>
                    </form>
                </section>

                <footer className="footer">
                    Copyright &copy; 2023 - All Rights Reserved to Sand Console Pvt. Ltd.

                </footer>
            </div>
        </div>

    )
}

export default App