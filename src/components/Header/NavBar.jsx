import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HamburgerDiv, NavBar } from './Styles';

const NAVBAR_JSX = () => {
    const [openMenu, setOpenMenu] = useState(true);

    return (
        <>
            <HamburgerDiv opened={ openMenu } onClick={ () => setOpenMenu(state => !state) }>
                <div/>
                <div/>
                <div/>
            </HamburgerDiv>

            { openMenu && 
                <NavBar>
                    <Link to='/'>Q<span>u</span>em Sou</Link>
                    <Link to='/what-i-did'>T<span>r</span>abalhos</Link>
                    <Link to='/resume'>C<span>u</span>rrículo</Link>
                    <Link to='/contact'>C<span>o</span>ntato</Link>
                </NavBar>
            }
        </>
    )
}

export default NAVBAR_JSX