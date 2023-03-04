import styled from 'styled-components'

export const HeaderWrapper = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	position: absolute;
	left: 0;
	width: 6%;
	height: 100vh;
	padding: 1rem;
	z-index: 2;
	box-shadow: 0.4rem 0 2rem rgba(0, 0, 0, 0.2);
	background-color: var(--blue-color);

	/*MOBILE*/
	@media (max-width: 779px) {
		background: none;
		box-shadow: none;
		width: 17%;
	}
`

export const LogoDiv = styled.div`
	z-index: 4;

	/*CHILDREN_ELEMENTS*/
	a {
		font: 4.5rem harry-fat, Arial, Helvetica, sans-serif;
		text-decoration: none;
		color: var(--green-color);

		span {
			color: #ffffff;
		}
	}
`

export const NavBar = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 100vh;
	transition: all 0.2s ease;

	/*CHILDREN_ELEMENTS*/
	div {
		display: flex;
		align-items: center;
		flex-direction: column;

		/*CHILDREN_ELEMENTS*/
		a {
			font: 2.5rem now-light, Helvetica, sans-serif;
			text-decoration: none;
			margin: 0 0.8rem;
			color: var(--green-color);
			transition: all 0.3s ease-in-out;

			/*EFFECTS*/
			&:focus {
				font-size: 3.2rem;
				color: #ffffff;
			}
		}

		p {
			color: #ffffff;
			font: 1.1rem now-light, Arial, Helvetica;
		}
	}

	/*MOBILE*/
	@media (max-width: 779px) {
		position: fixed;
		width: 17%;
		top: 0;
		left: 0;
		padding: 8rem 0;
		transform: ${({ showNavBar }) => (showNavBar ? 'translateX(-100%)' : 'translateX(0)')};
		box-shadow: ${({ showNavBar }) => (!showNavBar ? '.4rem 0 2rem rgba(0, 0, 0, .2)' : 'none')};
		background-color: var(--blue-color);

		/*CHILDREN_ELEMENTS*/
		div {
			transform: translateY(4rem);
		}
	}
`

export const HamburgerDiv = styled.div`
	display: none;
	position: fixed;
	justify-content: space-around;
	align-items: flex-end;
	flex-flow: column nowrap;
	width: 5rem;
	height: 3rem;
	top: 2rem;
	margin: 1rem 2rem 0 0;
	right: 0;
	transform: translateY(-0.5rem);

	/*CHILDREN_ELEMENTS*/
	div {
		width: 3rem;
		height: 0.2rem;
		border-radius: 0.5rem;
		transform-origin: 1px;
		transition: 0.2s ease all;
		background-color: var(--green-color);

		/*PSEUDO_ELEMENTS*/
		&:nth-child(1) {
			transform: ${({ opened }) => !opened && 'rotate(45deg)'};
		}

		&:nth-child(2) {
			transform: ${({ opened }) => !opened && 'translateY(-.8rem) rotate(-180deg)'};
		}
	}

	/*MOBILE*/
	@media (max-width: 779px) {
		display: flex;
	}
`
