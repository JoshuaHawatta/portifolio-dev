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
                <div/>
            </HamburgerDiv>
            
            <NavBar showNavBar={ openMenu }>
                <Link to='/'>
                    <FaHome />
                    Q<span>u</span>em Sou
                </Link>
            
                <Link to='/what-i-did'>
                    <FaCode />
                    T<span>r</span>abalhos
                </Link>

                <Link to='/resume'>
                    <FaFile />
                    C<span>u</span>rrículo
                </Link>

                <Link to='/contact'>
                    <FaPaperPlane />
                    C<span>o</span>ntato
                </Link>
            </NavBar>
        </>
    )
}

export default NAVBAR_JSX