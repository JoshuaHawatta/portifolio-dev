import { Link } from 'react-router-dom';
import { HeaderWrapper, LogoDiv } from './Styles';
import NAVBAR_JSX from './NavBar';

const Header = () => (
    <HeaderWrapper id='header-wrapper'>
        <LogoDiv>
            <Link to='/'>J<span>o</span></Link>
        </LogoDiv>
        <NAVBAR_JSX />
    </HeaderWrapper>
)

export default Header