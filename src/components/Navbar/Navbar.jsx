import { useRef, useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsBank2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <BsBank2 className='App-logo' />
            <nav ref={navRef} className={isOpen ? 'responsive_nav' : ''}>
            <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
                <button className='nav-close-btn' onClick={toggleNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={toggleNavbar}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
        </header>
    );
}

export default Navbar;
