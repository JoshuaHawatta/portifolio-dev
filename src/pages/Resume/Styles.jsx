import styled, { keyframes } from 'styled-components'

const pop = keyframes`
    0% {
        div { display: none; }
        transform: scale(0);
    }
    50% {
        div { display: flex; }
        transform: scale(1.2);
    }
    100% { transform: scale(1); }
`

//CONTAINS_ALL_PAGE_RESPONSIVITY
export const ArticleWrapper = styled.article`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);

	/*CHILDREN_ELEMENTS*/
	img {
		width: 100%;
		height: 100vh;
		margin: 0 auto;
		position: absolute;
		z-index: -1;
	}

	/*MOBILE*/
	@media (max-width: 500px) {
		display: flex;
		align-items: center;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 110vh;

		img {
			height: 110vh;
		}

		/*CHILDREN_ELEMENTS*/
		div {
			width: 100%;
			height: 110vh;
			padding: 6rem 0;
			margin: 0 auto;
			flex-flow: column;
			align-items: center;
			border-radius: unset;

			div {
				flex-flow: column;
				align-items: center;
				width: 100%;
				height: 100%;

				img {
					width: 20rem;
					height: 20rem;
				}

				div {
					width: 75%;

					p {
						text-align: center;
						font-size: 1.7vh;
					}
				}
			}

			aside {
				display: flex;
				justify-content: center;
				align-items: center;
				transform: unset;
				flex-wrap: wrap;
				width: 60%;
				height: 15%;

				svg {
					margin: 1rem 0;
					font-size: 2.3vh;
				}
			}
		}
	}

	@media (max-width: 500px) and (orientation: landscape) {
	}

	//TABLET
	@media (min-width: 501px) and (max-width: 1100px) {
	}

	@media (min-width: 501px) and (max-width: 1100px) and (orientation: landscape) {
	}
`

export const Glassmorphisim = styled.div`
	display: flex;
	flex-flow: column wrap;
	justify-content: space-evenly;
	align-items: flex-start;
	width: 80%;
	height: 60vh;
	padding: 0 2rem;
	border-radius: 4rem;
	backdrop-filter: blur(1rem);
	-webkit-backdrop-filter: blur(1rem);
	background-color: rgba(255, 255, 255, 0.1);
	animation: ${pop} 0.5s ease forwards;

	div {
		display: flex;
		width: 100%;

		img {
			z-index: unset;
			position: unset;
			width: 30rem;
			height: 30rem;
			border-radius: 50%;
		}

		div {
			display: flex;
			flex-flow: column wrap;
			text-align: left;
			justify-content: space-evenly;
			margin: 0 auto;
			max-width: unset;
			width: 60%;
			height: 100%;

			/*CHILDREN_ELEMENTS*/
			p {
				font: 1.7rem now-light Arial, Helvetica, sans-serif;
				color: #ffffff;
			}
		}
	}

	aside {
		display: flex;
		align-items: center;
		gap: 2rem;
		width: 80%;
		height: 10%;
		transform: translateX(6%);

		//CHILDREN_ELEMENTS
		svg {
			font-size: 2.8rem;
		}
	}
`
