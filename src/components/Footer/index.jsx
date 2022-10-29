import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FooterLinksSection, PrivacyPolicyDiv, SocialMediaDiv } from './Styles'

const Footer = () => (
    <FooterLinksSection>
        <PrivacyPolicyDiv>
            <Link to='privacy-policy'>Política de Privacidade</Link>
        </PrivacyPolicyDiv>

        <SocialMediaDiv>
            <a href="https://www.instagram.com/joshuahawatta/" target='_blank'>
                <FaInstagram />
            </a>

            <a href="https://github.com/JoshuaHawatta" target='_blank'>
                <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/joshua-hawatta/" target='_blank'>
                <FaLinkedin />
            </a>
        </SocialMediaDiv>
    </FooterLinksSection>
)

export default Footer