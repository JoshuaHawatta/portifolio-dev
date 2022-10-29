import { Link } from 'react-router-dom';
import { HeaderWrapper, LogoDiv } from './Styles';
import NAVBAR_JSX from './NavBar';
import LogoInstagram from '../../assets/images/logo_instagram.png'

const Header = () => (
    <HeaderWrapper>
        <LogoDiv>
            <Link to='/'><img src={ LogoInstagram } alt="my-logo" /></Link>
        </LogoDiv>
        <NAVBAR_JSX />
    </HeaderWrapper>
)

export default Header