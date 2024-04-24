import React, { useState, useEffect } from 'react';
import './NavBar.css';

export default function NavBar() {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // console.log("Scrolling...");
            if (window.scrollY > 50) {
                // console.log("Adding affix class");
                document.querySelector('.nav').classList.add('affix');
            } else {
                // console.log("Removing affix class");
                document.querySelector('.nav').classList.remove('affix');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className={`nav ${isActive ? 'active' : ''}`}>
            <div className="container">
                <div className="logo">
                    <a href="#">Your Logo</a>
                </div>
                <div className={`main_list ${isActive ? 'show_list' : ''}`}>
                    <ul className="navlinks">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <span className={`navTrigger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
            </div>
        </nav>
    );
}
