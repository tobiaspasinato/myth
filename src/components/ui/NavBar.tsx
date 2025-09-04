// import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import icon from '../../assets/icon.svg';
import icongithub from '../../assets/icon-github.svg';
import iconlinkedin from '../../assets/icon-linkedin.svg';
import iconinstagram from '../../assets/icon-insta.svg';

export default function NavBar() {

    // const [searchTerm, setSearchTerm] = useState('');
    // const [colorMode, setColorMode] = useState('light');

    // function handleSearch(searchTerm : string) {
    //     alert(searchTerm);
    // }

    // function toggleColorMode() {
    //     setColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    // }

    return (
        <div className='navbar'>
            <img src={icon} alt="Myth" className='logo'/>
            <h2>Connect</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            {/* <div className='search-box'>
                <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <button type="button" className='search-button' onClick={() => handleSearch(searchTerm)}>
                    <img src={searchIcon} alt="Search Icon" className='search-icon'/>
                </button>
            </div> */}
            {/* <button type="button" className='toggle-button' onClick={toggleColorMode}>
                <img src={colorMode === 'light' ? darkModeIcon : lightModeIcon} alt="Toggle Color Mode Icon" className='toggle-icon'/>
            </button> */}
            <img src={iconinstagram} alt="Instagram" className='logoSocial'/>
            <img src={iconlinkedin} alt="Linkedin" className='logoSocial'/>
            <img src={icongithub} alt="Github" className='logoSocial'/>
        </div>
    )
}