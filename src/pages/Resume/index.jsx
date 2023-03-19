import { ArticleWrapper, Glassmorphisim } from './Styles'

//REACT_ICONS
import * as SiIcons from 'react-icons/si'
import { FaJava, FaDatabase } from 'react-icons/fa'

//IMAGES
import laptopImage from '../../assets/images/knowledges.jpg'
import aboutMeImage from '../../assets/images/about-me.jpg'

const ResumePage = () => {
	return (
		<ArticleWrapper>
			<img src={laptopImage} alt='stacks-knowledges' />

			<Glassmorphisim>
				<div>
					<img src={aboutMeImage} alt='presenting-my-self' />
					<div>
						<p>
							Oi, meu nome é Joshua Hawatta!
							<br />
							Tenho 19 anos e sou Programador Full Stack. Eu crio tanto o banco de dados
							quanto a parte visual de uma aplicação-web.
							<br />
							Meus hobbies envolvem ler, ver filmes de sci-fi e ouvir música boa.
						</p>

						<p>
							Se você tem uma ideia de site, blog, landing page, etc... eu sou o cara para
							isso!
						</p>

						<p>
							Moro em Brasília, mas estou à uma mensagem de distância para qualquer que
							seja a sua demanda!
						</p>
					</div>
				</div>

				<aside>
					<SiIcons.SiTypescript color='#3178c6' />
					<SiIcons.SiReact color='#61DBFB' />
					<SiIcons.SiHtml5 color='#e34c26' />
					<SiIcons.SiCss3 color='#2965f1' />
					<SiIcons.SiNodedotjs color='#68AD63' />
					<SiIcons.SiExpress color='#9e8cda' />
					<FaJava color='#ED1D25' />
					<SiIcons.SiSpringboot color='#6DB33F' />
					<SiIcons.SiMongodb color='#4DB33D' />
					<FaDatabase color='#FFFFFF' />
				</aside>
			</Glassmorphisim>
		</ArticleWrapper>
	)
}

export default ResumePage
