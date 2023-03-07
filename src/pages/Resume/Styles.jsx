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

export const ArticleWrapper = styled.article`
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);

	/*CHILDREN_COMPONENTS*/
	img {
		width: 100%;
		height: 100vh;
		position: absolute;
		z-index: -1;
	}
`

export const Glassmorphisim = styled.div`
	display: flex;
	flex-flow: column wrap;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	height: 55vh;
	margin-bottom: 10rem;
	padding: 3rem;
	border-radius: 2rem;
	backdrop-filter: blur(1rem);
	-webkit-backdrop-filter: blur(1rem);
	background-color: rgba(255, 255, 255, 0.1);
	animation: ${pop} 0.5s ease forwards;

	/*MOBILE*/
	@media (max-width: 779px) {
		margin: 0 auto;
		padding: 2rem 0;
		flex-flow: row wrap;
		width: 100%;
		height: 75vh;

		/*CHILDREN ELEMENTS*/
		h4 {
			font-size: 4rem;
		}
	}

	/*TABLES*/
	@media (min-width: 1016px) and (max-width: 1240px) {
		height: 85vh;
	}
`

export const HardSkills = styled.section`
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	position: absolute;
	width: 100%;
	height: 90vh;
	padding: 0 12rem;

	/*CHILDREN_ELEMENTS*/
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-flow: row wrap;
		align-items: center;

		/*ICON_WITH_PERCENTAGE_ELEMENT*/
		div > div {
			width: 9%;
			max-width: 9%;
			text-align: center;
		}
	}

	button {
		position: absolute;
		bottom: 1.5rem;
		width: 18%;
	}

	/*MOBILE*/
	@media (max-width: 779px) {
		padding: 0 4rem;

		/*CHILDREN_ELEMENTS*/
		button {
			bottom: -5rem;
			font-size: 1.5rem;
			width: 45%;
			max-width: unset;
		}

		div {
			/*CHILDREN_ELEMENTS*/
			button {
				bottom: 5rem;
			}
		}

		button {
			bottom: 0;
		}

		/*ICON_WITH_PERCENTAGE_ELEMENT*/
		div > div > div {
			text-align: center;
			width: 20%;
			margin-top: 2rem;

			/*CHILDREN_ELEMENTS*/
			h5 {
				font-size: 1rem;
			}
		}
	}

	/*TABLES*/
	@media (min-width: 1016px) and (max-width: 1240px) {
		height: 100vh;

		/*CHILDREN_ELEMENTS*/
		button {
			width: 40%;
		}
	}
`

export const SoftSkills = styled(HardSkills)`
	/*ICON_WITH_PERCENTAGE_ELEMENT*/
	div > div > div {
		width: 15%;
	}
`

export const MySelf = styled(HardSkills)`
	div > div {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		padding: 0 4rem;
		width: 95%;

		/*CHILDREN_ELEMENTS*/
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
			height: 41vh;

			/*CHILDREN_ELEMENTS*/
			p {
				font: 1.7rem now-light Arial, Helvetica, sans-serif;
				color: #ffffff;
			}
		}
	}

	/*MOBILE*/
	@media (max-width: 779px) {
		div > div {
			flex-flow: column wrap;
			padding: 0 1rem;

			/*CHILDREN_ELEMENTS*/
			img {
				width: 20rem;
				height: 20rem;
			}

			div {
				height: unset;
				text-align: center;
				margin-top: 2rem;
				width: 100%;

				/*CHIDLREN_ELEMENTS*/
				p {
					font-size: 1.3rem;
				}
				p ~ p {
					margin-top: 1rem;
				}
			}
		}
	}

	/*SMALL_LAPTOPS_TEXT_SIZE*/
	@media (min-width: 790px) and (max-width: 1104px) and (min-height: 1000px) {
		div > div > div > p {
			font-size: 1.5rem;
		}
	}

	/*TABLETS*/
	@media (max-width: 1100px) and (orientation: landscape) {
		div > div > p {
			width: 30rem;
		}
	}
`
