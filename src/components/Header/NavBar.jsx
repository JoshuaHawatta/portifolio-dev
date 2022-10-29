import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HamburgerDiv, NavBar } from './Styles';
import { FaHome, FaCode, FaFile, FaPaperPlane } from 'react-icons/fa';

const NAVBAR_JSX = () => {
    const [openMenu, setOpenMenu] = useState(true);

    return (
        <>
            <HamburgerDiv opened={ openMenu } onClick={ () => setOpenMenu(state => !state) }>
                <div/>
                <div/>
            </HamburgerDiv>
            
            <NavBar showNavBar={ openMenu }>
                <Link to='/'><FaHome /></Link>
                <Link to='/works'><FaCode /></Link>
                <Link to='/resume'><FaFile /></Link>
                <Link to='/contact'><FaPaperPlane /></Link>
            </NavBar>
        </>
    )
}

export default NAVBAR_JSX