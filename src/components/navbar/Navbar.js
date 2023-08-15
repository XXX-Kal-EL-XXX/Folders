import React, {useState, useEffect} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'
import '../navbar/Navbar.css'

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
       }

       useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => {
          window.removeEventListener('scroll', changeBackground);
        };
      }, []);
    
    return (
        <div className= {navbar ? 'navbar active' : 'navbar'}>
            <div className='container'>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><a className='navbar__link' href='/'>Home</a></li>
                    <li><a className='navbar__link' href='/'>Product</a></li>
                    <li><a className='navbar__link' href='/'>Contact</a></li>
                    <li><a className='navbar__link' href='/'>About</a></li>
                </ul>
                <h1><span className='change1'><BsFillHouseFill />Folders</span><span className='change2'>World</span></h1>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                
                </div>
            </div>
        </div>
    )
}

export default Navbar
