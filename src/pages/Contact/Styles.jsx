import styled from 'styled-components'

export const ArticleWrapper = styled.article`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	height: 100vh;
	padding: 0 12rem;
	background: var(--blue-color);

	aside {
		display: none;

		/*CHILDREN_ELEMENTS*/
		button {
			width: 60%;
			position: absolute;
			top: 5rem;
			left: 8rem;
		}
	}

	/*MOBILE*/
	@media (max-width: 779px) {
		flex-flow: column;
		justify-content: center;
		padding: 0 6rem;
		height: 150vh;

		/*CHILDREN_ELEMENTS*/
		aside {
			display: unset;
		}
	}

	/*MOBILE_LAND_SCAPE_WITH_BUTTONS*/
	@media (max-height: 520px) and (orientation: landscape) {
		display: none;
	}
`

export const ConctatsWrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	gap: 2rem;
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

	/*MOBILE*/
	@media (max-width: 779px) {
		height: 50vh;
	}

	/*TABLETS*/
	@media (max-width: 779px) and (min-height: 900px) {
		font-size: 3.5rem;
		gap: 3rem;
		width: 100%;
	}
`

export const Line = styled.div`
	height: 75vh;
	width: 0.1rem;
	margin: 0 auto;
	background-color: var(--green-color);

	/*MOBILE*/
	@media (max-width: 779px) {
		display: none;
	}
`

export const FormWrapper = styled.form`
	display: flex;
	flex-flow: column wrap;
	align-items: center;
	justify-content: center;
	width: 100%;
`

export const FormSection = styled(FormWrapper)`
	/*CHILDREN_ELEMENTS*/
	div {
		display: flex;
		flex-flow: column wrap;
		gap: 1.7rem;

		/*CHILDREN_ELEMENTS*/
		label {
			font: 1.6rem now-light, Helvetica, sans-serif;
			color: var(--blue-color);
			text-align: center;
			transform: translateY(2rem);
			background: #ffffff;
			width: 40%;
		}

		input,
		textarea {
			outline: none;
			font: 1.4rem now-light, Helvetica, sans-serif;
			width: 35rem;
			border-radius: 0.4rem;
			padding: 2rem 1rem;
			border: 0.1rem solid var(--blue-color);
		}

		input {
			color: #000000;
			height: 5vh;
			transition: 0.3s ease-out;

			/*SIBLINGS*/
			& + div {
				width: 100%;
				height: 0.1rem;
				background-color: #ffffff;
			}
		}

		textArea {
			resize: none;
			height: 19vh;
		}
	}

	/*MOBILE*/
	@media (max-width: 700px) {
		/*CHILDREN_ELEMENTS*/
		div {
			/*CHILDREN_ELEMENTS*/
			input,
			textarea {
				width: 18rem;
			}

			textarea {
				height: 12vh;
			}

			label {
				font-size: 1.2rem;
			}
		}
	}

	/*TABLETS*/
	@media (min-width: 701px) and (max-width: 1200px) {
		margin-top: 1.5rem;
		height: 9rem;
		/*CHILDREN_ELEMENTS*/
		div {
			/*CHILDREN_ELEMENTS*/
			input,
			textarea {
				width: 70vw;
			}

			textarea {
				height: 12vh;
			}
		}

		button {
			width: 92%;
		}
	}

	/*TABLETS_LANDSCAPE*/
	@media (min-width: 701px) and (max-width: 1200px) and (orientation: landscape) {
		height: 11rem;
		/*CHILDREN_ELEMENTS*/
		div {
			/*CHILDREN_ELEMENTS*/
			input,
			textarea {
				width: 20vw;
			}

			textarea {
				height: 12vh;
			}
		}

		button {
			width: 100%;
		}
	}
`
