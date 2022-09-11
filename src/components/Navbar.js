import {Nav, Container, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faXmark, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import Dropdown from './Dropdown';

import '../styles/navbar.css'

export default function Navbar(){
	const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [color, setColor] = useState(false);
  const [navbar, setNavbar] = useState(false);





  const changeColor = () => {
    if(window.scrollY >= 90){
      setColor(true)
    }else{
      setColor(false)
    }
  }

  window.addEventListener('scroll',changeColor)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
 
  const onMouseEnter = () => {
    if (window.innerWidth < 970) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 970) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const changeBackground = () => {
    if(window.scrollY >= 90){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground); 




  return (
    <>
    
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          my-Logo
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faXmark : faBars}/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <FontAwesomeIcon icon={faCaretDown}/>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/featured'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Featured
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/careers'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Careers
            </Link>
          </li>
           <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          
        </ul>
       
      </nav>
  
    </>
  );
}