import { HeaderWrapper, LogoDiv } from './Styles';
import NAVBAR_JSX from './NavBar';
import Logo from '../../assets/images/logo-inteira-sem-fundo.png';

const Header = () => {
    return (
        <HeaderWrapper>
            <LogoDiv>
                <img src={ Logo } alt='logo' />
            </LogoDiv>
            <NAVBAR_JSX />
        </HeaderWrapper>
    )
}

export default Header