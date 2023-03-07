import bbcLogo from '../../assets/images/bbc-logo.png'
import SGTechLogo from '../../assets/images/sg-tech.png'
import joshuaHawattaLogo from '../../assets/images/Favicon.png'
import tangerineLogo from '../../assets/images/tangerine-logo.png'

const jobsList = [
	{
		id: 1,
		company: 'BB Consórcios',
		role: 'Estagiário Full Stack',
		img: bbcLogo,
		stacks: ['Java', 'Spring MVC', 'React', 'Prime Faces', 'PostgreSQL'],
		description:
			'Tive o privilégio de ir para uma empresa de renome e aprender um monte de coisa bacana. A melhor foi estar em equipe e aprender o passo-a-passo de um projeto grande.',
	},
	{
		id: 2,
		company: 'SG Tech Info',
		role: 'API de agendamentos',
		img: SGTechLogo,
		stacks: ['Express.js', 'TypeScript', 'MongoDB', 'JWT'],
		description:
			'Uma simples API para agendar atendimentos e envio de e-mails do andamento do serviço.',
	},
	{
		id: 3,
		company: 'Tangerine Inglês',
		role: 'Landing Page',
		img: tangerineLogo,
		stacks: ['React', 'Styled Components'],
		description:
			'Meu primeiro freelancer foi para a escola Tangerine Inglês. O dono já tinha toda a identidade visual pronta, então foi meu projeto mais divertido!',
	},
	{
		id: 4,
		company: 'Joshua Hawatta',
		role: 'Portifólio',
		img: joshuaHawattaLogo,
		stacks: ['React', 'Styled Components', 'Vite'],
		description: 'E chegamos ao site que nos encontramos! Seja bem-vindo(a)!',
	},
]

export default jobsList
