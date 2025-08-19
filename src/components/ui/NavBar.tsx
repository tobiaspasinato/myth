import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import searchIcon from '../../assets/search-icon.svg';
// import darkModeIcon from '../../assets/dark-mode.svg';
// import lightModeIcon from '../../assets/light-mode.svg';

export default function NavBar() {

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className='navbar'>
            {/* <img src={logo} alt="Page Koi Logo" className='logo'/> */}
            <h2>Myth</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className='search-box'>
                <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <button type="button" className='search-button' onClick={() => {}}>
                    <img src={searchIcon} alt="Search Icon" className='search-icon'/>
                </button>
            </div>
            {/* <img src={lightModeIcon} alt="Light Mode Icon" className='toggle-icon'/> */}
        </div>
    )
}