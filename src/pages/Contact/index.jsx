import { FaGithub, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa'

//COMPONENTS
import CTA_BUTTON_JSX from '../../components/CtaButton'
import CARD_JSX from '../../components/Card'

//STYLES
import { ArticleWrapper, ConctatsWrapper } from './Styles'

const ContactPage = () => (
	<ArticleWrapper id='contact-article'>
		<CARD_JSX>
			<h1>Me dê um oi no...</h1>

			<ConctatsWrapper>
				<a href='https://github.com/JoshuaHawatta' target='_blank'>
					<CTA_BUTTON_JSX icon={<FaGithub />} text='GitHub' color='000000' btnWidth='100%' />
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
			</ConctatsWrapper>
		</CARD_JSX>
	</ArticleWrapper>
)

export default ContactPage
