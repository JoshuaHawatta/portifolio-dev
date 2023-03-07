import { useState, useCallback } from 'react'
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'
import jobsList from './jobsList'
import * as Styled from './Styles'

const WorksPage = () => {
	const [job, setJob] = useState({})
	const [showPopup, setShowPopup] = useState(false)

	const stacks = job?.stacks?.reduce((acc, actualItem) => `${acc}, ${actualItem}`)

	const handleGetJob = useCallback(
		id => {
			setJob(jobsList.filter(job => job.id === id).at(0))
			setShowPopup(true)
		},
		[job]
	)

	const JobPopup = () =>
		showPopup && (
			<Styled.PopupWrapper>
				<Styled.PopupContent>
					<div>
						<button onClick={() => setShowPopup(false)}>
							<AiOutlineClose />
						</button>
					</div>

					<div>
						<h5>{job.company}</h5>
					</div>

					<div>
						<p>{job.description}</p>
					</div>

					<ul>
						<li>Stacks: {stacks}</li>
					</ul>
				</Styled.PopupContent>
			</Styled.PopupWrapper>
		)

	return (
		<Styled.ArticleWrapper id='jobs-article'>
			<JobPopup />
			<h1>
				M<span>e</span>us principais trabalhos
			</h1>

			{/*JOBS_CARDS*/}
			<Styled.ExperiencesSection>
				{jobsList.map(({ id, img, company, role }) => (
					<button onClick={() => handleGetJob(id)} key={id}>
						<Styled.Jobs>
							<span>
								<AiOutlinePlus />
							</span>

							<Styled.JobTitleDiv>
								<img src={img} alt={img.toUpperCase()} />

								<Styled.RoleDiv>
									<h4>{company}</h4>
									<p>{role}</p>
								</Styled.RoleDiv>
							</Styled.JobTitleDiv>
						</Styled.Jobs>
					</button>
				))}
			</Styled.ExperiencesSection>
		</Styled.ArticleWrapper>
	)
}

export default WorksPage
