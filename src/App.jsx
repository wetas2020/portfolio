import { useState } from 'react';
import './index.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Main from './components/main/Main';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div id="up" className="container">
            <Header />
            {/* <div className="devider"></div> */}
            <Hero />
            <div className="devider"></div>
            <Main />
            <div className="devider"></div>
            <Contact />
            <div className="devider"></div>
            <Footer />
            <a href="#up">
                <button className="icon-keyboard_arrow_up scrollToTop"></button>
            </a>
        </div>
    );
}

export default App;
