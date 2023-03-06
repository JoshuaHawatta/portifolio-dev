import { Jobs, JobTitleDiv, RoleDiv } from './Styles'
import { AiOutlinePlus } from 'react-icons/ai'

const JOB_JSX = ({ image, company, role, onClick }) => (
	<button onClick={onClick}>
		<Jobs>
			<button>
				<AiOutlinePlus />
			</button>

			<JobTitleDiv>
				<img src={image} alt={image.toUpperCase()} />

				<RoleDiv>
					<h4>{company}</h4>
					<p>{role}</p>
				</RoleDiv>
			</JobTitleDiv>
		</Jobs>
	</button>
)

export default JOB_JSX
