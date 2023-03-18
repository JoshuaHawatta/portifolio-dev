import styled from 'styled-components'

export const StyledPrivacyPolicyArticle = styled.article`
	display: flex;
	flex-flow: column;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	height: 100vh;
	padding: 8rem 12rem;

	/*CHILDREN_ELEMENTS*/
	background-color: var(--blue-color);
	h1,
	h2 {
		font: 5rem 'harry-fat', Arial, sans-serif;
		color: var(--green-color);
		/*CHILDREN_ELEMENTS*/
		span {
			color: #ffffff;
		}
	}

	h1 {
		font-size: 8rem;
		margin-bottom: 5rem;
	}

	p {
		font: 2rem 'now-medium', Arial, sans-serif;
		width: 55%;
		margin-top: 2rem;
		color: #ffffff;
	}

	/*MOBILE*/
	@media (max-width: 500px) {
		padding: 8rem 2rem;

		/*CHILDREN_ELEMENTS*/
		section {
			text-align: start;

			h1 {
				width: 100%;
				font-size: 11vw;
			}

			h2 {
				font-size: 8vw;
			}

			p {
				transform: translateY(5vh);
				font-size: 4.2vw;
				width: 100%;
			}
		}
	}

	@media (max-width: 500px) and (orientation: landscape) {
		padding: 7rem 4rem;
		height: 150vh;

		/*CHILDREN_ELEMENTS*/
		section {
			text-align: start;

			h1 {
				width: 100%;
				font-size: 9vw;
				margin-bottom: 2rem;
			}

			h2 {
				font-size: 5.4vw;
			}

			p {
				transform: translateY(5vh);
				font-size: 3vw;
				width: 100%;
			}
		}
	}

	//TABLET
	@media (min-width: 501px) and (max-width: 1100px) {
		padding: 8rem;
		height: 130vh;

		/*CHILDREN_ELEMENTS*/
		section {
			text-align: start;

			h1 {
				width: 100%;
				font-size: 9vw;
			}

			h2 {
				font-size: 5vw;
			}

			p {
				transform: translateY(5vh);
				font-size: 3.6vw;
				width: 100%;
			}
		}
	}

	@media (min-width: 501px) and (max-width: 1100px) and (orientation: landscape) {
		padding: 7rem 4rem;
		height: 150vh;

		/*CHILDREN_ELEMENTS*/
		section {
			text-align: start;

			h1 {
				width: 100%;
				font-size: 8vw;
				margin-bottom: 2rem;
			}

			h2 {
				font-size: 4.6vw;
			}

			p {
				transform: translateY(5vh);
				font-size: 2.3vw;
				width: 100%;
			}
		}
	}
`
