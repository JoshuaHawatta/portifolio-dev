import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FooterLinksSection } from './Styles'

const Footer = () => (
    <FooterLinksSection>
        <a href="https://www.instagram.com/joshuahawatta/" target='_blank'>
            <FaInstagram />
        </a>

        <a href="https://github.com/JoshuaHawatta" target='_blank'>
            <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/joshua-hawatta/" target='_blank'>
            <FaLinkedin />
        </a>
    </FooterLinksSection>
)

export default Footer