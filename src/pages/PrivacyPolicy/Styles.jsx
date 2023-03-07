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
	@media (max-width: 779px) {
		padding: 12rem 4rem;

		/*CHILDREN_ELEMENTS*/
		h1 {
			font-size: 6rem;
		}

		h2 {
			font-size: 3rem;
		}

		p {
			font-size: 1.3rem;
			width: 100%;
		}
	}
`

export const StyledPrivacyPolicySection = styled.section``
