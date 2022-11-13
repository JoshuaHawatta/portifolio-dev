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

export const Conctats = styled.section`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: space-between;
	width: 30vw;
	height: 80vh;
	max-height: 80vh;
	background: #ffffff;
	padding: 4rem;
	border-radius: 3rem;

	/*CHILDREN_ELEMENTS*/
	h4 {
		font: 2.8rem now-light, Helvetica, sans-serif;
		color: var(--blue-color);
	}

	div {
		display: flex;
		flex-flow: column wrap;
		justify-content: center;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100vh;

		/*CHILDREN_ELEMENTS*/
		a {
			width: 100%;
			text-decoration: none;

			/*CHILDREN_ELEMENTS*/
			button {
				margin: 1rem 0;
			}
		}
	}

	/*MOBILE*/
	@media (max-width: 779px) {
		display: flex;
		width: 100%;
		overflow: hidden;
		height: 50vh;

		margin-bottom: 6rem;

		/*CHILDREN_ELEMENTS*/
		h4 {
			font-size: 2.2rem;
		}
	}

	/*TABLETS*/
	@media (max-width: 779px) and (min-height: 900px) {
		/*CHILDREN_ELEMENTS*/
		h4 {
			font-size: 3.5rem;
		}

		div {
			display: flex;
			width: 100%;
			justify-content: center;
			transform: translateY(-11rem);

			button {
				width: 100%;
			}
		}
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

export const FormWrapper = styled.section`
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	background: #ffffff;
	border-radius: 3rem;
	width: 30vw;
	height: 80vh;
	max-height: 80vh;
	padding: 4rem 0;

	/*CHILDREN_ELEMENTS*/
	h4 {
		font: 2.8rem now-light, Helvetica, sans-serif;
		color: var(--blue-color);
	}

	/*MOBILE*/
	@media (max-width: 779px) {
		width: 100%;
		height: unset;
		max-height: unset;

		/*CHILDREN_ELEMENTS*/
		h4 {
			font-size: 2rem;
		}
	}
`

export const FormSection = styled.section`
	display: flex;
	justify-content: center;
	width: 100%;

	/*CHILDREN_ELEMENTS*/
	div {
		display: flex;
		flex-flow: column wrap;
		margin-bottom: 0.5rem;

		/*CHILDREN_ELEMENTS*/
		label {
			font: 1.6rem now-light, Helvetica, sans-serif;
			color: var(--blue-color);
			text-align: center;
			margin: 0.8rem 0;
			padding: 0.5rem 0;
			transform: translateY(1.8rem);
			background: #ffffff;
			width: 35%;
		}

		input,
		textarea {
			outline: none;
			font: 1.4rem now-light, Helvetica, sans-serif;
			width: 30rem;
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
	@media (max-width: 779px) {
		width: 100%;

		/*CHILDREN_ELEMENTS*/
		div {
			padding: 0 2rem;
			margin: 0 2rem;
			width: 100%;
			justify-content: center;

			/*CHILDREN_ELEMENTS*/
			input,
			textarea {
				width: 100%;
			}

			textarea {
				height: 12vh;
			}

			label {
				font-size: 1.2rem;
			}
		}
	}
`

export const SendEmailButton = styled.button.attrs({ type: 'submit' })`
	font: 2rem now-light, Helvetica, sans-serif;
	color: var(--blue-color);
	background: none;
	outline: none;
	border: none;
	text-decoration: underline;
	margin-top: 2rem;
	width: 11vw;
	cursor: pointer;
`

export const FooterLinksSection = styled.section`
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-end;
	align-items: center;
	position: absolute;
	padding: 1rem 4rem;
	width: 100%;
	bottom: 0;

	/*CHILDREN_ELEMENTS*/
	a {
		font-size: 2rem;
		margin: 0 0.8rem;
		color: var(--green-color);
	}
`
