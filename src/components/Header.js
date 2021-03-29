import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import './Header.css';

function Header() {
    return (
        <div className="bg-img container">
    <header>
    
        <div className="front-text">  
            <h1 
                data-aos="fade-right"
                data-aos-delay="250">
                    Blueweb surfer
                    </h1>
            <h1
             data-aos="fade-right"
             data-aos-delay="300">
                 specialized in</h1> 
            <h1 data-aos="fade-right"
                data-aos-delay="350">
                    customize websites.</h1>
        </div>
    </header>
</div>
    )
}

export default Header
