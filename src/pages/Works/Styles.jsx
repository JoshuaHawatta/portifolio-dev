import styled, { keyframes } from 'styled-components'

const showFromUp = keyframes`
    0% {
		transform: translate(-50%, 1rem);
    }
    50% {
		transform: translate(-50%, 3rem);
	}
    100% {
		transform: translate(-50%, 0);
	}
	`

const pop = keyframes`
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.2);
    }
    100% { transform: scale(1); }
`

/*TABLETS*/
// @media (max-width: 1100px) and (orientation: landscape) {
// 	div > div > p {
// 		width: 30rem;
// 	}
// }

export const ArticleWrapper = styled.article`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	text-align: center;
	width: 100%;
	height: 100vh;
	padding: 0 12rem;
	background-color: var(--blue-color);

	/*CHILDREN_ELEMENTS*/
	h1 {
		margin: 10rem 0;
		font: 11rem harry-fat, Helvetica, sans-serif;
		color: var(--green-color);

		/*CHILDREN_ELEMENTS*/
		span {
			color: #ffffff;
		}
	}

	/*MOBILE*/
	@media (max-width: 779px) {
		padding: 0 2rem;
		height: 135vh;

		/*CHILDREN_ELEMENTS*/
		h1 {
			margin: 10rem 0;
			width: 100%;
			font-size: 3.7rem;
		}
	}

	@media (max-width: 1100px) and (orientation: landscape) {
		height: 135vh;
	}
`

export const ExperiencesSection = styled.section`
	width: 80%;
	margin: 0 auto;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	gap: 6rem;

	//CHILDREN_ELEMENTS
	button {
		outline: none;
		background: none;
		border: none;
	}

	/*TABLETS*/
	@media (max-width: 1100px) and (orientation: landscape) {
		width: 100%;
	}
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
	border-radius: 15%;

	/*CHILDREN_ELEMENTS*/
	span {
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

	/*MOBILE*/
	@media (max-width: 779px) {
		padding: none;
		width: 15rem;
		height: 15rem;
		box-shadow: none;
	}
`

export const JobTitleDiv = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	width: 100%;
	gap: 2rem;

	/*CHILDREN_ELEMENTS*/
	img {
		width: 7rem;
		height: 7rem;
	}

	/*MOBILE*/
	@media (max-width: 779px) {
		/*CHILDREN_ELEMENTS*/
		img {
			width: 5rem;
			height: 5rem;
		}
	}
`

export const RoleDiv = styled.div`
	display: flex;
	flex-flow: column wrap;
	align-items: center;
	gap: 1rem;
	width: 100%;

	/*CHILDREN_ELEMENTS*/
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

	/*MOBILE*/
	@media (max-width: 779px) {
		/*CHILDREN_ELEMENTS*/
		p {
			display: none;
		}
	}
`

/*POPUP*/
export const PopupWrapper = styled.div`
	position: fixed;
	width: 50vw;
	max-width: 50vw;
	height: 45.5vh;
	margin: 0 auto;
	top: 0;
	right: 0;
	left: 50vw;
	padding: 1.5rem 2.5rem;
	border-radius: 4rem;
	box-shadow: -4rem 2rem 3rem rgba(0, 0, 0, 0.5);
	animation: ${showFromUp} 0.7s ease forwards;
	background-color: #ffffff;

	/*MOBILE*/
	@media (max-width: 779px) {
		animation: ${pop} 0.4s ease forwards;
		max-width: unset;
		max-height: unset;
		width: 90vw;
		height: 55vh;
		top: 50vw;
		left: 0;
		z-index: 2;
	}
`

export const PopupContent = styled.section`
	display: flex;
	flex-flow: column;
	align-items: flex-start;
	justify-content: space-between;
	text-align: start;
	gap: 2rem;

	/*CHILDREN_ELEMENTS*/
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		outline: none;
		border: none;
		cursor: pointer;
		background: none;
		color: var(--blue-color);
		border-radius: 50%;
		width: 3rem;
		height: 3rem;
		font-size: 2.5rem;
	}

	h5,
	li,
	span,
	p {
		color: var(--blue-color);
	}

	h5 {
		font: 6rem 'harry-fat', Arial, sans-serif;
	}

	p {
		font: 1.7rem 'now-medium', Arial, sans-serif;
		width: 60%;
	}

	ul {
		display: flex;
		list-style: none;
	}

	li {
		font: 1.5rem 'now-medium', Arial, sans-serif;
	}

	/*MOBILE*/
	@media (max-width: 779px) {
		p {
			width: 80%;
		}
	}
`
