import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import './Navbar.css';

const Navbar = () => {
    const [isMobile, setIsMobile] = React.useState(false)

    return (
        <nav className='navbar'>
            <h3 className='logo'><Link to='/'>EnableIT</Link></h3>
            
            <ul className= {isMobile ? "nav-links-mobile" : "nav-links" } onClick={() => setIsMobile(false)}>
                <Link to='/users' className='users'><li>Users</li></Link>
                <Link to='/about' className='about'><li>About</li></Link>
                <Link to='/contact' className='contact'><li>Contact</li></Link>
            </ul>

            <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? (
                    <ImCross size={20} />
                ) : (
                    <GiHamburgerMenu size={25} />
                )}
                
            </button>
        </nav>
    )
}

export default Navbar