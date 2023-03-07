import { useState, useCallback } from 'react'
import { ArticleWrapper, HardSkills, Glassmorphisim, SoftSkills, MySelf } from './Styles'

//REACT_ICONS
import * as FAIcons from 'react-icons/fa'
import * as SIIcons from 'react-icons/si'
import { RiUserVoiceFill, RiUserSettingsFill } from 'react-icons/ri'
import { IoLogoSass } from 'react-icons/io'
import { HiUserGroup, HiEmojiHappy } from 'react-icons/hi'

//COMPONENTS
import ICON_WITH_TEXT_JSX from '../../components/IconWithText'
import CTA_BUTTON_JSX from '../../components/CtaButton'

//IMAGES
import laptopImage from '../../assets/images/knowledges.jpg'
import aboutMeImage from '../../assets/images/about-me.jpg'

const ResumePage = () => {
	const [showSection, setShowSection] = useState('hard-skills')
	const [stackType, setStackType] = useState('frontend')

	const handleChangeStack = useCallback(() => {
		stackType === 'frontend' ? setStackType('backend') : setStackType('frontend')
	})

	return (
		<ArticleWrapper>
			<img src={laptopImage} alt='stacks-knowledges' />

			{showSection === 'myself' && (
				<MySelf>
					<Glassmorphisim>
						<div>
							<img src={aboutMeImage} alt='presenting-my-self' />

							<div>
								<p>
									Oi, meu nome é Joshua Hawatta!
									<br />
									Tenho 19 anos e sou Programador Full Stack. Eu crio tanto o banco de
									dados quanto a parte visual de uma aplicação-web.
									<br />
									Meus hobbies envolvem ler, ver filmes de sci-fi e ouvir música boa.
								</p>

								<p>
									Se você tem uma ideia de site, blog, landing page, etc... eu sou o
									cara para isso!
								</p>

								<p>
									Moro em Brasília, mas estou à uma mensagem de distância para qualquer
									que seja a sua demanda!
								</p>
							</div>
						</div>
					</Glassmorphisim>

					<CTA_BUTTON_JSX
						btnWidth='35%'
						outlined={true}
						action={() => setShowSection('hard-skills')}
						text='Hard Skills'
						icon={<FAIcons.FaTools />}
					/>
				</MySelf>
			)}

			{showSection === 'hard-skills' && (
				<HardSkills>
					<Glassmorphisim>
						<CTA_BUTTON_JSX
							btnWidth='20%'
							outlined={true}
							action={handleChangeStack}
							text={stackType === 'frontend' ? 'Back End' : 'Front End'}
							icon={
								stackType === 'frontend' ? <FAIcons.FaDatabase /> : <FAIcons.FaLaptop />
							}
						/>
						<div>
							{stackType === 'frontend' ? (
								<>
									<ICON_WITH_TEXT_JSX
										stackIcon={<SIIcons.SiJavascript color='#F0DB4F' />}
										title='JavaScript'
										percentage={100}
									/>

									<ICON_WITH_TEXT_JSX
										stackIcon={<SIIcons.SiTypescript color='#3178c6' />}
										title='TypeScript'
										percentage={100}
									/>

									<ICON_WITH_TEXT_JSX
										stackIcon={<SIIcons.SiReact color='#61DBFB' />}
										title='React'
										percentage={95}
									/>

									<ICON_WITH_TEXT_JSX
										stackIcon={<SIIcons.SiHtml5 color='#e34c26' />}
										title='HTML'
										percentage={100}
									/>

									<ICON_WITH_TEXT_JSX
										stackIcon={<SIIcons.SiCss3 color='#2965f1' />}
										title='CSS'
										percentage={95}
									/>

									<ICON_WITH_TEXT_JSX
										stackIcon={<IoLogoSass color='#cc6699 ' />}
										title='SCSS'
										percentage={95}
									/>
								</>
							) : (
								<>
									<ICON_WITH_TEXT_JSX
										stackIcon={<SIIcons.SiTypescript color='#3178c6' />}
										title='TypeScript'
										percentage={100}
									/>

									<ICON_WITH_TEXT_JSX
										stackIcon={<SIIcons.SiNodedotjs color='#68AD63' />}
										title='Node.js'
										percentage={100}
									/>

									<ICON_WITH_TEXT_JSX
										stackIcon={<SIIcons.SiExpress color='#9e8cda' />}
										title='Express'
										percentage={100}
									/>

									<ICON_WITH_TEXT_JSX
										stackIcon={<FAIcons.FaJava color='#ED1D25' />}
										title='Java'
										percentage={75}
									/>

									<ICON_WITH_TEXT_JSX
										stackIcon={<SIIcons.SiSpringboot color='#6DB33F' />}
										title='Spring Boot'
										percentage={75}
									/>

									<ICON_WITH_TEXT_JSX
										stackIcon={<SIIcons.SiMongodb color='#4DB33D' />}
										title='MongoDB'
										percentage={90}
									/>

									<ICON_WITH_TEXT_JSX
										stackIcon={<FAIcons.FaDatabase color='#FFFFFF' />}
										title='SQL'
										percentage={85}
									/>

									<ICON_WITH_TEXT_JSX
										stackIcon={<SIIcons.SiSequelize color='#5861A0' />}
										title='Sequelize'
										percentage={85}
									/>
								</>
							)}
						</div>
					</Glassmorphisim>

					<CTA_BUTTON_JSX
						btnWidth='35%'
						outlined={true}
						action={() => setShowSection('soft-skills')}
						text='Soft Skills'
						icon={<FAIcons.FaPen />}
					/>
				</HardSkills>
			)}

			{showSection === 'soft-skills' && (
				<SoftSkills>
					<Glassmorphisim>
						<div>
							<ICON_WITH_TEXT_JSX
								stackIcon={<HiUserGroup color='#C7E87D' />}
								title='Líder'
								percentage={95}
							/>

							<ICON_WITH_TEXT_JSX
								stackIcon={<RiUserSettingsFill color='#FFFFFF' />}
								title='Flexível'
								percentage={100}
							/>

							<ICON_WITH_TEXT_JSX
								stackIcon={<HiEmojiHappy color='#4AAF4F' />}
								title='Positivo'
								percentage={100}
							/>

							<ICON_WITH_TEXT_JSX
								stackIcon={<RiUserVoiceFill color='#4D4BCB' />}
								title='Inglês'
								percentage={100}
							/>

							<ICON_WITH_TEXT_JSX
								stackIcon={<FAIcons.FaRunning color='#F0DB4F' />}
								title='Velocidade'
								percentage={100}
							/>

							<ICON_WITH_TEXT_JSX
								stackIcon={<FAIcons.FaRegClock color='#ED1D25' />}
								title='Foco'
								percentage={100}
							/>
						</div>
					</Glassmorphisim>

					<CTA_BUTTON_JSX
						btnWidth='35%'
						outlined={true}
						action={() => setShowSection('myself')}
						text='Me conheça'
						icon={<FAIcons.FaUserAlt />}
					/>
				</SoftSkills>
			)}
		</ArticleWrapper>
	)
}

export default ResumePage
