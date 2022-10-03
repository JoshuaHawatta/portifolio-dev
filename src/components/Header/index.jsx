import { Link } from 'react-router-dom';
import { HeaderWrapper, LogoDiv } from './Styles';
import NAVBAR_JSX from './NavBar';
import Logo from '../../assets/images/logo-inteira-sem-fundo.png';

const Header = () => {
    return (
        <HeaderWrapper>
            <LogoDiv>
                <Link to='/'>J<span>o</span>shua Hawatta</Link>
            </LogoDiv>
            <NAVBAR_JSX />
        </HeaderWrapper>
    )
}

export default Header