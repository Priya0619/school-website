import React from 'react'

import Header from './components/Header';
import Content from './components/Content';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

const App = () => {
    return (
       <>
        <Router>
            <Header/>
            <Routes>
                <Route exact path='/' element={
                    <div>
                        <Content/>
                        <Contact/>
                    </div>
                }/>
                <Route exact path='/contact' element={<Contact/>} />
                <Route exact path='/about' element={<About/>} />
            </Routes>
            <Footer/>
        </Router>
       </>


    )
}

export default App