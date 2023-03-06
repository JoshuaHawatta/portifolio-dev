import { ArticleWrapper, ExperiencesSection } from './Styles'
import JOB_JSX from './Job'

import bbcLogo from '../../assets/images/bbc-logo.png'
import SGTechLogo from '../../assets/images/sg-tech.png'
import joshuaHawattaLogo from '../../assets/images/Favicon.png'
import tangerineLogo from '../../assets/images/tangerine-logo.png'

const WorksPage = () => {
	return (
		<ArticleWrapper>
			<h1>
				M<span>e</span>us principais trabalhos
			</h1>

			<ExperiencesSection>
				<JOB_JSX
					image={bbcLogo}
					company='BB Consórcios'
					role='Estagiário Full-Stack'
					onClick={() => alert('Esta é a BB Consórcios!')}
				/>

				<JOB_JSX
					image={SGTechLogo}
					company='SG Tech Informática'
					role='API de agendamentos'
					onClick={() => alert('Esta é a SG Tech Info!')}
				/>
				<JOB_JSX
					image={tangerineLogo}
					company='Tangerine Inglês'
					role='Landing Page'
					onClick={() => alert('Esta é a Tangerine Inglês!')}
				/>
				<JOB_JSX
					image={joshuaHawattaLogo}
					company='Joshua Hawatta'
					role='Portifólio'
					onClick={() => alert('Este é do Joshua Hawatta!')}
				/>
			</ExperiencesSection>
		</ArticleWrapper>
	)
}

export default WorksPage
