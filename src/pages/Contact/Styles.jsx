import styled from 'styled-components'

//CONTAINS_ALL_PAGE_RESPONSIVITY
export const ArticleWrapper = styled.article`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background: var(--blue-color);

	/*CHILDREN_ELEMENTS*/
	h1 {
		font: 4rem 'harry-fat', Arial, sans-serif;
		color: var(--blue-color);
		margin-bottom: 7rem;
	}

	/*MOBILE*/
	@media (max-width: 500px) {
		padding: 0 2rem;

		/*CHILDREN_ELEMENTS*/
		h1 {
			font-size: 7.4vw;
			margin-bottom: 0;
		}

		section {
			margin: 0 auto;
			height: 50vh;
			padding: 0 2rem;
		}

		div {
			width: 100%;
			gap: 0;

			button {
				height: 0.8rem;
				font-size: 1.4rem;
			}
		}
	}

	@media (max-width: 500px) and (orientation: landscape) {
		padding: 0 4rem;

		/*CHILDREN_ELEMENTS*/
		h1 {
			font-size: 4.4vw;
			margin-bottom: 0;
		}

		section {
			width: 50vw;
			height: 100vh;
		}

		div {
			width: 60%;
			gap: 0;

			button {
				padding: 1.3rem 2rem;
				font-size: 1.2rem;
			}
		}
	}

	//TABLET
	@media (min-width: 501px) and (max-width: 1100px) {
		padding: 0 2rem;

		/*CHILDREN_ELEMENTS*/
		h1 {
			font-size: 4.4vw;
			margin-bottom: 2rem;
		}

		section {
			margin: 0 auto;
			width: 50vw;
			height: 60vh;
			padding: 0 2rem;
		}

		div {
			width: 70%;
			gap: 3vh;

			button {
				width: 50%;
			}
		}
	}

	@media (min-width: 501px) and (max-width: 1100px) and (orientation: landscape) {
		padding: 0 2rem;

		/*CHILDREN_ELEMENTS*/
		h1 {
			font-size: 3.4vw;
		}

		section {
			width: 50vw;
			height: 100vh;
		}

		div {
			width: 60%;

			button {
				height: 8vh;
				padding: 0.8rem 2rem;
				font-size: 2vw;
			}
		}
	}
`

export const ConctatsWrapper = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	gap: 4rem;
	width: 100%;

	/*CHILDREN_ELEMENTS*/
	a {
		width: 100%;
		text-decoration: none;

		/*CHILDREN_ELEMENTS*/
		button {
			width: inherit;
		}
	}
`
