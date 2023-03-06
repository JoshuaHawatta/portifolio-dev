import styled from 'styled-components'

export const CallToActionButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 5rem;
	border-radius: 0.4rem;
	font: 2.3rem now-light, Helvetica, sans-serif;
	z-index: 1;

	background: ${({ outlined, color }) => {
		if (outlined) {
			return 'linear-gradient(to left, rgba(0, 0, 0, 0) 50%, #FFFFFF 50%) right'
		} else if (color) {
			return `linear-gradient(to left, rgba(0, 0, 0, 0) 50%, #${color} 50%) right`
		}

		return 'linear-gradient(to left, var(--blue-color) 50%, #FFFFFF 50%) right'
	}};

	border: ${({ color }) => (color ? `.1rem solid #${color}` : `.1rem solid #FFFFFF`)};
	outline: none;
	width: ${({ btnWidth }) => (!btnWidth ? '22rem' : btnWidth)};

	background-size: 200% 100%;
	transition: 0.3s ease-out;
	color: ${({ color }) => (color ? `#${color}` : `#FFFFFF`)};

	/*CHILDREN_ELEMENTS*/
	svg {
		margin-right: 1rem;
	}

	/*EFFECTS*/
	&:hover {
		background-position: left;
		color: var(--blue-color);
		cursor: pointer;

		color: ${({ outlined, color }) => {
			if (outlined) return '#000000'
			else if (color) return '#FFFFFF'

			return 'var(--blue-color)'
		}};
	}

	/*MOBILE*/
	@media (max-width: 779px) {
		margin-top: 2rem;
		width: 18rem;
		padding: 2rem;
		font-size: 2rem;
	}

	/*TABLETS*/
	@media (min-width: 780px) and (max-width: 1015px) {
		margin-top: 2rem;
		width: 18rem;
		padding: 2rem;
		font-size: 2rem;
	}
`
