import styled from 'styled-components'

export const MainWrapper = styled.main`
	width: 100%;
	height: 100vh;
`

//CONTAINS_ALL_PAGE_RESPONSIVITY
export const Presentation = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 100vh;
	padding: 0 12rem;
	background-color: var(--blue-color);

	/*MOBILE*/
	@media (max-width: 500px) {
		flex-flow: column-reverse;
		justify-content: center;
		align-items: center;
		padding: 0 6rem;
		height: 100vh;

		/*CHILDREN_ELEMENTS*/
		button {
			display: none;
		}

		div {
			display: flex;
			flex-flow: column wrap;
			align-items: center;
			width: 100%;

			img {
				width: 45vw;
			}

			div {
				text-align: center;
				justify-content: center;
				align-items: center;
				text-align: center;
				width: 100%;

				h1 {
					font-size: 10vw;
					margin-top: 2rem;
					width: 100%;
				}

				p {
					font-size: 3.5vw;
				}
			}
		}
	}

	@media (max-width: 500px) and (orientation: landscape) {
		div {
			img {
				width: 25vw;
			}

			button {
				display: none;
			}

			div {
				p {
					font-size: 2.3vw;
				}
			}
		}
	}

	//TABLET
	@media (min-width: 501px) and (max-width: 1100px) {
		width: 100%;
		padding: 8rem;
		justify-content: center;
		align-items: center;
		text-align: center;
		flex-flow: column-reverse;

		/*CHILDREN_ELEMENTS*/
		div {
			align-items: center;
			display: flex;
			flex-flow: column;
			width: 100%;
			padding: 0;
			margin: 0;

			img {
				width: 25rem;
			}

			/*CHILDREN_ELEMENTS*/
			div {
				h1 {
					font-size: 7.4vw;
					width: 100%;
					margin-bottom: 2rem;
				}

				p {
					font-size: 2vw;
				}
			}

			button {
				width: 36vw;
			}
		}
	}

	@media (min-width: 501px) and (max-width: 1100px) and (orientation: landscape) {
		width: 100%;
		padding: 8rem;
		justify-content: center;
		align-items: center;
		text-align: center;
		flex-flow: column-reverse;

		/*CHILDREN_ELEMENTS*/
		div {
			align-items: center;
			display: flex;
			flex-flow: column;
			width: 100%;
			padding: 0;
			margin: 0;

			img {
				width: 20rem;
			}

			/*CHILDREN_ELEMENTS*/
			div {
				h1 {
					font-size: 6vw;
					width: 100%;
					margin-bottom: 2rem;
				}

				p {
					font-size: 1.8vw;
				}
			}

			button {
				display: none;
			}
		}
	}
`

export const WhoIAm = styled.div`
	display: flex;
	flex-flow: column wrap;
	justify-content: space-between;
	align-items: center;
	width: 50%;

	/*CHILDREN_ELEMENTS*/
	div {
		/*CHILDREN_ELEMENTS*/
		h1 {
			width: 100%;
			font: 9rem harry-fat, Helvetica, sans-serif;
			width: 80%;
			color: var(--green-color);

			span {
				color: #ffffff;
			}
		}

		p {
			font: 1.6rem now-light, Helvetica, sans-serif;
			color: #ffffff;
		}

		//CREATE_SPACE_BETWEEN_BUTTON_AND_TEXT
		p + p + p {
			margin-bottom: 2rem;
		}
	}
`

export const PresentationImage = styled.div`
	display: flex;
	justify-content: flex-end;

	/*CHILDREN_ELEMENTS*/
	img {
		width: 75%;
		border-radius: 50%;
		box-shadow: -4rem 1rem 3rem rgba(0, 0, 0, 0.3);
	}
`
