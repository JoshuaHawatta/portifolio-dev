import { ArticleWrapper, Line, Conctats } from './Styles';
import CTA_BUTTON_JSX from '../../components/CtaButton';
import { FaGithub, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import EMAIL_FORM_JSX from './EmailForm';

const ContactPage = () => (
    <ArticleWrapper id='contact-article'>
        <Conctats>
            <h4>Redes Sociais</h4>

            <div>
                <a href='https://github.com/JoshuaHawatta' target='_blank'>
                    <CTA_BUTTON_JSX
                        icon={<FaGithub />}
                        text='GitHub'
                        color='000000'
                        btnWidth='100%'
                    />
                </a>

                <a href='https://wa.me/5561998784278' target='_blank'>
                    <CTA_BUTTON_JSX
                        icon={<FaWhatsapp />}
                        text='WhatsApp'
                        color='25D366'
                        btnWidth='100%'
                    />
                </a>

                <a href='https://www.instagram.com/joshuahawatta/' target='_blank'>
                    <CTA_BUTTON_JSX
                        icon={<FaInstagram />}
                        text='Instagram'
                        color='833AB4'
                        btnWidth='100%'
                    />
                </a>

                <a href='https://linkedin.com/in/joshua-hawatta' target='_blank'>
                    <CTA_BUTTON_JSX
                        icon={<FaLinkedin />}
                        text='LinkedIn'
                        color='0077b5'
                        btnWidth='100%'
                    />
                </a>
            </div>
        </Conctats>

        <Line />
        
        <EMAIL_FORM_JSX />
    </ArticleWrapper>
)

export default ContactPage