import styled from 'styled-components'

export const ArticleWrapper = styled.article`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	text-align: center;
	width: 100%;
	height: 100vh;
	padding: 0 12rem;
	background-color: var(--blue-color);

	//CHILDREN_ELEMENTS
	h1 {
		margin: 10rem 0;
		font: 11rem harry-fat, Helvetica, sans-serif;
		color: var(--green-color);

		//CHILDREN_ELEMENTS
		span {
			color: #ffffff;
		}
	}
`

export const ExperiencesSection = styled.section`
	width: 80%;
	margin: 0 auto;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	gap: 6rem;
`

export const Jobs = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	cursor: pointer;
	background-color: #ffffff;
	box-shadow: -2rem 1rem 3rem rgba(0, 0, 0, 0.3);
	width: 18rem;
	height: 18rem;
	max-height: 20rem;
	padding: 1.5rem;
	border-radius: 0.4rem;

	//CHILDREN_ELEMENTS
	button {
		cursor: inherit;
		display: flex;
		align-items: center;
		justify-content: center;
		outline: none;
		border: none;
		background: none;
		color: var(--blue-color);
		border-radius: 50%;
		width: 3rem;
		height: 3rem;
		font-size: 2rem;
	}
`

export const JobTitleDiv = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	width: 100%;
	gap: 2rem;

	//CHILDREN_ELEMENTS
	img {
		width: 7rem;
		height: 7rem;
	}
`

export const RoleDiv = styled.div`
	display: flex;
	flex-flow: column wrap;
	align-items: center;
	gap: 1rem;
	width: 100%;

	//CHILDREN_ELEMENTS
	h4,
	p {
		color: var(--brighter-blue-color);
	}

	h4 {
		font: 2rem 'harry-fat', Arial, sans-serif;
	}

	p {
		font: 1.3rem 'now-medium', Arial, sans-serif;
	}
`

export const StackList = styled.ul``
