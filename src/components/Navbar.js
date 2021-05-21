import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import './Button.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
         <nav className="navbar">
             <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Logo <i className="fa fa-facebook"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={ click ? 'fa fa-times' : 'fa fa-bars'}/>
                </div>
                <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
                   <li className='nav-item'>
                      <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                          Home
                      </Link>
                   </li>
                   <li className='nav-item'>
                      <Link to='/shop' className='nav-links' onClick={closeMobileMenu}>
                          Shop
                      </Link>
                   </li>
                   <li className='nav-item'>
                      <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                          Sevices
                      </Link>
                   </li>
                   <li className='nav-item'>
                      <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                          Products
                      </Link>
                   </li>
                   <li className='nav-item'>
                      <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                          Sign Up
                      </Link>
                   </li>
                </ul>
             </div>
         </nav>
        </>
    );
}

export default Navbar;
