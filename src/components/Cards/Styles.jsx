import styled from 'styled-components'

const CardWrapper = styled.section`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	width: 30vw;
	height: 80vh;
	max-height: 80vh;
	padding: 5rem;
	background: #ffffff;
	border-radius: 3rem;

	/*CHILDREN_ELEMENTS*/
	h4 {
		font: 2.7rem now-light, Helvetica, sans-serif;
		position: absolute;
		top: 12rem;
		color: var(--blue-color);
	}

	/*MOBILE*/
	@media (max-width: 779px) {
		width: 100%;
		align-items: center;
		justify-content: center;
		margin-bottom: 6rem;
		height: 55vh;
		padding: 3rem;

		overflow: hidden;

		/*CHILDREN_ELEMENTS*/
		h4 {
			position: unset;
			top: unset;
			font-size: 2.2rem;
		}
	}

	/*TABLETS*/
	@media (max-width: 779px) and (min-height: 900px) {
		/*CHILDREN_ELEMENTS*/
		width: 100%;
		h4 {
			font-size: 3.5rem;
		}
	}

	/*TABLETS_LANDSCAPE*/
	@media (min-width: 780px) and (max-width: 1200px) and (orientation: landscape) {
		/*CHILDREN_ELEMENTS*/
		h4 {
			font-size: 2.4rem;
		}
	}
`
export default CardWrapper
