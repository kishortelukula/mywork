import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import 'tooltippy/dist/tooltippy--translucid.min.css'

const Navbar = () => {
    return (

        <><header>
            <a href="#"><img
                src="https://github.com/ecemgo/today-i-learned-app/assets/13468728/4f2923ea-9eca-4221-8b18-7198f78fd04e"
                alt="logo"
                className="logo" /></a>
            <div className="wrap">
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="Search ?" />
                    <button type="submit" className="searchButton">
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>

            <input type="checkbox" id="check" />
            <label htmlFor="check" className="icons">
                <FontAwesomeIcon icon={faBars} id="menu-icon" />
                <FontAwesomeIcon icon={faClose} id="close-icon" />
            </label>

            <nav className="navbar">
               
                <a href="#" className="nav-item tooltippy tooltippy--bottom" data-tooltippy="Hodor... Hodor?? Hodor!"  style={{ '--i': 0 }}>Home</a>        
                <a href="#" className="nav-item" style={{ '--i': 1 }}>Me</a>
                <a href="#" className="nav-item" style={{ '--i': 2 }}>Index</a>
                <a href="#" className="nav-item" style={{ '--i': 3 }}>My Team</a>
                <a href="#" className="nav-item" style={{ '--i': 4 }}>My Finances</a>
                <a href="#" className="nav-item" style={{ '--i': 5 }}>Org</a>
                <a href="#" className="nav-item" style={{ '--i': 6 }}><FontAwesomeIcon icon={faUser}/></a>
            </nav>
        </header>
        <br /><br /><br />
        {/* <section className="content">
                <h1>The North</h1>
                <a href="#" className="btn light"></a>
            </section> */}
            
            </>



    )
}

export default Navbar